const jwt = require('jsonwebtoken');
const JWT_SECRET = "poiuytrewqasdfghjklmnbvcxz";

function auth(req,res,next){
    const token = req.headers.authorization;
    try{
        const decodedInfo = jwt.verify(token,JWT_SECRET);
        const id = decodedInfo.id;
        req.userId = id;
        next();
    }catch(err){
        console.log(err.message);
    }
}

module.exports = {
    auth,
    JWT_SECRET
}