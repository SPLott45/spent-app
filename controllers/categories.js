const Category = require('../models/category');
const category = require('../models/category');
const { request } = require('express');

module.exports = {
    new: newCategory,
    create,
    index
};

function newCategory(req, res) {
    res.render('categories/new');
};

function create(req, res) {

   const category = new Category(req.body);

   category.save(function(err) {
       res.redirect('/dashboard');
   });
};

function index(req, res) {
    Category.find({}, function(err, categories) {
        res.render('categories.index', {
            categories
        });
    });
};


