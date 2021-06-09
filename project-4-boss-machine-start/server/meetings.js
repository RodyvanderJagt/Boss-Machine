const express = require('express');
const app = require('../server.js');
const apiRouter = require('./api.js');
const meetingsRouter = express.Router();

const {createMeeting,
    addToDatabase,
    deleteAllFromDatabase} = require('./db.js');


module.exports = meetingsRouter;

meetingsRouter.post('', (req, res) => {
    const newMeeting = createMeeting();
    const addedMeeting = addToDatabase('meetings', newMeeting);
    if (addedMeeting) {
        res.status(201).send();
    } else {
        res.status(404).send();
    }
})
