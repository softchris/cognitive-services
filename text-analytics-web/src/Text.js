import React, { useState } from 'react';

const Text = (props) => {
  const { title, url, docs } = props;

  const [response, setResponse] = useState({});

  const onSend = () => {
    console.log('send');
    fetch(`http://localhost:8000/${url}`)
      .then(resp => resp.json())
      .then(json => {
        setResponse(json)
      })
      .catch(err => console.error(err));
  }

  return (
    <React.Fragment>
      <h2>{title}</h2>
      <div>
        <button onClick={onSend}>Send</button>
      </div>
      <div>
        <textarea rows="20" cols="70" disabled value={JSON.stringify(docs, null, 2)} />
      </div>
      <div>
   
        <textarea rows="20" cols="70" value={JSON.stringify(response, null, 2)} />
      </div> 
      
    </React.Fragment>
  )
}

export default Text;