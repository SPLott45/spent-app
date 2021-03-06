//Require mongoose
const mongoose = require('mongoose');

//Connect to DB
mongoose.connect(process.env.DATABASE_URL || 'mongodb://localhost/spentDB', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
});

const db = mongoose.connection;

db.on('connected', function() {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
})
