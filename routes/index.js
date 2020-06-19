//Core Router Module; in charge of mapping basic HTTP requests (e.g., Home Page)

//Require node modules 
const express = require('express');
const router = express.Router();
const passport = require('passport');

//Mount routes

//router.get()
router.get('/', function(req, res) {
    res.render('home', {
        user: req.user
    });
})

router.get('/auth/google', passport.authenticate('google',
    { scope: ['profile', 'email']}
));

router.get('/oauth2callback', passport.authenticate(
    'google',
    {
        successRedirect : '/users',
        failureRedirect : '/'
    }
));

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

router.get('/dashboard', function(req, res) {
    res.render('dashboard');
});

//router.post()

//router.put()

//router.delete()

module.exports = router;