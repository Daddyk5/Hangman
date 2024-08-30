import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import WinNotification from './WinNotification';
import './index.css'; // Ensure this path is correct

ReactDOM.render(
  <React.StrictMode>
    <App />
    <WinNotification win={true} /> {/* Example of passing props to WinNotification */}
  </React.StrictMode>,
  document.getElementById('root')
);
