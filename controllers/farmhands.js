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

 // Handle a show one view with id specified by query 
 exports.farmhands_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await Farmhand.findById( req.query.id) 
        res.render('farmhandsdetail',  
{ title: 'Farmhands Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
 
// for a specific Farmhand. 
exports.farmhands_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await Farmhand.findById(req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
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
    document.height = req.body; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle Costume delete on DELETE. 
exports.farmhands_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await Farmhand.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 
 
// Handle Costume update form on PUT. 
exports.farmhands_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await Farmhand.findById(req.params.id) 
        // Do updates of properties 
        if(req.body.name)  
               toUpdate.name = req.body.name; 
        if(req.body.cost) toUpdate.age = req.body.age; 
        if(req.body.size) toUpdate.height = req.body.height; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`); 
    } 
}; 