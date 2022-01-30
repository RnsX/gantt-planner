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
    <div style={{display: 'flex', height: '100vh'}}>
      <BrowserRouter>
        <div style={{width: '250px', borderRight:'1px solid lightgray', height: '100%'}} className='shadowAlternative'>
          <LeftSidebar></LeftSidebar>
        </div>
        
        <div style={{minWidth: '100%', paddingLeft: '1em', height: '100%'}}>
          <Routes>
            <Route path="/" element={<ProjectList></ProjectList>}/>
            <Route path="/Project/:id" element={<Project></Project>}/>
          </Routes>
        </div>
        
      </BrowserRouter>
      <style>
        {`
          .divider-additional {
            -webkit-box-shadow: inset 0px 0px 14px 5px rgba(0,0,0,0.13); 
            box-shadow: inset 0px 0px 14px 5px rgba(0,0,0,0.13);
          }
          .shadowAlternative {
            -webkit-box-shadow: 0px 0px 14px 5px rgba(0,0,0,0.21); 
            box-shadow: 0px 0px 14px 5px rgba(0,0,0,0.21);
          }
        `}
      </style>
    </div>
  );
}

export default App;
