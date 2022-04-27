const mongoose = require("mongoose")
const farmhandsSchema = mongoose.Schema({ 
 name: String,
 height: Number, 
 age: {
    type: Number,
    min: [16, "Farmhand must be 16. Got {VALUE}"]
 }
}) 
 
module.exports = mongoose.model("Farmhand", farmhandsSchema)

