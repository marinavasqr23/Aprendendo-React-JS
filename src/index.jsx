import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';


import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const Router=createBrowserRouter (
  [
    
  ]
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider>
      <App />
    </RouterProvider>
  </React.StrictMode>
);

