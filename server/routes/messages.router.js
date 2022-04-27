const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

const { rejectUnauthenticated } = require('../modules/authentication-middleware');

// Get messages for world
router.get('/:id', rejectUnauthenticated, (req, res) => {

  const query = `
                SELECT "message_board".id, to_char("message_board".date, 'mm/dd/yy') as "date", to_char("message_board".time, 'hh12:mi AM') as "time", "message_board".message, "message_board".world_id, "user".username
                FROM "message_board"
                JOIN "user" ON "message_board".user_id = "user".id
                WHERE "message_board".world_id = $1;
    `;

  pool.query(query, [req.params.id])
    .then(result => {
      res.send(result.rows);
    }).catch(err => {
      console.log('Error in getting messages', err);
    })
});

// Add new message
router.post('/', (req, res) => {
  const query = `
                  INSERT INTO "message_board" ("message", "user_id", "world_id")
                  VALUES ($1, $2, $3);
                  `;

  const values = [req.body.message, req.user.id, req.body.world_id]

  pool.query(query, values)
    .then(result => {
      res.sendStatus(201);
    }).catch(err => {
      console.log('Error in adding message', err);
    })
});

module.exports = router;
