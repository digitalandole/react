/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/

import React from "react";
import ReactDom from "react-dom";

//const element = <h1>Hello started</h1>;

const name = "hola";
//const jsx = <h1>hola {name}</h1>;
//const jsx = <h1>hola {2 + 2}</h1>;
const sum = () => 3 + 2;
const jsx = (
  <h1>
    {name} {sum()}
  </h1>
);
/*
const element = React.createElement(
  "a",
  { href: "http://bumdary.com/" },
  "bumdary"
);
*/

const container = document.getElementById("app");

//ReactDom (__que,__donde)
//ReactDom.render(element, container);
ReactDom.render(jsx, container);
