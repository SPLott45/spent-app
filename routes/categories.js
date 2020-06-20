const express = require('express');
const router = express.Router();
const categoriesCtrl = require('../controllers/categories');

//GET /categories/new
router.get('/new', categoriesCtrl.new);
router.get('/', categoriesCtrl.index);

router.post('/', categoriesCtrl.create);

module.exports = router;