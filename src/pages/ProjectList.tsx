import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { gettingProjectsAction, gotProjectsAction } from '../redux/Projects'
import { IProject } from '../data-structures/Project';
import { IAppState } from '../redux/Store';
import ProjectCard from '../components/ProjectCard';
import { API_GetProjects } from '../placeholder-data/Projects';
import { Link } from 'react-router-dom';
import NewProjModal from '../components/NewProjModal';
import NewTaskModal from '../components/NewTaskModal';

const ProjectList = () => {

    const dispatch = useDispatch();
    const projectList:IProject[] = useSelector((state: IAppState) => state.projects.projects);
    const newProjectModal:boolean = useSelector((state: IAppState) => state.projects.showNewProjectModal);
 
    const renderProjectList = async () => {
        if(projectList.length == 0)
        {
            dispatch(gettingProjectsAction());
            dispatch(gotProjectsAction(await API_GetProjects().then((response)=>{return JSON.parse(response.JSON_response)})));
        };
    };

    useEffect(()=> {
        renderProjectList();
        console.log('use ffect from project list',projectList);
    },[])

    return (
        <div>
            {
                newProjectModal == true
                ? <NewProjModal></NewProjModal>
                : ''
            }
            <div className='projectList'
                style={{
                    filter: newProjectModal == true ? 'blur(10px)' : 'blur(0px)',
                    pointerEvents: newProjectModal == true ? 'none' : 'all',
                    transition: '0.5s ease-in-out'
                }}
            >
                {
                    projectList.map((project)=> (
                        <Link key={project.Info.id} to={`/Project/${project.Info.id}`} style={{textDecoration: 'none'}}>
                            <ProjectCard project={project}></ProjectCard>
                        </Link>
                    ))
                }
            </div>
            <style>
                {`
                    .projectList {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 100%;
                        height: 80vh;
                        flex-wrap: wrap;
                    }
                `}
            </style>
        </div>
    )
};

export default ProjectList;
