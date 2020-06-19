//Require mongoose
const mongoose = require('mongoose'); 
const transactions = require('../controllers/transactions');
const Schema = mongoose.Schema;
const transactionSchema = require('../models/transaction');

const categorySchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    amount: Number,
    transactions: [transactionSchema],
    createdBy: Schema.Types.ObjectId,
    createdAt: Date,
    updatedAt: Date
})

//Compile the schema into a model and export it
module.exports = mongoose.model('Category', categorySchema);