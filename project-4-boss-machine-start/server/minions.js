const express = require('express');
const minionsRouter = express.Router();

const {getAllFromDatabase,
    getFromDatabaseById,
    addToDatabase,
    updateInstanceInDatabase,
    deleteFromDatabasebyId} = require('./db.js');

module.exports = minionsRouter;

minionsRouter.get('', (req, res) => {
    res.send(getAllFromDatabase('minions'));
})

minionsRouter.post('', (req, res) => {
    const addMinion = addToDatabase('minions', req.body);
    res.status(201).send(addMinion);
})

minionsRouter.param('minionId', (req, res, next, id) => {
    const minion = getFromDatabaseById('minions', id);
    if (minion) {
        req.minion = minion;
        next();
    } else {
        res.status(404).send();
    }
})

minionsRouter.get('/:minionId', (req, res) => {
    res.send(req.minion);
})

minionsRouter.put('/:minionId', (req, res) => {
    const updatedMinion = updateInstanceInDatabase('minions', req.body);
    res.send(updatedMinion);
})

minionsRouter.delete('/:minionId', (req, res) => {
    const deletedMinion = deleteFromDatabasebyId('minions', req.params.minionId);
    if (deletedMinion){
        res.status(204).send();
    } else {
        res.status(500).send();
    }
})