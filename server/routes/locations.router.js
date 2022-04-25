const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

const { rejectUnauthenticated } = require('../modules/authentication-middleware');



router.get('/:id', rejectUnauthenticated, (req, res) => {
    // GET for locations of chosen world
    const query = `
                SELECT "locations".id, "locations".location_name, "locations".x_coordinate, "locations".y_coordinate, "locations".z_coordinate, 
                "locations".explored_status, "locations".description, "locations".world_id FROM "locations"
                JOIN "worlds" ON "locations".world_id = "worlds".id
                WHERE "worlds".join_code = $1;
                `;

    pool.query(query, [req.params.id])
        .then(result => {
            res.send(result.rows);
        }).catch(err => {
            console.log('Error in getting locations', err);
        })
}); // END GET


router.post('/', rejectUnauthenticated, (req, res) => {
    const location = req.body
    // POST new location
    const query = `
                INSERT INTO "locations" ("location_name", "x_coordinate", "y_coordinate", "z_coordinate", "description", "explored_status", 
                "world_id")
                VALUES ($1, $2, $3, $4, $5, $6, $7);
                `;

    const values = [
        location.location_name,
        location.x_coordinate,
        location.y_coordinate,
        location.z_coordinate,
        location.description,
        location.explored_status,
        location.world_id
    ]

    pool.query(query, values)
        .then(result => {
            res.sendStatus(201);
        }).catch(err => {
            console.log('Error in adding location', err);
        })
}); // END POST


module.exports = router;
