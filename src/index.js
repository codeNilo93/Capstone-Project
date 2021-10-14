import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header/Header'
import App from './App';
import Form from './components/Form/Form'
import Footer from './components/Footer/Footer'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <App />
    <Form />
    <App />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
