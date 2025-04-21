const User = require('../../models/user');


const DeleteUser = async(req,res) => {
    const userId = req.params.id;

    try{
        const deletedUser = await User.findByIdAndDelete(userId);
        if(!deletedUser){
            return res.status(404).json({message:"User not found"});
        }

        res.status(200).json({message:"User deleted successfully"});}catch(err){
        res.status(500).json({message:"Server error",error:err.message});
        
    }
}

module.exports = {DeleteUser};