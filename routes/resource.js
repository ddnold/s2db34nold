var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var farmhands_controller = require('../controllers/farmhands'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// farmhands ROUTES /// 
 
// POST request for creating a farmhands.  
router.post('/farmhands', farmhands_controller.farmhands_create_post); 
 
// DELETE request to delete farmhands. 
router.delete('/farmhands/:id', farmhands_controller.farmhands_delete); 
 
// PUT request to update farmhands. 
router.put('/farmhands/:id', farmhands_controller.farmhands_update_put); 
 
// GET request for one farmhands. 
router.get('/farmhands/:id', farmhands_controller.farmhands_detail); 
 
// GET request for list of all farmhands items. 
router.get('/farmhands', farmhands_controller.farmhands_list);  
 
module.exports = router; 