import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProjectList from './pages/ProjectList';
import Project from './pages/Project';
import { IAppState } from './redux/Store';
import { useSelector } from 'react-redux';
import LeftSidebar from './components/LeftSidebar';

function App() {
  const redux = useSelector((state:IAppState) => state.projects.projects);

  return (
    <div style={{display: 'flex'}}>
      <BrowserRouter>
        <div style={{width: '250px', borderRight:'1px solid lightgray', height: '100vh'}}>
          <LeftSidebar></LeftSidebar>
        </div>
        <div style={{width: '100%'}}>
          <Routes>
            <Route path="/" element={<ProjectList></ProjectList>}/>
            <Route path="/Project/:id" element={<Project></Project>}/>
          </Routes>
        </div>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
