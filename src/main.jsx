// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// 루트 DOM 요소에 렌더링
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
