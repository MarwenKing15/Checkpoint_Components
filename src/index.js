import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import ProfilePhoto from './Component/Profile/ProfilePhoto';
// import FullName from './Component/Profile/FullName';
// import Address from './Component/Profile/Address';


ReactDOM.render(
  <React.StrictMode>
    {/* <ProfilePhoto/>
    <FullName/>
    <Address/> */}
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
