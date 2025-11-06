import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeScreen from './components/HomeScreen';
import NextScreen from './components/NextScreen';
import './styles/App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/next" element={<NextScreen />} />
    </Routes>
  );
}

export default App;
