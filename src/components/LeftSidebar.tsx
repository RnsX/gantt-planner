import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { matchPath, useLocation, useNavigate } from 'react-router-dom';
import NavBtn from '../components/NavBtn';
import { IProject } from '../data-structures/Project';
import { gotProjectsAction, toggleNewProjectModalAction, toggleNewTaskModalAction } from '../redux/Projects';
import { IAppState } from '../redux/Store';

const LeftSidebar = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const viewing: IProject | null = useSelector((state:IAppState)=> state.projects.viewing);
    const projects: IProject[] = useSelector((state:IAppState)=> state.projects.projects);

    // button & function for "add new project"
    // right click and "edit project" or "remove project"

    const createProjectModal = () => {
        dispatch(toggleNewProjectModalAction());
    }

    const deleteProjectBtn = () => {
        if(viewing != null)
        {
            let newList = projects;
            newList.splice(newList.indexOf(viewing),1);
            navigate(-1);
            dispatch(gotProjectsAction(newList));
        }
    }

    const createTaskModal = () => {
        dispatch(toggleNewTaskModalAction());
    }
    

    return (
        <div className='d-flex flex-column flex-shrink-0 p-3 text-white bg-dark sidebar-high' style={{height: '100vh'}}>
            <div className='d-flex flex-row flex-shrink-0 p-1'>
                <h4>My Gantt Planner</h4>
            </div>

            <hr/>
            {NavBtn('Go back', () => navigate(-1), location.pathname == '/' ? false : true, 'bi bi-arrow-left-square-fill', 'btn btn-secondary', '20px')}
            {NavBtn('Create project', () => createProjectModal(), matchPath({ path: '/'},location.pathname) != null ? true : false, 'bi bi-file-earmark-plus-fill', 'btn btn-primary', '20px')}
            {NavBtn('Create task', () => createTaskModal(), matchPath({ path: '/Project/:id'},location.pathname) != null ? true : false, 'bi bi-node-plus-fill', 'btn btn-primary', '20px')}
            {NavBtn('Settings', () => {}, location.pathname == '/' ? true : false, 'bi bi-gear', 'btn btn-secondary', '20px')}
            {NavBtn('Project settings', () => {}, matchPath({ path: '/Project/:id'},location.pathname) != null ? true : false, 'bi bi-gear', 'btn btn-secondary', '20px')}
            {NavBtn('Delete project', () => deleteProjectBtn(), matchPath({ path: '/Project/:id'},location.pathname) ? true : false, 'bi bi-trash', 'btn btn-danger deleteBtn', '20px')}
        
        <style>
            {`
                .deleteBtn {
                    margin-top: auto;
                    max-width: 218px;
                    position: absolute;
                    bottom: 0;
                    margin-bottom: 1em;
                }
                .sidebar-high {
                    min-height: 100vh;
                    min-width: 250px;
                }
                .my-sidebar-btn {
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    width: 100%;
                    margin-top: 0.5em;
                }
                .my-sidebar-btn > i {
                    margin-right: 1em;
                }
            `}
        </style>
        </div>
    )
};

export default LeftSidebar;
