import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home';
import Page from './pages/static/Page';

import './App.scss'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Page element={<Home/>}/>
  }
],
  {
    basename: ''
  })

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
  