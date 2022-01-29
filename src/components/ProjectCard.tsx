import React from 'react';
import { IProject } from '../data-structures/Project';

const ProjectCard = (props:{project:IProject}) => {

    const {project} = props;
    
    return (
        <div className='projCardContainer'>
            <div>
                <h3>{project.Info.name}</h3>
                <hr/>
                <h5>Description:</h5>
                <p>{project.Info.description}</p>
                <button className='btn btn-outline-success btn-sm' style={{width: '100%'}}>Open</button>
            </div>
            
            <style>
                {`
                    .projCardContainer {
                        width: 250px;
                        min-height: 200px;
                        padding: 1.5em;
                        border: 1px solid lightgray;
                        border-radius: 1em;
                        background-color: white;
                        margin: 1em;
                        color: #474747;
                    }
                    
                    .projCardContainer:hover{
                        background-color: rgb(247, 247, 247);
                        cursor: pointer;
                    }
                    
                    .projCardContainer >h5 {
                        margin: 0;
                        padding: 0;
                    }
                    
                    .projCardContainer >h3 {
                        margin: 0;
                        padding: 0.5em;
                    }
                `}
            </style>
        </div>
    );
};

export default ProjectCard;
