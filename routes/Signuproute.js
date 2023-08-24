

const { Router } = require("express")
const signuprouter = Router()
const bcrypt = require("bcrypt")
const token = require("jsonwebtoken")
const apponitmodel = require("../models/appointmentmodal")



signuprouter.get("/getappointments", async (req, res) => {


  try {

    const user = await apponitmodel.find({})
    res.status(200).send(user)

    
  } catch (error) {
    console.log(error)
    res.status(500).send("servererror")
  }

})



module.exports = { signuprouter }