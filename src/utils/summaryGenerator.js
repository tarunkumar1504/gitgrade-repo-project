export const generateSummary = (score, feedback) => {
  if (score >= 80) {
    return "Excellent project quality with strong structure and real-world applicability. Minor improvements can further enhance maintainability.";
  }

  if (score >= 50) {
    return "The project has a solid foundation but lacks completeness in areas such as documentation, testing, or consistency.";
  }

  return "This is a basic project that needs significant improvement in structure, documentation, and development practices.";
};
