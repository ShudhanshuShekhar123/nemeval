const mongoose = require("mongoose")


// const commentschema = new  mongoose.Schema({

//   username:String,
//   content:String
  



// })




const blogschema = new  mongoose.Schema({

    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    username: {type:String},
    title: { type: String },
    content: { type: String },
    category: { type: String },
    date: { type: String },
    likes: { type: String },
    // commemts: [{

    //     username:String,
    //     content:String
        
      
      
      
    //   }]
    comments:{type:String}



}, { versionKey: false })


const blogmodal =  mongoose.model("blog", blogschema)
module.exports = blogmodal