const request = require('../request');
const languageDocuments = require('../languages');
const languageUrl = 'text/analytics/v2.1/languages';

module.exports = { 
  get: (req, res) => {
    request(languageUrl, languageDocuments)
      .then(json => {
        res.json(json);
      })
      .catch(err => console.error(err));
 }
}