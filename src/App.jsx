import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import './styles/App.css';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="main-content">
        <Sidebar />
        <Home />
      </div>
    </div>
  );
};

export default App;
