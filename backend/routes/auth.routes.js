const path = require("path");
const express = require("express");
const { login } = require("../controllers/auth.login.controller");
const { signup } = require("../controllers/auth.signup.controller");
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

module.exports = router;
