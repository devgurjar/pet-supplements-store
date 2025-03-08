import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Add error boundary for chunk loading
if (process.env.NODE_ENV === 'production') {
  window.addEventListener('error', (event) => {
    // Check if the error was caused by a chunk loading failure
    if (event.message && event.message.includes('Loading chunk')) {
      window.location.reload();
    }
  });
}

// Remove StrictMode temporarily to isolate the issue
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
