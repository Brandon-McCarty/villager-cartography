const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const worldsRouter = require('./routes/worlds.router');
const locationsRouter = require('./routes/locations.router');
const detailsRouter = require('./routes/details.router');
const editRouter = require('./routes/edit.router');
const messagesRouter = require('./routes/messages.router');
const profileRouter = require('./routes/profile.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/worlds', worldsRouter);
app.use('/locations', locationsRouter);
app.use('/details', detailsRouter);
app.use('/edit', editRouter);
app.use('/messages', messagesRouter);
app.use('/profile', profileRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
