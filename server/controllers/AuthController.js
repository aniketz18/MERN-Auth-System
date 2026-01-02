const UserModel = require("../models/user");
const bcrypt = require("bcrypt");

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
        console.log(userModel);
        
      });
    });
    res.status(200).json({ message: "signup successfully", success: true });
  } catch (error) {
    res.status(500).json({ message: "internal server error", success: false });
  }
};

// login Api pending
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
  } catch (error) {}
};

module.exports = {
  signup,
  login,
};
