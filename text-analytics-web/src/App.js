import React from 'react';
import logo from './logo.svg';
import './App.css';
import Text from './Text';

import sentiments from './sentiments';
import languages from './languages';
import keyphrases from './keyphrase';

function App() {
  return (
    <div className="App">
      <Text title="Sentiment" url="sentiment" docs={sentiments} />
      <Text title = "Language detection" url="language" docs={languages} />
      <Text title = "Key phrases" url="key" docs={keyphrases} />
    </div>
  );
}

export default App;
