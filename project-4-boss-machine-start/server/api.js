const express = require('express');
const app = require('../server.js');
const apiRouter = express.Router();

const minionsRouter = require('./minions.js');
apiRouter.use('/minions', minionsRouter);

const meetingsRouter = require('./meetings.js');
apiRouter.use('/meetings', meetingsRouter);

const ideasRouter = require('./ideas.js');
apiRouter.use('/ideas', ideasRouter);

module.exports = apiRouter;
