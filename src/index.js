import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom' //how many routing elements are used just import browserrouter for wrapping
import HomePage from './Component/HomePage';
import Combine from './Component/Combine';
import Login from './Component/Login';
import Registration from './Component/Registration';
import ForgetPassword from './Component/ForgetPassword';
import OTP from './Component/OTP';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
         <App/>     
     {/* <HomePage/>  */}
    {/* <Combine/> */}
     {/* <App/> */}
    {/* <Navbar/> */}
        {/* <Login/>    */}
       {/* <Registration/>  */}
       {/* <ForgetPassword/> */}
       {/* <OTP/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
