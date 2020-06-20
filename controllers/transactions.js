//Controller takes HTTP requests from the Router, maps those requests to Model
//Controller also determines what services need to be performed on the Model
//During the response, Controller takes in data from Controller and determines
    //how to visualize the data to the User in the Client browser

const Category = require('../models/category');


module.exports = {
    new: newTransaction,
    create,
    index,
    show,
    delete: deleteTransaction
};

function newTransaction(req, res) {
    res.render('transactions/new');
};

function create(req, res) {

    const transaction = new Transaction(req.body);

    transaction.save(function(err) {
        if (err) return res.render('transactions/new');
        console.log(transaction);
        res.redirect('transactions/index');
    });
};

function index(req, res) {

    const transaction = new Transaction(req.body);
    
    Transaction.find({}, function(err, transactions) {
        res.render('transactions/index', {
            transactions
        });
    });
};

function create (req, res) {
    Category.findById(req.params.id, function(err, category) {
        category.transactions.push(req.body);
        category.save(function(err) {
            res.redirect(`/categories/${category._id}`);
        });
    });
};

function show(req, res) {
    res.render('transactions/show', {
        transaction: Transaction.getOne(req.params.id),
        transactionNum: parseInt(req.params.id) + 1
    });
};

function deleteTransaction(req, res) {
    Transaction.deleteOne(req.params.id);
    res.redirect('/transactions/index');
};