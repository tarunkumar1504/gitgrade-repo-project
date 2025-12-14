import { useState } from "react";
import RepoInput from "./components/RepoInput";
import Loader from "./components/Loader";
import ScoreCard from "./components/ScoreCard";
import Summary from "./components/Summary";
import Roadmap from "./components/Roadmap";

import { fetchRepoData } from "./utils/githubApi";
import { evaluateRepo } from "./utils/evaluator";
import { generateSummary } from "./utils/summaryGenerator";
import { generateRoadmap } from "./utils/roadmapGenerator";

function App() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleAnalyze = async ({ owner, repo }) => {
    try {
      setLoading(true);
      setResult(null);

      const data = await fetchRepoData(owner, repo);
      const evaluation = evaluateRepo(data);

      setResult({
        ...evaluation,
        summary: generateSummary(evaluation.score),
        roadmap: generateRoadmap(evaluation.feedback),
      });
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white px-4">
      <h1 className="text-3xl font-bold text-center pt-10">
        GitHub Repository Evaluator
      </h1>

      <RepoInput onAnalyze={handleAnalyze} />

      {loading && <Loader />}

      {result && (
        <div className="max-w-3xl mx-auto mt-10 space-y-6">
          <ScoreCard score={result.score} level={result.level} />
          <Summary text={result.summary} />
          <Roadmap steps={result.roadmap} />
        </div>
      )}
    </div>
  );
}

export default App;
