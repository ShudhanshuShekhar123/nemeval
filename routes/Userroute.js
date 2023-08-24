

const { Router } = require("express")
const userroute = Router()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const usermodal = require("../models/usermodal")




userroute.post("/register", async (req, res) => {

  try {
     const {password} = req.body
      let hashedpassword =  await bcrypt.hash(password, 5)
    
       let registeruser = await  usermodal.create({...req.body, password: hashedpassword})
       res.status(201).send(registeruser)

  } catch (error) {
      res.status(501).send(error)
  }

})


userroute.post("/login", async (req, res) => {



  try {

       const {email,password} = req.body
    let user = await usermodal.find({email})
    console.log(user)

    if(user.length> 0){
      const decodedpassword = await  bcrypt.compare(password, user[0].password)


        if(decodedpassword){
            const token = jwt.sign({user_id : user[0]._id, email: user[0].email}, "good7")
            console.log(token,"token")

            res.status(200).send({token, user: user[0].username})
        }else{
          res.send("Wrong password")
        }
    }else{
      res.send("User not found")
    }



  } catch (error) {
      res.status(501).send(error)
  }

})




module.exports = { userroute }