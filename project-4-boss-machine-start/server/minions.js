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

minionsRouter.get('/:minionId/work', (req, res) => {
    const work = getAllFromDatabase('work').filter(job => job.minionId === req.params.minionId);
    res.send(work);
})

minionsRouter.post('/:minionId/work', (req, res) => {
    const newWork = req.body;
    newWork.minionId = req.params.minionId;
    const addedWork = addToDatabase('work', newWork);
    res.status(201).send(addedWork);
})

minionsRouter.param('workId', (req, res, next, id) => {
    const work = getFromDatabaseById('work', id);
    if (work) {
        req.work = work;
        next();
    } else {
        res.status(404).send();
    }
})

minionsRouter.put('/:minionId/work/:workId', (req, res) => {
    if (req.minion.id === req.body.minionId) {
        const updatedWork = updateInstanceInDatabase('work', req.body);
        res.send(updatedWork);
    } else {
        res.status(400).send();
    }

})

minionsRouter.delete('/:minionId/work/:workId', (req, res) => {
    const deleted = deleteFromDatabasebyId('work', req.params.workId);
    if (deleted) {
        res.status(204).send();
    } else {
        res.status(500).send();
    }
})