
const { Router } = require("express")
const blogroute = Router()
// const bcrypt = require("bcrypt")
// const jwt = require("jsonwebtoken")
const blogmodal = require("../models/blogmodal")
const authmiddleware = require("../middleware/authmiddleware")



blogroute.post("/blogs", authmiddleware, async (req,res)=>{

      let blog =  await blogmodal.create({...req.body, creator: req.userid})
      //  blog.populate("creator")
      // console.log(req.userid)
     res.send(blog)
})


blogroute.get("/blogs", authmiddleware, async (req,res)=>{

      try {

            if(req.query.title){
                  console.log(req.query)
                 let newtitle = req.query.title
                 let regexpattersn = new RegExp(newtitle, "i")
       
                  let titleblog = await blogmodal.find({title: regexpattersn})
                  res.status(200).send(titleblog)
             }
             else 
             if(req.query.category){
                  console.log(req.query)
                 let newcategory = req.query.category
                 let regexpattersn = new RegExp(newcategory, "i")
       
                  let categoryblog = await blogmodal.find({category: regexpattersn})
                  res.status(200).send(categoryblog)
             }
             
             else{
       
                   let allblogs =  await blogmodal.find({})
                   //  blog.populate("creator")
                   // console.log(req.userid)
                  res.status(200).send(allblogs)
             }
            
      } catch (error) {
             res.status(501).send("Internal server error")
      }

     
  
})



blogroute.delete("/blogs/:id", authmiddleware, async (req,res)=>{

   
      try {

            console.log(req.params.id)

            
            
            let userid = await blogmodal.findById({_id:req.params.id})
        
            if(userid.creator.toString() === req.userid){
                  let deleteuser = await blogmodal.findByIdAndDelete({_id:req.params.id})
                  res.status(200).send(deleteuser)
            }else{
                  res.send("You are authorised to delete this post")
            }
          
            // res.send("dekeknfekn")

      } catch (error) {
            res.status(501).send("Internal server error")
      }
})

blogroute.patch("/blogs/:id", authmiddleware, async (req,res)=>{

   
      try {

            console.log(req.params.id)

            
            
            let userid = await blogmodal.findById({_id:req.params.id})
        
            if(userid.creator.toString() === req.userid){
                  let updatedblog = await blogmodal.findByIdAndUpdate({_id:req.params.id}, req.body, {new:true})
                  res.status(200).send(updatedblog)
            }else{
                  res.send("You are authorised to Update this post")
            }
          
         

      } catch (error) {
            res.status(501).send("Internal server error")
      }
})






module.exports = { blogroute }