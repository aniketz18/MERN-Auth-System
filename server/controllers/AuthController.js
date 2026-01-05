const UserModel = require("../models/user");
const bcrypt = require("bcrypt");
require("dotenv").config;
const jwt = require("jsonwebtoken");
// jwt and cookie wor pending

// signup Api
const signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (user) {
      return res.status(409).json({
        message: "User is already exists, you can login",
        success: false,
      });
    }
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(password, salt, function (err, hash) {
        const userModel = new UserModel({ name, email, password: hash });
        userModel.save();
        //  console.log(userModel);
      });
    });
    res.status(200).json({ message: "signup successfully", success: true });
  } catch (error) {
    res.status(500).json({ message: "internal server error", success: false });
  }
};

// login Api
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });
    // console.log(user);

    if (!user) {
      return res
        .status(409)
        .json({ message: "Account not exists, Register", success: false });
    }
    bcrypt.compare(password, user.password, function (err, result) {
      if (result) {
        const token = jwt.sign(
          { userId: user._id, email: user.email },
          process.env.JWT_SECRET,
          { expiresIn: "1d" }
        );
        
        res
          .status(200)
          .json({ message: "Login successfully", success: true, token });
      } else {
        res
          .status(500)
          .json({ message: "email or password wrong", success: false });
      }
    });
  } catch (error) {
    res.status(500).json({ message: "internal server error", success: false });
  }
};

//logout Api pending
const logout = async (req, res) => {
  token = "";
  res.status(200).json({ message: "logout succesfully", success: true, token });
};

module.exports = {
  signup,
  login,
  logout,
};
