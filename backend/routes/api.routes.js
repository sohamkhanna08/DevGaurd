const path = require('path');
const express = require('express');
const { OnboardUser } = require('../controllers/api.controller');
const router = express.Router();

router.post('/onboarding', OnboardUser);
router.get('/dashboard', OnboardUser);

module.exports=router;