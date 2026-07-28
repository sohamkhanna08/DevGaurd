const mongoose = require("mongoose");
/* -----------------------------
   Shared Schemas
------------------------------*/
const findingSchema = new mongoose.Schema(
  {
    check: { type: String, required: true },
    severity: {
      type: String,
      enum: ["low", "medium", "high", "critical"],
      required: true,
    },
    message: { type: String, required: true },
  },
  { _id: false }
);
const recommendationSchema = new mongoose.Schema(
  {
    check: { type: String, required: true },
    title: { type: String, required: true },
    severity: {
      type: String,
      enum: ["low", "medium", "high", "critical"],
      required: true,
    },
    category: {
      type: String,
      enum: [
        "redirect",
        "headers",
        "cookies",
        "tls",
        "certificate",
      ],
      required: true,
    },
    why: String,
    how: String,
    reference: String,
  },
  { _id: false }
);
/* -----------------------------
   Redirect Analysis
------------------------------*/
const redirectAnalysisSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      default: "redirect",
    },
    score: Number,
    maxScore: Number,
    redirectCount: Number,
    finalUrl: String,
    findings: {
      type: [findingSchema],
      default: [],
    },
    error: String,
  },
  { _id: false }
);
/* -----------------------------
   Header Analysis
------------------------------*/
const headerAnalysisSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      default: "headers",
    },
    score: Number,
    maxScore: Number,
    securityHeaders: {
      type: mongoose.Schema.Types.Mixed,
      default: undefined,
    },
    findings: {
      type: [findingSchema],
      default: [],
    },
    error: String,
  },
  { _id: false }
);
/* -----------------------------
   Cookie Analysis
------------------------------*/
const cookieAnalysisSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      default: "cookies",
    },
    score: Number,
    maxScore: Number,
    totalCookies: Number,
    secureCookies: Number,
    httpOnlyCookies: Number,
    sameSiteCookies: Number,
    findings: {
      type: [findingSchema],
      default: [],
    },
    error: String,
  },
  { _id: false }
);
/* -----------------------------
   TLS Analysis
------------------------------*/
const tlsAnalysisSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      default: "tls",
    },
    score: Number,
    maxScore: Number,
    protocol: String,
    cipher: String,
    findings: {
      type: [findingSchema],
      default: [],
    },
    error: String,
  },
  { _id: false }
);
/* -----------------------------
   Certificate Analysis
------------------------------*/
const certificateAnalysisSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      default: "certificate",
    },
    score: Number,
    maxScore: Number,
    issuer: String,
    subject: String,
    serialNumber: String,
    validFrom: Date,
    validTo: Date,
    expiresInDays: Number,
    sanCount: Number,
    selfSigned: Boolean,
    findings: {
      type: [findingSchema],
      default: [],
    },
    error: String,
  },
  { _id: false }
);
/* -----------------------------
   Score
------------------------------*/
const scoreSchema = new mongoose.Schema(
  {
    totalScore: {
      type: Number,
      required: true,
    },
    maxScore: {
      type: Number,
      required: true,
    },
    percentage: {
      type: Number,
      required: true,
    },
    grade: {
      type: String,
      required: true,
    },
  },
  { _id: false }
);
/* -----------------------------
   Metadata
------------------------------*/
const metadataSchema = new mongoose.Schema(
  {
    scanDurationMs: Number,
    scannerVersion: String,
  },
  { _id: false }
);
/* -----------------------------
   Main Scan Schema
------------------------------*/
const scanSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    url: {
      type: String,
      required: true,
    },
    finalUrl: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["completed", "partial", "failed"],
      default: "completed",
    },
    redirect: redirectAnalysisSchema,
    headers: headerAnalysisSchema,
    cookies: cookieAnalysisSchema,
    tls: tlsAnalysisSchema,
    certificate: certificateAnalysisSchema,
    score: scoreSchema,
    recommendations: {
      type: [recommendationSchema],
      default: [],
    },
    metadata: metadataSchema,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
/* -----------------------------
   Indexes
------------------------------*/
scanSchema.index({
  user: 1,
  createdAt: -1,
});
module.exports = mongoose.model("Scan", scanSchema);