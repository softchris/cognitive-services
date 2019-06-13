const express = require('express')

const cors = require('cors')

const app = express()
app.use(cors())
const port = 8000
require('dotenv').config();

const languageHandler = require('./handlers/languageHandler');
const sentimentHandler = require('./handlers/sentimentHandler');
const keyphraseHandler = require('./handlers/keyphraseHandler');


// https://westeurope.api.cognitive.microsoft.com/

app.get('/', (req,res) => res.send('Welcome to cog service demo API'));

app.get('/language', languageHandler.get)
app.get('/sentiment', sentimentHandler.get)
app.get('/key', keyphraseHandler.get);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))