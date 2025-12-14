import { useState } from "react";

const RepoInput = ({ onAnalyze }) => {
  const [repoUrl, setRepoUrl] = useState("");
  const [error, setError] = useState("");

  const handleAnalyze = () => {
    const regex = /^https:\/\/github\.com\/([^\/]+)\/([^\/]+)$/;
    const match = repoUrl.match(regex);

    if (!match) {
      setError("Please enter a valid public GitHub repository URL");
      return;
    }

    setError("");
    const owner = match[1];
    const repo = match[2];

    onAnalyze({ owner, repo });
  };

  return (
    <div className="max-w-xl mx-auto mt-10 text-center">
      <input
        type="text"
        placeholder="https://github.com/username/repository"
        value={repoUrl}
        onChange={(e) => setRepoUrl(e.target.value)}
        className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none"
      />

      {error && <p className="text-red-400 mt-2">{error}</p>}

      <button
        onClick={handleAnalyze}
        className="mt-4 px-6 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-semibold"
      >
        Analyze Repository
      </button>
    </div>
  );
};

export default RepoInput;
