const User = require("../../models/user");
const { LogInValidation } = require("../../services/validation_schema");


const LogIn = async (req, res, next) => {
  try {


    
    // Validate request body

    const { username, password } = await LogInValidation.validateAsync(req.body);


    // Find user by username
    const existingUser = await User.findOne({ username });

    if (!existingUser) {
      return res.status(400).json({
        message: "User not found",
      });
    }

    // Compare password directly
    if (existingUser.password !== password) {
      return res.status(400).json({
        message: "Password is incorrect",
      });
    }

    // If login is successful
    res.status(200).json({
      message: "User logged in successfully",
      data: { username: existingUser.username },
    });

  } catch (error) {
    next(error);
  }
};

module.exports = LogIn;
