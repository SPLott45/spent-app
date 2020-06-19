//Require node modules 
const router = express.Router();
const usersCtrl = require('../controllers/users');

//Define route(s)
router.get('/', usersCtrl.index);


module.exports = router;