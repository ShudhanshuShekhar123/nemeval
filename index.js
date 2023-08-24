const express = require("express")
const app = express()
const mongoose = require("mongoose")
require("dotenv").config()
const { userroute } = require("./routes/Userroute")
const cors = require("cors")
const { blogroute } = require("./routes/blogroute")


app.use(express.json())
app.use(cors({ origin: "*" }))


app.use("/api", userroute)
app.use("/api", blogroute)


app.get('/', (req, res) => {
    res.send('Welcome to the Homepage !')
});


const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Connected to Mongodb Atlas")
    } catch (error) {
        console.log("server error")
    }

}











app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
    connect()
});