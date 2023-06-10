import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

let counter = 1;

const refresh = () => {
  /*ReactDOM.render(element, container[, callback(optional)]);*/
  ReactDOM.render(
    <App counter={counter} />,
    document.getElementById('root')
  );
};

//Manully count
// refresh();
// counter += 1;
// refresh();
// counter += 1;
// refresh();

setInterval(() => {
  //This is the function called refresh() inside the function called setinterval()
  refresh();
  counter += 1;
}, 1000);
