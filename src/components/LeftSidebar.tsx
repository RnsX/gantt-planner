import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const LeftSidebar = () => {

    const navigate = useNavigate();
    const location = useLocation();


    return (
        <div style={{display: 'flex', flexDirection: 'column', padding:'0.75em', marginTop: '0em'}}>
        {
            location.pathname == '/' 
            ? ''
            : <div className='sidebar-button' onClick={() => navigate(-1)}>Go back</div>
        }
        <div className='sidebar-button'>New project</div>
        <div className='sidebar-button'>New project</div>
        <div className='sidebar-button'>New project</div>
        <div className='sidebar-button'>New project</div>
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
