const bcrypt = require("bcrypt");
const UserModel = require("../models/User");
const { createToken } = require("../auth/jwt");

const login = async (req, res) => {
  let { username, password } = req.body;

  username = username.trim();
  password = password.trim();

  if (!username || !password) {
    return res.status(400).json({
      message: "Username or password missing for login",
    });
  }

  try {
    let user = await UserModel.findOne({
      username,
    });

    if (!user) {
      return res.status(400).json({
        message: "Please enter correct username",
      });
    }

    let passwordMatched = bcrypt.compareSync(password, user.password); // true

    if (!passwordMatched) {
      return res.status(400).json({
        message: "Incorrect password",
      });
    }

    // If user has entered correct username and password
    // provide jwt to the user
    let token = createToken({
      username: user.username,
    });

    res.status(200).json({
      message: "Login success",
      token,
      user: {
        id: user._id,
        username: user.username,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      error,
    });
  }
};

module.exports = { login };
