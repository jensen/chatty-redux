// Application entrypoint.

// Load up the application styles
require("../styles/application.scss");

// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import chat from './redux/chat';

import App from './App.jsx';

const store = createStore(chat, { messages: [], name: 'KJ' });

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>, document.getElementById('react-root'));
