var express = require('express'); 
const farmhands_controllers= require('../controllers/farmhands'); 
var router = express.Router(); 

const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 
 
/* GET farmhands */ 
router.get('/', farmhands_controllers.farmhands_view_all_Page); 

/* GET detail farmhands page */ 
router.get('/detail', farmhands_controllers.farmhands_view_one_Page);

/* GET create farmhands page */ 
router.get('/create', farmhands_controllers.farmhands_create_Page); 

/* GET create update page */ 
router.get('/update', secured, farmhands_controllers.farmhands_update_Page);

/* GET delete costume page */ 
router.get('/delete', farmhands_controllers.farmhands_delete_Page);

module.exports = router; 
