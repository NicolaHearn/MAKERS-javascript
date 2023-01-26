const { get } = require('callback-fetch');

// sinatra_url = 'https://jsonplaceholder.typicode.com/todos'

// handleReceivedResponse = (body) => {
//   const responseObject = JSON.parse(body);
//   console.log(responseObject)
// }

// const fetchJson = (url, callback) => {
//   get(url, callback)
// }

// fetchJson(sinatra_url, handleReceivedResponse);

const fetchJson = (url, callback) => {
  get(url, (bodyString) => {
    const body = JSON.parse(bodyString);
    callback(body);
  });
};

// fetchJson("https://jsonplaceholder.typicode.com/todos", (response) => {
//   // console.log("body:", response);
// });


module.exports = fetchJson;

