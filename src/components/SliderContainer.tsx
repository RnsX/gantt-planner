import React from 'react';
import { useSelector } from 'react-redux';
import { IProject } from '../data-structures/Project';
import { ITask } from '../data-structures/Task';
import { IAppState } from '../redux/Store';
import TaskRow from './TaskRow';


const SliderContainer = () => {

  const props:IProject | null = useSelector((state:IAppState) => state.projects.viewing);
  

  return (
    <div className='sliderContainer'>
        {
          props != null && props.Tasks.length != 0 
          ? props.Tasks.map((task,idx)=> (
            <TaskRow task={task} project={props}></TaskRow>
          ))
          : <p>no tasks found</p>
        }
        <style>
          {`
            .page {
              display: flex;
              width: 100%;
              height: 100vh;
              justify-content: center;
              align-items: center;
            }
            
            .sliderContainer {
                min-width: 500px;
                height: fit-content;
                border: 1px solid red;
                overflow: hidden;
                padding: 1em;
            }
          `}
        </style>
    </div>
  )
};

export default SliderContainer;
