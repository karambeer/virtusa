module.exports = (req, res, next)=> {
    if(req.headers && req.headers.authorization === "test"){
        next();
    }else{
        next("Unauthorized User!");
    }
}