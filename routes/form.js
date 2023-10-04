const express = require('express');
const path = require('path');

const router = express.Router();

const formController = require('../controllers/form');

router.get('/form',formController.getForm );

router.post('/form/users', formController.postUser);

router.get('/form/users', formController.getUser);

router.delete('/form/users/:id', formController.deleteById);


module.exports = router;