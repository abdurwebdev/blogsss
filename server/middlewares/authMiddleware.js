const jwt = require('jsonwebtoken');
const verifyToken = (req,res,next) =>{
      let decoded = jwt.verify(req.cookies.token,process.env.JWT_SECRET);
      req.user = decoded;
      next();
}

module.exports = verifyToken;