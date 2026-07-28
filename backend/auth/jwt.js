const jwt = require("jsonwebtoken");
const UserModel = require("../models/User.js");

createToken = ({ username }) => {
  let token = jwt.sign({ username }, process.env.JWT_SECRET);

  return token;
};

getTokenThroughAuthenticationHeader = (req, res) => {
  const authHeader = req.headers["authorization"] || req.get("Authorization");

  if (!authHeader) {
    return res.status(401).json({ error: "No authorization header provided" });
  }

  // Split the header ("Bearer <token>") to isolate the token string
  const parts = authHeader.split(" ");

  if (parts.length === 2 && parts[0] === "Bearer") {
    const token = parts[1];
    // Use your token here
    return token;
  } else {
    return res
      .status(401)
      .json({ error: "Header format must be Bearer <token>" });
  }
};

verifyTokenAndAuthenticateUser = async (req, res, next) => {
  let token = getTokenThroughAuthenticationHeader(req, res);

  var decoded = jwt.verify(token, process.env.JWT_SECRET);

  const { username } = decoded;
  if (!username) {
    return res.status(400).json({
      message: "Username missing, incorrect JWT",
    });
  }

  try {
    let user = await UserModel.findOne({
      username,
    });

    if (!user) {
      return res.status(400).json({
        message: "User not found, JWT error",
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

module.exports = {
  createToken,
  getTokenThroughAuthenticationHeader,
  verifyTokenAndAuthenticateUser,
};
