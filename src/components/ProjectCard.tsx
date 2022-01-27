import React from 'react';
import { IProject } from '../data-structures/Project';

const ProjectCard = (props:{project:IProject}) => {

    const {project} = props;
    
    return (
        <div className='projCardContainer'>
            <h3>{project.Info.name}</h3>
            <hr/>
            <h5>Description:</h5>
            <p>{project.Info.description}</p>
            <style>
                {`
                    .projCardContainer {
                        width: 200px;
                        min-height: 200px;
                        padding: 0.75em;
                        border: 1px solid lightgray;
                        border-radius: 1em;
                        background-color: white;
                        margin: 1em;
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
