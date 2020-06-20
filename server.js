//Require node module(s)
const express = require ('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
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
const categoriesRouter = require('./routes/categories');
const transactionsRouter = require('./routes/transactions');
const usersRouter = require('./routes/users');

//Mount middleware (spentApp.use)
spentApp.use(morgan('dev'));
spentApp.use(express.json());
spentApp.use(express.static('public'));
spentApp.use(methodOverride('_method'));
spentApp.use(express.urlencoded({ extended: true }))

const session = require('express-session');
spentApp.use(session({
    secret: 'SPL',
    resave: false,
    saveUninitialized: true
}));

//Mount passport middleware
spentApp.use(passport.initialize());
spentApp.use(passport.session());

//Mount the routes (spentApp.use)
spentApp.use('/', indexRouter);
spentApp.use('/categories', categoriesRouter);
spentApp.use('/', transactionsRouter);

//spentApp.use('/dashboard')

spentApp.use('/', usersRouter)

//Tell the web app to listen for HTTP requests 
spentApp.listen(port, function() {
    console.log(`Express is listening on port:${port}`);
});
