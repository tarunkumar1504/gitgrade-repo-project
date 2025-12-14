const BASE_URL = "https://api.github.com";

export const fetchRepoData = async (owner, repo) => {
  const repoRes = await fetch(`${BASE_URL}/repos/${owner}/${repo}`);
  if (!repoRes.ok) throw new Error("Repository not found");
  const repoData = await repoRes.json();

  const commitsRes = await fetch(
    `${BASE_URL}/repos/${owner}/${repo}/commits?per_page=100`
  );
  const commits = await commitsRes.json();

  const languagesRes = await fetch(
    `${BASE_URL}/repos/${owner}/${repo}/languages`
  );
  const languages = await languagesRes.json();

  const contentsRes = await fetch(
    `${BASE_URL}/repos/${owner}/${repo}/contents`
  );
  const contents = await contentsRes.json();

  return {
    repoData,
    commits,
    languages,
    contents,
  };
};
