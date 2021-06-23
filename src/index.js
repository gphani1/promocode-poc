import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Createpromo from './components/Createpromo';
import './Styles/basestyle.css'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  
   <Createpromo/>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
