const fetch = require('node-fetch');

module.exports = function fetchWisdom() {
  return fetch('https://api.quotable.io/random?maxLength=38&tags=wisdom')
    .then((response) => response.json())
    .catch(console.error)
}
