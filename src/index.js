import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Router, Route, hashHistory } from 'react-router';
import history from './history';
import {Checkout} from './Checkout'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Router history={history}>
  <div>
    <Route path="/" component={App}/>
    <Route path="/checkout" component={Checkout}/>
    </div>
  </Router>
, document.getElementById('root'));
registerServiceWorker();
