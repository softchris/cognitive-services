const { BASE_URL, API_KEY } = process.env;
const fetch = require('node-fetch');

// Ocp-Apim-Subscription-Key
function request(url, body) {
  console.log('doing request against', url);
  return fetch(`${BASE_URL}/${url}`, {
      method: 'post',
      body: JSON.stringify(body),
      headers: {
        'Ocp-Apim-Subscription-Key': API_KEY,
        'Content-Type': 'application/json'
      },
    })
    .then(res => res.json())
}

module.exports = request;