const checkAuth = (req, res, next) => {
    try{
        //Extract the token from the Authorization header
        const token =req.headers.authorization.split(" ")[1];
        next();

    }catch(error){
        console.log(error);
    }
}

module.exports = checkAuth;