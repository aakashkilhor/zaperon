const jwt = require("jsonwebtoken")

const auth = (req,res,next)=>{
    const {token} = req.cookies

    if (!token) {
       return res.status(403).send("Token missing")
    }
    // Verify token
    try {
       const decode = jwt.verify(token,'secret')
       req.user = decode

    } catch (error) {
      res.status(403).send("Token invalid")
    }
    return next()
}

module.exports = auth