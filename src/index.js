import React from 'react';
import './index.scss';
import App from './App';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from './store/mini-redux';
import { counter } from './store/index';
import * as serviceWorker from './serviceWorker';

const store = createStore(counter);

render(
  <Provider store={store}>
    <App />
  </Provider>,
   document.getElementById('root')
)

serviceWorker.unregister();
