const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

const { rejectUnauthenticated } = require('../modules/authentication-middleware');


//  * GET route for /worlds
router.get('/', rejectUnauthenticated, (req, res) => {
    // Select all worlds for the current user
    const query = `
                SELECT * FROM "worlds" 
                WHERE "user_id" = $1;
                `;
    pool.query(query, [req.user.id])
        .then(result => {
            res.send(result.rows)
        })
        .catch(err => {
            console.log('Error in getting worlds', err);
        })
}); // END GET for /worlds

router.post('/', rejectUnauthenticated, (req, res) => {
    // Add new world from user input
    const query = `
                INSERT INTO "worlds" ("world_name", "user_id")
                VALUES ($1, $2);
                `;
    const values = [req.body.world_name, req.user.id]

    pool.query(query, values)
        .then(result => {
            res.sendStatus(201);
        }).catch(err => {
            console.log('Error in creating new world', err);
        })
});

router.delete('/:id', rejectUnauthenticated, (req, res) => {
    // Delete specified world
    const query = `
                DELETE FROM "worlds"
                WHERE id = $1 AND user_id = $2;
                `;
    pool.query(query, [req.params.id, req.user.id])
        .then(result => {
            res.sendStatus(204);
        }).catch(err => {
            console.log('Error in creating new world', err);
        })
})

module.exports = router;