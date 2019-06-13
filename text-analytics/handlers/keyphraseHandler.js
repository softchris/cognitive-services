const request = require('../request');

const keyphraseUrl = 'text/analytics/v2.1/keyPhrases';
const keyphraseDocuments = require('../keyphrase');

module.exports = {
  get: (req, res) => {
    console.log('starting request');
    request(keyphraseUrl, keyphraseDocuments)
      .then(json => {
        res.json(json);
      })
      .catch(err => console.error(err));
  }
}