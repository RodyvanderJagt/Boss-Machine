const express = require('express');
const app = require('../server.js');
const apiRouter = require('./api.js');
const minionsRouter = express.Router();

const {createMeeting,
    getAllFromDatabase,
    getFromDatabaseById,
    addToDatabase,
    updateInstanceInDatabase,
    deleteFromDatabasebyId,
    deleteAllFromDatabase} = require('./db.js');


module.exports = minionsRouter;

minionsRouter.get('', (req, res) => {
    const minions = getAllFromDatabase('minions');
    res.send(minions);
})

