const checkHealth = (req, res) => {
  res.status(200).json({
    success: true,
    status: "healthy",
    timestamp: new Date().toISOString(),
  });
};

module.exports = { checkHealth };
