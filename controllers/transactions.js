//Controller takes HTTP requests from the Router, maps those requests to Model
//Controller also determines what services need to be performed on the Model
//During the response, Controller takes in data from Controller and determines
    //how to visualize the data to the User in the Client browser

const Category = require('../models/category');


module.exports = {
    index,
    create,
    show,
    delete: deleteTransaction
};


//Index Controller
function index(req, res) {
    res.render('transactions/index', {
        transaction: Transaction.getAll()
    })
};

function create(req, res) {
    Category.findById(req.params.id, function(err, category) {
        category.transactions.push(req.body);
        category.save(function(err) {
            res.redirect(`/categories/${category._id}`);
        });
    });
};

Transaction.find({}, function(err, transactions) {
    console.log(transactions)
});

Transaction.findByIdAndUpdate()
function show(req, res) {
    res.render('transactions/show', {
        transaction: Transaction.getOne(req.params.id)
    })
}
function deleteTransaction(req, res) {
    Transaction.deleteOne(req.params.sid);
    res.redirect('/transactions/index');
};