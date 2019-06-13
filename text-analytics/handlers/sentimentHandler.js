const request = require('../request');
const sentimentDocuments = require('../sentiment');
const sentimentUrl = 'text/analytics/v2.0/sentiment';

module.exports = {
  get: (req, res) => {
    request(sentimentUrl, sentimentDocuments)
      .then(json => {
        res.json(json);
      })
      .catch(err => console.error(err));
  }
}