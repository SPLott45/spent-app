//Router takes requests from server.js and maps them to Controller

//Require node modules 
const express = require('express');
const router = express.Router();
const transactionsCtrl = require('../controllers/transactions');

//Define route(s)
router.get('/', transactionsCtrl.index);

//router.post()
router.post('/categories/:id/transactions', transactionsCtrl.create);
router.get('/transactions/:id', transactionsCtrl.show);
router.delete('/transactions/:id', transactionsCtrl.delete);
//router.put()



module.exports = router;