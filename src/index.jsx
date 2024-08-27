import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import from 'react-dom/client'
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create a root using createRoot
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
