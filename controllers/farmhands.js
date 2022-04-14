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

exports.farmhands_view_all_Page = async function(req, res) { 
    try{ 
        theFarmhands = await Farmhand.find(); 
        res.render('farmhands', { title: 'Farmhand Search Results', results: theFarmhands }); 
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
 
// Handle Costume create on POST. 
exports.farmhands_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Farmhand(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.name = req.body.name; 
    document.age = req.body.age; 
    document.height = req.body.height; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle farmhands delete form on DELETE. 
exports.farmhands_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Farmhands delete DELETE ' + req.params.id); 
}; 
 
// Handle farmhands update form on PUT. 
exports.farmhands_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Farmhands update PUT' + req.params.id); 
}; 