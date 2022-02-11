import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IProject } from '../data-structures/Project';
import { gotProjectsAction, toggleNewTaskModalAction } from '../redux/Projects';
import { IAppState } from '../redux/Store';

export interface IRightClickWindowProps {
    visible: boolean,
    locationX: number,
    locationY: number,
    currentlySelectedTaskId: number,
    taskDetails: {id: number, orderId: number}
}

const RightClickWindow = (props:{windowProps: IRightClickWindowProps, closeWindow: () => void}) => {
    const { visible, locationX, locationY, currentlySelectedTaskId} = props.windowProps;
    const dispatch = useDispatch();
    const projectList: IProject[] = useSelector((state: IAppState) => state.projects.projects);
    const viewing: IProject | null = useSelector((state: IAppState) => state.projects.viewing);

    const newTask = () => {
        dispatch(toggleNewTaskModalAction());
        props.closeWindow();
    };

    const moveUp = () => {
        const {orderId} = props.windowProps.taskDetails;
        if(viewing != null)
        {
            let newProjectList = projectList;
            let newTaskList = viewing.Tasks;

            // make sure that any move is even possble (task is not last / first already) => both directions require different boundry conditions
            if((orderId - 1) > 0)
            {
                for (let i = 0; i < newTaskList.length; i++) {
                    if(newTaskList[i].TaskInfo.id == props.windowProps.taskDetails.id)                
                    {
                        // update task list id
                        newTaskList[i].TaskInfo.orderId = orderId - 1;
                        newTaskList[i-1].TaskInfo.orderId = orderId;
                    }
                }

                newProjectList.filter(x=>x.Info.id == viewing.Info.id)[0].Tasks = newTaskList;
                dispatch(gotProjectsAction(newProjectList));
            }
            props.closeWindow();
        }
    }

    const moveDown = () => {
        const {orderId} = props.windowProps.taskDetails;
        if(viewing != null)
        {
            let newProjectList = projectList;
            let newTaskList = viewing.Tasks;

            // make sure that any move is even possble (task is not last / first already) => both directions require different boundry conditions
            if((orderId + 1) <= newTaskList.length)
            {
                for (let i = 0; i < newTaskList.length; i++) {
                    if(newTaskList[i].TaskInfo.id == props.windowProps.taskDetails.id)                
                    {
                        // update task list id
                        newTaskList[i].TaskInfo.orderId = orderId + 1;
                        newTaskList[i+1].TaskInfo.orderId = orderId;
                    }
                }

                newProjectList.filter(x=>x.Info.id == viewing.Info.id)[0].Tasks = newTaskList;
                dispatch(gotProjectsAction(newProjectList));
            }
            props.closeWindow();
        }
    }

    
    return (
        <div className='menu-toggle'>
            <div className='dropdown-menu dropdown-menu-dark mx-0 shadow rightClickMenu' style={{width: '220px'}}>
                <button onClick={props.closeWindow} className='dropdown-item' style={{marginBottom: '0em'}}>Close window</button>
                <hr/>
                <button onClick={newTask} className='dropdown-item'>New task</button>
                <button onClick={props.closeWindow} className='dropdown-item'>Edit task</button>
                <button onClick={() => moveUp()} className='dropdown-item'>Move up</button>
                <button onClick={() => moveDown()} className='dropdown-item'>Move down</button>
                <style>
                    {`
                        .menu-toggle {
                            display: ${visible == true ? 'flex' : 'none'};
                        }
                        .rightClickMenu {
                            position: absolute;
                            transform: translate(${locationX}px, ${locationY}px);
                            z-index: 99;
                            display: flex;
                            flex-direction: column;
                            padding: 1em;
                            font-size: big;
                        }
                    
                    `}
                </style>
            </div>
        </div>
        
    )
};

export default RightClickWindow;
