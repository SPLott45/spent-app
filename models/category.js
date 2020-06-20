//Require mongoose
const mongoose = require('mongoose'); 
const categories = require('../controllers/categories');
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    merchant: String,
    amount: Number,
    description: String,
}, {
    timestamps: true
});

const categorySchema = new Schema({
    name: String,
    transactions: [transactionSchema]
}, {
    timestamps: true
});


//Compile the schema into a model and export it
module.exports = mongoose.model('Category', categorySchema);

