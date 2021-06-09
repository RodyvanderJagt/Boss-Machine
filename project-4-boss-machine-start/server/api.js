const express = require('express');
const app = require('../server.js');
const apiRouter = express.Router();

/* const minionsRouter = require('./minions.js');
apiRouter.use('/minions', minionsRouter);
*/
const {createMeeting,
    getAllFromDatabase,
    getFromDatabaseById,
    addToDatabase,
    updateInstanceInDatabase,
    deleteFromDatabasebyId,
    deleteAllFromDatabase} = require('./db.js');

apiRouter.get('/:category', (req, res) => {
    const allItems = getAllFromDatabase(req.params.category);
    if (allItems) {
        res.send(allItems);
    } else {
        res.status(404).send();
    }
})

apiRouter.post('/:category', (req, res) => {
    const addedItem = addToDatabase(req.params.category, req.query);
    if (addedItem) {
        res.status(201).send(addedItem);
    } else {
        res.status(400).send();
    }
})

apiRouter.get('/:category/:itemId', (req, res) => {
    const singleItem = getFromDatabaseById(req.params.category, req.params.itemId);
    if (singleItem) {
        res.status(200).send(singleItem);
    } else {
        res.status(404).send();
    }
})

apiRouter.put('/:category/:itemId', (req, res) => {
    if(req.params.itemId) {
        req.query.id = req.params.itemId;
        const updatedItem = updateInstanceInDatabase(req.params.category, req.query);
        if (updatedItem) {
            return res.status(200).send(updatedItem);
        } 
    }
    return res.status(400).send();
})

apiRouter.delete('/:category/:itemId', (req, res) => {
    const itemId = req.params.itemId;
    const category = req.params.category;
    const isDeleted = deleteFromDatabasebyId(category, itemId);
    if(isDeleted) {
        res.status(200).send(`Item with id ${itemId} removed from ${category}.`)
    } else {
        res.status(404).send();
    }
})



module.exports = apiRouter;
