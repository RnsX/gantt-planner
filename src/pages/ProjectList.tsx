import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { gettingProjectsAction, gotProjectsAction } from '../redux/Projects'
import { IProject } from '../data-structures/Project';
import { IAppState } from '../redux/Store';
import ProjectCard from '../components/ProjectCard';
import { API_GetProjects } from '../placeholder-data/Projects';
import { Link } from 'react-router-dom';

const ProjectList = () => {

    const dispatch = useDispatch();
    const projectList:IProject[] = useSelector((state: IAppState) => state.projects.projects);
 
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
            <div className='projectList'>
                {
                    projectList.map((project)=> (
                        <Link key={project.Info.id} to={`/Project/${project.Info.id}`}>
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
