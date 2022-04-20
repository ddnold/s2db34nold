var express = require('express'); 
const farmhands_controllers= require('../controllers/farmhands'); 
var router = express.Router(); 
 
/* GET costumes */ 
router.get('/', farmhands_controllers.farmhands_view_all_Page); 

/* GET detail costume page */ 
router.get('/detail', farmhands_controllers.farmhands_view_one_Page);

module.exports = router; 
