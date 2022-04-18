const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


//  * GET route for /worlds
router.get('/', (req, res) => {
  // Select all worlds for the logged in user
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
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;