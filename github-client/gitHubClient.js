const fetchJson = require('./fetchJson');

const BASE_URL = 'https://api.github.com/repos/'

class GitHubClient {
  fetchRepositoryData = (repoName, callback) => {
    const url = BASE_URL + repoName;
    fetchJson(url, callback);
  };
}

module.exports = GitHubClient;