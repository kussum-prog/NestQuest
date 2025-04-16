const route = require("express").Router()


const LogIn = require("../../controllers/auth/LogIn.js")
const user = require("../../controllers/auth/user.js")
const SignUp = require("../../controllers/auth/SignUp.js")
const checkAuth = require("../../middlewares/checkAuth.js")
const GetUserInfo =require("../../controllers/auth/GetUserInfo.js")

route.get("/user",checkAuth,user)
route.post("/LogIn", LogIn)
route.post("/SignUp", SignUp)
route.get("/get-user-info",checkAuth,GetUserInfo)




module.exports = route