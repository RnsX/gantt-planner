import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { IProject } from '../data-structures/Project';
import { ITask } from '../data-structures/Task';
import { IAppState } from '../redux/Store';
import TaskRow from './TaskRow';
import RightClickWindow, { IRightClickWindowProps } from '../components/RightClickWindow';


const SliderContainer = () => {

  const props:IProject | null = useSelector((state:IAppState) => state.projects.viewing);
  const [rClickMenu, setRClickMenu] = useState<IRightClickWindowProps>({
    visible: false,
    locationX: 0,
    locationY:0,
    currentlySelectedTaskId: 0,
    taskDetails: {id:0, orderId: 0}
  });

  const showRightClick = (
      xPos: number, yPos: number, rowId: string, e: React.MouseEvent<HTMLElement>,
      taskX: number, taskDiffX: number,
      id: number, orderId: number
    ) => {
    e.preventDefault();
    // why 250px and 50px? dont know and dont ask
    setRClickMenu({visible: true, locationX: xPos-250, locationY: yPos-50, currentlySelectedTaskId: parseInt(rowId), taskDetails: {id: id, orderId: orderId}});
  };

  const hideRightClick = () => {
    setRClickMenu({...rClickMenu, visible: false});
  }

  return (
      <div className='sliderContainer'>
      <RightClickWindow windowProps={rClickMenu} closeWindow={hideRightClick}/>

      {
        props != null && props.Tasks.length != 0 
        ? props.Tasks.sort((a, b) => a.TaskInfo.orderId > b.TaskInfo.orderId ? 1 : -1).map((task,idx)=> (
          <div id={task.TaskInfo.id.toString()} onContextMenu={(e:React.MouseEvent<HTMLElement>) => showRightClick(e.clientX, e.clientY, e.currentTarget.id,e, task.location.lastLocation, task.location.lastDiff, task.TaskInfo.id, task.TaskInfo.orderId)}>
            <TaskRow key={`${task.TaskInfo.id}|${props.Info.id}`} task={task} project={props}></TaskRow>
          </div>
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
              overflow: hidden;
              padding: 1em;
              padding: 1em;
          }
        `}
      </style>
      </div>
  )
};

export default SliderContainer;
