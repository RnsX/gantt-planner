import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { matchPath, useLocation, useNavigate } from 'react-router-dom';

const LeftSidebar = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    // button & function for "add new project"
    // right click and "edit project" or "remove project"

    return (
        <div style={{display: 'flex', flexDirection: 'column', padding:'0.75em', marginTop: '0em'}}>
        {
            location.pathname == '/' 
            ? ''
            : <div className='sidebar-button' onClick={() => navigate(-1)}>Go back</div>
        }
        {
            matchPath({ path: '/Project/:id'},location.pathname) != null
            ? <div className='sidebar-button'>Add new task</div>
            : ''
        }
        {
            matchPath({ path: '/'},location.pathname) != null
            ? <div className='sidebar-button'>Add new project</div>
            : ''
        }
        <div className='sidebar-button'>Placeholder</div>
        <style>
            {`
                .sidebar-button {
                    border: 1px solid lightgray;
                    border-radius: 0.5em;
                    margin: 0.3em;
                    padding: 0.5em 1em 0.5em 1em;
                    background-color: white;
                    transition: 0.2s ease-in-out;
                    cursor: pointer;
                }
                .sidebar-button:hover {
                    background-color: lightgray;
                }
            `}
        </style>
        </div>
    )
};

export default LeftSidebar;
