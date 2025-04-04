const User = require("../../models/user");


const user =async(req,res) => {
    try {
        const { id } = req.headers;
        const data = await User.findById(id).select("-password");
        if (!data) {
          return res.status(404).json({ message: "User not found" });
        }
        return res.status(200).json(data);
      }
       catch (error) {
        res.status(500).json({ message: "Internal server error" });
      }
}

emodule.exports=user;