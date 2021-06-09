const express = require('express');
const ideasRouter = express.Router();

const {getAllFromDatabase,
    getFromDatabaseById,
    addToDatabase,
    updateInstanceInDatabase,
    deleteFromDatabasebyId} = require('./db.js');

const checkMillionDollarIdea = require('./checkMillionDollarIdea.js');

module.exports = ideasRouter;

ideasRouter.get('', (req, res) => {
    res.send(getAllFromDatabase('ideas'));
})

ideasRouter.post('', checkMillionDollarIdea, (req, res) => {
    const addIdea = addToDatabase('ideas', req.body);
    res.status(201).send(addIdea);
})

ideasRouter.param('ideaId', (req, res, next, id) => {
    const idea = getFromDatabaseById('ideas', id);
    if (idea) {
        req.idea = idea;
        next();
    } else {
        res.status(404).send();
    }
})

ideasRouter.get('/:ideaId', (req, res) => {
    res.send(req.idea);
})

ideasRouter.put('/:ideaId', checkMillionDollarIdea, (req, res) => {
    const updatedIdea = updateInstanceInDatabase('ideas', req.body);
    res.send(updatedIdea);
})

ideasRouter.delete('/:ideaId', (req, res) => {
    const deletedIdea = deleteFromDatabasebyId('ideas', req.params.ideaId);
    if (deletedIdea){
        res.status(204).send();
    } else {
        res.status(500).send();
    }
})