

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'componentsv2/store';
import './index.css';
import ContactApp from 'componentsv2/ContactApp';

ReactDOM.render(
  <Provider store={store}>
    <ContactApp />
  </Provider>,
  document.getElementById('root')
);
