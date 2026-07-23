const mongoose = require("mongoose");

const AuditLogSchema = new mongoose.Schema(
  {
    workflow: {
      type: String,
      default: "USER_ONBOARDING",
    },
    request: {
      type: Object,
      required: true,
    },
    response: {
      type: Object,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("AuditLog", AuditLogSchema);
