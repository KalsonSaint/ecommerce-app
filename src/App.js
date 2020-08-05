import React from 'react';
import {Route} from 'react-router-dom'

import './App.css';

import  HomePage  from './pages/homepage/homepage'

const HatsPage = () => (
  <>
  <h1>Hats Pages</h1>
  </>
);

function App() {
  return (
    <div>
      <HomePage />
    </div>
  );
}

export default App;
