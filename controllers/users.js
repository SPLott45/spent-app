const User = require('../models/user');

module.exports = {
    index
}


//Users Controller
function index(req, res) {
    User.find({}, function(err, users) {
        res.render('users/index', {
            users, 
            user: req.user
        })
    })
};