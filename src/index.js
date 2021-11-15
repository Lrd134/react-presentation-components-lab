import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={event => {
      event.persist()
      const words = event.target.innerText.split(' ');
      const last = words.length - 1
      if (words[last] === 'happy')
        words[last] = 'sad';
      else
        words[last] = 'happy';
      event.target.innerText = words.join(' ');
    }} />
  </div>,
  document.getElementById('root')
);