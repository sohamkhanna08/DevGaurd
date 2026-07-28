function safelyAnalyze(category, analyzer, data, maxScore) {
  try {
    return analyzer(data);
  } catch (err) {
    return {
      category,
      score: 0,
      maxScore,
      findings: [],
      error: err.message
    };
  }
}

module.exports = { safelyAnalyze };