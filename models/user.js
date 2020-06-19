//Require mongoose
const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;

const userSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    email: Number,
    googleId: String,
    createdAt: Date,
    updatedAt: Date
})

//Compile the schema into a model and export it
module.exports = mongoose.model('User', userSchema);