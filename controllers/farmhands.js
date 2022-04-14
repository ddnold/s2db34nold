var Farmhand = require('../models/farmhands'); 
 
// List of all farmhands 

    // List of all Farmhands
exports.farmhands_list = async function(req, res) { 
    try{ 
        theFarmhands = await Farmhand.find(); 
        res.send(theFarmhands); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
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