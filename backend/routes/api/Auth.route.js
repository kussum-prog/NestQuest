const route = require("express").Router()


const LogIn = require("../../controllers/auth/LogIn.js")
const user = require("../../controllers/auth/user.js")
const SignUp = require("../../controllers/auth/SignUp.js")
const checkAuth = require("../../middlewares/checkAuth.js")

route.get("/user",checkAuth,user)
route.post("/LogIn", LogIn)
route.post("/SignUp", SignUp)



module.exports = route