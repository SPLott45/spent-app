//Require node module(s)
const express = require ('express');
const morgan = require('morgan');
const session = require('express-session');
const passport = require('passport');
const port = 3000;

//Load environment variable
require('dotenv').config();

//Create the Express app
const spentApp = express();

//Connect to DB
require('./config/database');
require('./config/passport');

//Configure the web app (spentApp.set)
spentApp.set('view engine', 'ejs');

//Require routes
const indexRouter = require('./routes/index'); //renders home.ejs
const transactionsRouter = require('./routes/transactions');
const usersRouter = require('.routers/users');

//Mount middleware (spentApp.use)
spentApp.use(morgan('dev'));
spentApp.use(express.static('public'));
spentApp.use(express.urlencoded({ extended: true }))
spentApp.use(passport.initialize());
spentApp.use(passport.session());
spentApp.use(session({
    secret: 'SPL',
    resave: false,
    saveUninitialized: true
}));

//Mount the routes (spentApp.use)
spentApp.use('/', indexRouter);
spentApp.use('/transactions', transactionsRouter);
//spentApp.use('/dashboard')
//spentApp.use('/categories', categoriesRouter);
spentApp.use('/users', usersRouter)

spentApp.get('/transactions', function(req, res) {
    res.render('transactions/index');
});

//Tell the web app to listen for HTTP requests 
spentApp.listen(port, function() {
    console.log(`Express is listening on port:${port}`);
});
