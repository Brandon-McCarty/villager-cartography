const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

const { rejectUnauthenticated } = require('../modules/authentication-middleware');

router.get('/:id', rejectUnauthenticated, (req, res) => {
    // GET details for chosen location
    const query = `
                SELECT * FROM "locations"
                WHERE id = $1;
                `;

    pool.query(query, [req.params.id])
        .then(result => {
            res.send(result.rows);
        }).catch(err => {
            console.log('Error in getting locations', err);
        })
}); // END GET

router.delete('/:id', rejectUnauthenticated, (req, res) => {
    // Delete chosen location
    const query = `
                DELETE FROM "locations"
                WHERE "id" = $1;
                `;

    pool.query(query, [req.params.id])
        .then(result => {
            res.sendStatus(204);
        }).catch(err => {
            console.log('Error in adding location', err);
        })
}); // END DELETE

module.exports = router;