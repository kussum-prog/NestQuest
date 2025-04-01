const User = require("../../models/user");
const { SignUpValidation} = require("../../services/validation_schema");
const jwt = require("jsonwebtoken");


//signUp
const SignUp = async (req, res, next) => {
  try {

    const JWT_Secret_Key=process.env.JWT_Secret_Key;
    console.log(JWT_Secret_Key);
  
    const SignUpResponse = await SignUpValidation.validateAsync(req.body);
    
    console.log(SignUpResponse);

    const {username,password,email,address}=SignUpResponse;

    const userInfo={username,password}

    const jwtToken=jwt.sign(userInfo, JWT_Secret_Key);
    console.log(jwtToken);

    const existingUsername=await User.findOne({username:username});

    //existing username
    if(existingUsername){
      return res.status(400).json({
        message:"Username already exists"
      });
    }

    //existing email
    const existingEmail = await User.findOne({email:email});
    if(existingEmail){
      return res.status(400).json({
        message:"Email already exists"});
    }

    //password length
    if(password.length <= 5){
      return res.status(400).json({
        message:"Password must be greater than 5 "
      });
    }
   //new user
    const user = new User({
      username:username,
      password:password,
      email:email,
      address:address,
      jwtToken:jwtToken,
    });

    await user.save();
    
//user sign up successfully 
    res.status(200).json({
      success:true,
      message:"User Sign Up successfully",
      data: SignUpResponse,
    })

    //error 
  } catch (error) {
    next(error);
  }
};

module.exports = SignUp;
