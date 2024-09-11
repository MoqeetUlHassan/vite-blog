import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import from 'react-dom/client'
import './index.css';
import { BrowserRouter } from 'react-router-dom'; // Make sure to use BrowserRouter
import App from './App';
import { StoreProvider } from 'easy-peasy';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create a root using createRoot

root.render(
  <StoreProvider store={store}>
    <BrowserRouter>  {/* Use BrowserRouter here */}
      <App />        
    </BrowserRouter>
  </StoreProvider>
);
