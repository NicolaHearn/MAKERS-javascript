const { get } = require('callback-fetch');
const fetchJson = require("./fetchJson");

const BASE_URL = "https://api.github.com/repos";

const fetchRepositoryData = (repoName, callback) => {
  const url = BASE_URL + repoName;
  fetchJson(url, callback);
};

fetchRepositoryInfo('sinatra/sinatra', (response) => {
  console.log(response);
});

module.exports = fetchRepositoryInfo;

