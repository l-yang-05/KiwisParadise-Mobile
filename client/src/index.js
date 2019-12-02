import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HttpsRedirect from 'react-https-redirect';
// import ServiceWorker from './service-worker';

ReactDOM.render(
    <HttpsRedirect>
        <App />
    </HttpsRedirect>,
    document.getElementById('container'));
// ServiceWorker();

