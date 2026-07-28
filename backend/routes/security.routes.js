const path = require("path");
const express = require("express");
const { createScan, getAllScans, getScan, deleteScan } = require("../controllers/security.controller");
const router = express.Router();

router.post("/", verifyTokenAndAuthenticateUser, createScan);

router.get("/", verifyTokenAndAuthenticateUser, getAllScans);

router.get("/:id", verifyTokenAndAuthenticateUser, getScan);

router.delete("/:id", verifyTokenAndAuthenticateUser, deleteScan);

module.exports = router;
