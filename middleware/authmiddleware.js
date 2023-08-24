const jwt = require("jsonwebtoken")

const authmiddleware = async (req, res, next)=>{



      try {
        const token = req.headers.authorization
        jwt.verify(token, "good7", (err, decoded)=>{
            if(decoded){
                console.log(decoded, "decodded")
                req.userid = decoded.user_id
               
                next()
            }
            if(err){
                console.log(err)
            }
        })
        
      } catch (error) {
        
      }

    


}


module.exports = authmiddleware