const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// Get information of worlds created by user
router.get('/', (req, res) => {

    const query = `
                SELECT * FROM "worlds"
                WHERE "user_id" = $1;
                `;

    pool.query(query, [req.user.id])
        .then(result => {
            res.send(result.rows);
        }).catch(err => {
            console.log('Error in joining world', err);
        })
});

module.exports = router;