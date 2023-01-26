class Github {
  constructor(client) {
    this.client = client;
  }

  fetch = (repoName) => {
    this.client.fetchRepositoryData(repoName, (repoData) => {
      this.data = repoData;
    });
  };

  getRepoData = () => {
    return this.data
  };
}

module.exports = Github;