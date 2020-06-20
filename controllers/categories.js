const Category = require('../models/category');

module.exports = {
    new: newCategory,
    create,
    index
};

function newCategory(req, res) {
    res.render('categories/new');
};

function create(req, res) {
    req.body.name;

   const category = new Category(req.body);
   
   category.save(function(err) {
       if (err) return res.render('categories/new');
       console.log(category);
       res.redirect('/categories');
   });
};

function index(req, res) {
    Category.find({}, function(err, categories) {
        res.render('categories.index', {
            categories
        });
    });
};