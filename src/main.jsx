import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import from 'react-dom/client'
import './index.css';
import App from './App';
import { StoreProvider } from 'easy-peasy';
import store from './utils/store';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create a root using createRoot

root.render(
  <StoreProvider store={store}>
    <App />
    </StoreProvider>
);
