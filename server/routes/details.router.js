const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

const { rejectUnauthenticated } = require('../modules/authentication-middleware');

router.get('/:id', rejectUnauthenticated, (req, res) => {
    // GET for locations of chosen world
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
});

module.exports = router;