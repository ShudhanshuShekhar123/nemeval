const mongoose = require("mongoose")
const userschema = new  mongoose.Schema({
  
    
        username: { type: String },
        email:{ type: String },
        avatar:{type:String},
        password:{ type: String },
    


}, { versionKey: false })


const usermodal = mongoose.model("user", userschema)
module.exports = usermodal