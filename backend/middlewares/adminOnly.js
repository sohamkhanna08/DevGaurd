const { getTokenThroughAuthenticationHeader } = require("../auth/jwt");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/User.js");

const adminOnly = async (req, res, next) => {
  let token = getTokenThroughAuthenticationHeader(req, res);

  //   if (!token) {
  //     return res.status(400).json({
  //       message: "No authorization header provided",
  //     });
  //   }
  var decoded = jwt.verify(token, process.env.JWT_SECRET);

  const { username } = decoded;
  if (!username) {
    return res.status(400).json({
      message: "Username or email missing, incorrect JWT",
    });
  }

  try {
    let user = await UserModel.findOne({ username });

    if (!user) {
      return res.status(400).json({
        message: "User not found, JWT error",
      });
    }
    if (user.role !== "admin") {
      return res.status(403).json({
        message: "Please log in with an administrator account to use this feature.",
      });
    }
    req.user = user;
    next();
  } catch (error) {
    return res.status(500).json({
      message: "Contact admin, db not available to access users",
      error,
    });
  }
};

module.exports = adminOnly;
