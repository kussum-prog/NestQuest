const User = require("../../models/user");
const { SignUpValidation } = require("../../services/validation_schema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const SignUp = async (req, res, next) => {
  try {
    const JWT_Secret_Key = process.env.JWT_Secret_Key;
    console.log(JWT_Secret_Key);

    // Validate request body
    const SignUpResponse = await SignUpValidation.validateAsync(req.body);
    console.log(SignUpResponse);

    const { username, password, email, address } = SignUpResponse;

    // Check if username or email already exists
    const existingUser = await User.findOne({
      $or: [{ username: username }, { email: email }],
    });
    if (existingUser) {
      if (existingUser.username === username) {
        return res.status(400).json({ message: "Username already exists" });
      }
      if (existingUser.email === email) {
        return res.status(400).json({ message: "Email already exists" });
      }
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Generate JWT token
    const userInfo = { username, email };
    const jwtToken = jwt.sign(userInfo, JWT_Secret_Key);
    console.log(jwtToken);

    // Create new user
    const user = new User({
      username: username,
      password: hashedPassword,
      email: email,
      address: address,
      jwtToken: jwtToken,
    });

    await user.save();

    // User sign-up successful
    res.status(200).json({
      success: true,
      message: "User Sign Up successfully",
      data: { username, email, address },
    });
  } catch (error) {
    if (error.isJoi) {
      return res.status(400).json({ message: error.details[0].message });
    }
    console.error("SignUp error:", error);
    next(error);
  }
};

module.exports = SignUp;