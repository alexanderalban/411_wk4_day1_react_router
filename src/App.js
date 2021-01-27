import React from 'react';
import ReactDOM from 'react-dom';
import Router from "./Router"

import { BrowserRouter } from 'react-router-dom';
import Navigation from './components/Navigation';
import './App.css';
// Write imports for Router & BrowserRouter here //



function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Router />
    </BrowserRouter>
  );
}

export default App;
