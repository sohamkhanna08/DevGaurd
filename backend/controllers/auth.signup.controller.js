const { createToken } = require("../auth/jwt");
const bcrypt = require("bcrypt");
const UserModel = require("../models/User.js");

const signup = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      message: "Username or password missing",
    });
  }

  try {
    let existingUser = await UserModel.findOne({ username });

    if (existingUser) {
      return res.status(400).json({
        message: "Username is already present try another one",
      });
    }

    let user = await UserModel.create({ username, password });

    res.status(200).json({
      message: "User created successfully",
      status: 200,
      user: { 
        id : user._id,
        username : user.username, 
        role : user.role
       },
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      error,
    });
  }
};

module.exports = { signup };
