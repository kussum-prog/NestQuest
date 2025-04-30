const User = require("../../models/user");
const jwt = require("jsonwebtoken");
const bcryptjs = require("bcrypt");

const Google = async (req, res, next) => {
  try {
    const { name, email, photo } = req.body;

    // Check if the user already exists
    let user = await User.findOne({ email });

    if (user) {
      // User exists - log them in
      const token = jwt.sign({ id: user._id }, process.env.JWT_Secret_Key, { expiresIn: "7d" });
      const { password, ...rest } = user._doc;

      return res
        .cookie("access_token", token, {
          httpOnly: true,
          sameSite: "Lax",
          secure: false,
        })
        .status(200)
        .json(rest);
    }

    // User doesn't exist - create one
    const generatedPassword =
      Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);
    const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);

    const username =
      name.split(" ").join("").toLowerCase() + Math.random().toString(36).slice(-4);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      avatar: photo,
    });

    await newUser.save();

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_Secret_Key, { expiresIn: "7d" });
    const { password, ...rest } = newUser._doc;

    res
      .cookie("access_token", token, {
        httpOnly: true,
        sameSite: "Lax",
        secure: false,
      })
      .status(200)
      .json(rest);
  } catch (error) {
    console.error("Google sign-in error:", error);
    next(error);
  }
};

module.exports = Google;
