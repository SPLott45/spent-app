//Require mongoose
const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    _id: Schema.Types.ObjectId,
    merchant: String,
    amount: Number,
    description: String,
    createdAt: Date,
    updatedAt: Date
})

//Compile the schema into a model and export it
module.exports = mongoose.model('Transaction', transactionSchema);