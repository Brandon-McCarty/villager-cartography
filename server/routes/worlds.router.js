const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// Chance.js for random join code
const Chance = require('chance');
let chance = new Chance();

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
}); // END GET 

router.post('/', rejectUnauthenticated, (req, res) => {
    // Generate random join code
    let joinCode = chance.string({
        length: 10,
        pool: 'abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ123456789'
    });

    // Add new world from user input
    const query = `
                INSERT INTO "worlds" ("world_name", "user_id", "join_code")
                VALUES ($1, $2, $3);
                `;
    const values = [req.body.world_name, req.user.id, joinCode]

    pool.query(query, values)
        .then(result => {
            const queryText = `
                            INSERT INTO "user_worlds" ("user_id", "world_id")
                            SELECT $1, "id" FROM WORLDS
                            WHERE "join_code" = $2;
            `
            
            pool.query(queryText, [req.user.id, joinCode])
        .then(result => {
            res.sendStatus(201);
        }).catch(err => {
            console.log('Error in creating new world', err);
        })
        }).catch(err => {
            console.log('Error in creating new world', err);
        })
}); // END POST 

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
}); // END DELETE

module.exports = router;