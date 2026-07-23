const AuditLog = require("../models/AuditLog");

const auditLogs = async (req, res) => {
  try {
    const logs = await AuditLog.find().sort({ createdAt: -1 });

    const totalRequests = logs.length;

    const successfulRequests = logs.filter(
      log => log.response.success
    ).length;

    const failedRequests = totalRequests - successfulRequests;

    const averageExecutionTime =
      totalRequests > 0
        ? Math.round(
            logs.reduce(
              (sum, log) => sum + (log.response.durationMs || 0),
              0
            ) / totalRequests
          )
        : 0;

    res.status(200).json({
      kpis: {
        totalRequests,
        successfulRequests,
        failedRequests,
        averageExecutionTime
      },
      auditLogs: logs
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
};

module.exports = { auditLogs };