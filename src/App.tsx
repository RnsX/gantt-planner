import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProjectList from './pages/ProjectList';
import Project from './pages/Project';
import { IAppState } from './redux/Store';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProjectList></ProjectList>}/>
          <Route path="/Project/:id" element={<Project></Project>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
