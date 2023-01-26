const { get } = require('callback-fetch');

const handleReceivedResponse = (body) => {
  const bodyObject = JSON.parse(body)
  console.log('body:', bodyObject);
}

const url = 'https://api.github.com/repos/sinatra/sinatra';

get(url, handleReceivedResponse);

