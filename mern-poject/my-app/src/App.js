import React from 'react';
import './App.css';
import Data from './components/Data';
import { Routes, Route } from 'react-router-dom';
import DataItem from './components/DataItem';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Data />} />
        <Route path="/:id" element={<DataItem />} />
      </Routes>
    </div>
  );
}

export default App;
