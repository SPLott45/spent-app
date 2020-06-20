const express = require('express');
const router = express.Router();
const categoriesCtrl = require('../controllers/categories');

//GET /categories/new
router.get('/new', categoriesCtrl.new);

router.post('/', categoriesCtrl.create);

router.get('/', categoriesCtrl.index);





module.exports = router;