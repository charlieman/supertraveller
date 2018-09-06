import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'normalize.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// function requestFullScreen(element) {
//   // Supports most browsers and their versions.
//   let requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;
//
//   if (requestMethod) { // Native full screen.
//     requestMethod.call(element);
//   }
// }
//
//
// requestFullScreen(document.body);
ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
