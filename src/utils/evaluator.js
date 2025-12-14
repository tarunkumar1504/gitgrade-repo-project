export const evaluateRepo = ({ repoData, commits, languages, contents }) => {
  let score = 0;
  const feedback = [];

  // 1️⃣ Documentation (README)
  const hasReadme = contents.some(
    (item) => item.name.toLowerCase().includes("readme")
  );
  if (hasReadme) {
    score += 15;
  } else {
    feedback.push("Add a detailed README with setup and usage instructions");
  }

  // 2️⃣ Commit consistency
  if (commits.length >= 20) {
    score += 15;
  } else {
    feedback.push("Increase commit frequency with meaningful messages");
  }

  // 3️⃣ Language / Tech stack
  const languageCount = Object.keys(languages).length;
  if (languageCount >= 2) {
    score += 10;
  } else {
    feedback.push("Expand or better structure the tech stack usage");
  }

  // 4️⃣ Project structure
  const folders = contents.filter((c) => c.type === "dir").length;
  if (folders >= 2) {
    score += 20;
  } else {
    feedback.push("Improve folder structure and project organization");
  }

  // 5️⃣ Tests presence
  const hasTests = contents.some(
    (item) =>
      item.name.toLowerCase().includes("test") ||
      item.name.toLowerCase().includes("__tests__")
  );
  if (hasTests) {
    score += 15;
  } else {
    feedback.push("Add unit and integration tests");
  }

  // 6️⃣ Real-world relevance
  if (repoData.description && repoData.description.length > 20) {
    score += 15;
  } else {
    feedback.push("Clearly define real-world use case in project description");
  }

  // Level classification
  let level = "Beginner";
  if (score >= 70) level = "Advanced";
  else if (score >= 40) level = "Intermediate";

  return { score, level, feedback };
};
