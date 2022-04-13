const mongoose = require("mongoose") 
const farmhandsSchema = mongoose.Schema({ 
 name: String, 
 height: Number, 
 age: Number 
}) 
 
module.exports = mongoose.model("Farmhand", 
farmhandsSchema) 