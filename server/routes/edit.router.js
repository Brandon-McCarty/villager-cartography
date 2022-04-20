const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

const { rejectUnauthenticated } = require('../modules/authentication-middleware');

router.put('/:id', rejectUnauthenticated, (req, res) => {
    const edit = req.body
    const query = `
                UPDATE "locations"
                SET "location_name" = $1, "x_coordinate" = $2, "y_coordinate" = $3,
                "z_coordinate" = $4, "description" = $5, "explored_status" = $6
                WHERE id = $7;
                `;

    const values = [
        edit.location_name,
        edit.x_coordinate,
        edit.y_coordinate,
        edit.z_coordinate,
        edit.description,
        edit.explored_status,
        edit.id
    ]

    pool.query(query, values)
        .then(result => {
            res.sendStatus(200);
        }).catch(err => {
            console.log('Error in getting locations', err);
        })
});

module.exports = router;