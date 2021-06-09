const express = require('express');
const app = require('../server.js');
const apiRouter = require('./api.js');
const meetingsRouter = express.Router();

const {createMeeting,
    getAllFromDatabase,
    addToDatabase,
    deleteAllFromDatabase} = require('./db.js');


module.exports = meetingsRouter;

meetingsRouter.get('', (req, res) => {
    res.send(getAllFromDatabase('meetings'));
})

meetingsRouter.post('', (req, res) => {
    const newMeeting = addToDatabase('meetings', createMeeting());
    res.status(201).send(newMeeting);
})

meetingsRouter.delete('', (req, res) => {
    deleteAllFromDatabase('meetings');
    res.status(204).send();
})