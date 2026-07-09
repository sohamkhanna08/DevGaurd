const onboardingService = require("../services/onboarding.service");

const OnboardUser = async (req, res) => {
    try {
        const result = await onboardingService.onboardUser(req.body);
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};

module.exports = { OnboardUser };