//Controller takes HTTP requests from the Router, maps those requests to Model
//Controller also determines what services need to be performed on the Model
//During the response, Controller takes in data from Controller and determines
    //how to visualize the data to the User in the Client browser



module.exports = {
    index
}


//Index Controller
function index(req, res) {
    res.render('transactions/index')
};