
const User = require("../../models/user");


const GetUserInfo = async(req,res) => {
    try{
        const user=await User.find().sort({createdAt:-1});
        return res.json({
            status:"Success",
            data:user,
        });    
        }catch(error){
            console.log(error);
            return res.status(500).json({message:"failed to fetch user information"});
        }
    }

    module.exports = GetUserInfo;