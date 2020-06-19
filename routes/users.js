//Require node modules 
const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/users');

//Define route(s)
router.get('/users', usersCtrl.index);


module.exports = router;
