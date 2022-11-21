const jwt = require("jsonwebtoken")

const verifyJwt = (req,res,next) => {
    // token are send with headers
   try{
    const token = req.headers.authorization
    const decoded = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)
    req.userData = decoded
    next()
   }catch(err){
    console.error(err)
   }
}

module.exports = verifyJwt