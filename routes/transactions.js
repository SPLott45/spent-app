//Router takes requests from server.js and maps them to Controller

//Require node modules 
const express = require('express');
const router = express.Router();
const transactionsCtrl = require('../controllers/transactions');

//Define route(s)

//Define Create Transaction routes
router.get('/new', transactionsCtrl.new);
router.post('/transactions/index', transactionsCtrl.create);

//Define Read Transaction Index (List) routes
router.get('/transactions/index', transactionsCtrl.index);

//Show a Transaction routes
router.get('/transactions/index', transactionsCtrl.index);
router.get('/transactions/index/:id', transactionsCtrl.show);

//Define Delete Transaction routes
router.post('/transactions/idex/:id', transactionsCtrl.create);
router.delete('/transactions/:id', transactionsCtrl.delete);

module.exports = router;