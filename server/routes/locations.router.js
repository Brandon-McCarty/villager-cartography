const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

const {rejectUnauthenticated} = require('../modules/authentication-middleware');
/**
 * GET route template
 */
router.get('/:id', rejectUnauthenticated, (req, res) => {
    // GET for locations of chosen world
    console.log('ID IS', req.params.id);
    const query = `
                SELECT * FROM "locations"
                WHERE world_id = $1;
                `;

    pool.query(query, [req.params.id])
        .then(result => {
            res.send(result.rows);
        }).catch(err => {
            console.log('Error in getting locations', err);
        })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
    // POST route code here
});

module.exports = router;
