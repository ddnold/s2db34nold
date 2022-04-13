var Farmhand = require('../models/farmhands'); 
 
// List of all farmhands 
exports.farmhands_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: Farmhands list'); 
}; 
 
// for a specific farmhands. 
exports.farmhands_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Farmhands detail: ' + req.params.id); 
}; 
 
// Handle farmhands create on POST. 
exports.farmhands_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Farmhands create POST'); 
}; 
 
// Handle farmhands delete form on DELETE. 
exports.farmhands_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Farmhands delete DELETE ' + req.params.id); 
}; 
 
// Handle farmhands update form on PUT. 
exports.farmhands_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Farmhands update PUT' + req.params.id); 
}; 