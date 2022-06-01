import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from './hooks/ThemeProvider';
import { Auth0Provider } from '@auth0/auth0-react';
import tokens from './tokens.json';

const domain = tokens.REACT_APP_AUTH0_DOMAIN;
const clientId = tokens.REACT_APP_AUTH0_CLIENTID;
const audience = tokens.REACT_APP_AUTH0_AUDIENCE;

ReactDOM.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    audience={audience}
    redirectUri={window.location.origin}>
    {/* <ThemeProvider /> */}
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
