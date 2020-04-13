import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import {createBrowserHistory} from 'history';
import {store} from './store/index'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
const history = createBrowserHistory;
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={history}>
      <App />
    </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);

