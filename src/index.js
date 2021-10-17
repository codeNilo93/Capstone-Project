import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/Header'
import App from './components/App/App';
import Login from './components/Login/Login'
import Profile from './components/Profile/Profile'
import Form from './components/Form/Form'
import Footer from './components/Footer/Footer'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Login />
    <App />
    <Form />
    <Profile />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
