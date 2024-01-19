const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');

router.get('/items', controller.getAllItems);
router.post('/items', controller.createItem);
router.put('/items/:id', controller.updateItem);
router.delete('/items/:id', controller.deleteItem);

module.exports = router;
