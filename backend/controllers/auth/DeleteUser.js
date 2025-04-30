const User = require('../../models/user.js');

const DeleteUser = async(req,res) => {
   try{
      const {id} = req.params;
      console.log(id);
      const deletedUser =await User.findByIdAndDelete(id);
      if(deletedUser){
         return res.status(200).json({success:false,
            message:"user deleted"
         });
      }else{
         return res.status(404).json({success:false,message:"User not found"});
      }
}catch(error){
   res.status(500).json({success:false,
      message:err.message
   });
}
};

module.exports = {DeleteUser};