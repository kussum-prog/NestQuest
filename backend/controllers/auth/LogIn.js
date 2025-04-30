const bcrypt = require("bcrypt");
const User = require("../../models/user");
const { LogInValidation } = require("../../services/validation_schema");

const LogIn = async (req, res, next) => {
  try {
    // Validate request body
    const { username, password } = await LogInValidation.validateAsync(req.body);
   

    // Find user by username
    const existingUser = await User.findOne({ username});
  

    if (!existingUser) {
      return res.status(400).json({ message: "User not found" });
    }

    // ✅ Securely compare the entered password with the hashed password
   
    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Password is incorrect" });
    }

    // If login is successful
    res.status(200).json({
      message: "User logged in successfully",
      user:{
        _id:existingUser._id,
        username:existingUser.username,
        email:existingUser.email,
      }
    });

  } catch (error) {
    console.error("Login error:", error);
    next(error);
  }
};

module.exports = LogIn;
