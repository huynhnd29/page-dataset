import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Helmet} from "react-helmet";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <script type="text/javascript" id="mcjs">!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/4a243de9d1f78a967090e5a3c/1a20a2afb031bc50f31890a05.js");</script>
      <meta name="description" content="Nested component" />
    </Helmet>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
