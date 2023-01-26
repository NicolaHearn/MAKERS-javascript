const GitHubClient = require('./gitHubClient');
const Github = require('./github');

describe('GitHub', () => {
  it('Fetches the data for a given repo and retreives it with getRepoData', (done) => {
    const client = new GitHubClient();
    
    const github = new Github(client);

    github.fetch("sinatra/sinatra");

    setTimeout(() => {
      const repoData = github.getRepoData();
      expect(repoData.id).toEqual(106995);
      done();
    }, 4000); 
  });
});