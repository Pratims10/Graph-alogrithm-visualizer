import React from 'react';
import './App.css';
import MainComponent from './components/MainComponent';
import {HashRouter} from 'react-router-dom'

function App() {
  return (
    <HashRouter>
    <div>
    <MainComponent/>
    </div>
    </HashRouter>
  );
}

export default App;
