const route = require("express").Router()


const LogIn = require("../../controllers/auth/LogIn.js")
const user = require("../../controllers/auth/user.js")
const SignUp = require("../../controllers/auth/SignUp.js")
const checkAuth = require("../../middlewares/checkAuth.js")
const GetUserInfo =require("../../controllers/auth/GetUserInfo.js")
const {verifyAdmin} = require("../../middlewares/verifyAdmin.js");
const {DeleteUser}= require("../../controllers/auth/DeleteUser.js")
const {property}= require("../../controllers/auth/property.js")


route.get("/user",checkAuth,user)
route.post("/LogIn", LogIn)
route.post("/SignUp", SignUp)
route.get("/get-user-info",GetUserInfo)
route.delete('/users/:id',verifyAdmin,DeleteUser);
route.get("/rooms",Rooms.js);
router.post("/property", upload.array("images"),property);




module.exports = route