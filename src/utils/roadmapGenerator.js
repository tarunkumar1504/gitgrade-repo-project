export const generateRoadmap = (feedback) => {
  return feedback.map((item, index) => ({
    step: index + 1,
    action: item,
  }));
};
