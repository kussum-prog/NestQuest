const route = require("express").Router()


const LogIn = require("../../controllers/auth/LogIn.js")

const SignUp = require("../../controllers/auth/SignUp.js")

route.post("/LogIn", LogIn)
route.post("/SignUp", SignUp)

module.exports = route