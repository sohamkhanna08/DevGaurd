const path = require("path");
const express = require("express");
const { checkHealth } = require("../controllers/health.controller");
const { auditLogs } = require("../controllers/audit.controller");
const { OnboardUser } = require("../controllers/onboarding.controller");
const adminOnly = require("../middlewares/adminOnly");
const router = express.Router();

router.post("/onboarding", adminOnly, OnboardUser);
router.get("/health", checkHealth);
router.get("/audit-logs", auditLogs);

module.exports = router;
