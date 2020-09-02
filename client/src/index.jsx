import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
let hist = createBrowserHistory()
ReactDOM.render(
<BrowserRouter history={hist} >
   <App />
</BrowserRouter>
, document.getElementById('root'));