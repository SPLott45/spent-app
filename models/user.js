//Require mongoose
const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    email: String,
    googleId: String,
    createdAt: Date,
    updatedAt: Date
}, {
    timestamps: true
})

//Compile the schema into a model and export it
module.exports = mongoose.model('User', userSchema);