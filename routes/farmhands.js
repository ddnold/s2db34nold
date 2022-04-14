var express = require('express'); 
const farmhands_controllers= require('../controllers/farmhands'); 
var router = express.Router(); 
 
/* GET costumes */ 
router.get('/', farmhands_controllers.farmhands_view_all_Page); 
module.exports = router; 
