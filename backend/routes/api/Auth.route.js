const route = require("express").Router()


const LogIn = require("../../controllers/auth/LogIn.js")

const SignUp = require("../../controllers/auth/SignUp.js")
const checkAuth = require("../../middlewares/checkAuth.js")

route.post("/LogIn",checkAuth, LogIn)
route.post("/SignUp", SignUp)

module.exports = route