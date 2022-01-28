import React, { MouseEventHandler, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { IProject } from '../data-structures/Project';
import { ILocation, ITask } from '../data-structures/Task'
import { gotProjectsAction } from '../redux/Projects';
import { IAppState } from '../redux/Store';


const TaskRow = (props:{task: ITask, project: IProject}) => {

    const { id, name, orderId } = props.task.TaskInfo;
    const [slider, setSlider] = useState<ILocation>(props.task.location);
    const projectList:IProject[] = useSelector((state:IAppState) => state.projects.projects);
    const dispatch = useDispatch();

    const saveChanges = () => {
        let newProjectList = projectList;
        newProjectList.forEach(proj => {
            if(proj.Info.id == props.project.Info.id)
            {
                proj.Tasks.forEach(task => {
                    if(task.TaskInfo.id == props.task.TaskInfo.id)
                    {
                        task.location = slider;
                    }
                });
            };
        });
        dispatch(gotProjectsAction(newProjectList));
    }

    const endMove = (e: React.MouseEvent) => {
        if(slider.isMoving == true)
        {
            setSlider({...slider, isMoving: false, lastLocation: e.clientX, lastDiff: slider.diff, lastWidth: slider.deltaWidth});
        }
        saveChanges();
    };
    const startMove = (e: React.MouseEvent) => {
        if(slider.isMoving == false)
        {
        setSlider({...slider, isMoving: true, lastLocation: e.clientX});
        console.log('mouse down:', slider)
        }
    };
    const moveItem = (e: React.MouseEvent) => {
        const { isMoving, lastLocation, lastDiff, isChangingWidth, lastWidth, diff} = slider;

        if(isMoving == true && isChangingWidth == false)
        {
        setSlider({...slider, diff: e.clientX - lastLocation + lastDiff});
        console.log('mouse move:', slider);
        };

        if(isMoving == true && isChangingWidth == true)
        {
        setSlider({...slider, deltaWidth: (lastWidth + e.clientX - lastLocation)});
        console.log('moving width')
        }
    };
    const toggleWidthChanger = () => {
        setSlider({...slider, isChangingWidth: !slider.isChangingWidth})    
    }

    

    return (
        <div className='task-container'>
            <div className='task-left'>{orderId} | {name}</div>
            <div className='slider-container'>   
                <div style={{
                        minWidth: `${slider.deltaWidth}px`,
                        maxWidth: `${slider.deltaWidth}px`,
                        height: `50px`,
                        borderRadius: '0.3em',
                        transform: `translateX(${slider.diff}px)`,
                        display: `flex`,
                        justifyContent: `flex-end`,
                        backgroundColor: `${slider.isChangingWidth == true ? 'lightgreen' : 'white'}`,
                        margin: '0.5em',
                        boxShadow: '-5px 1px 20px 1px rgba(0,0,0,0.13)',
                        border: '1px solid #e2e2e2c9',
                        cursor: 'pointer',
                        
                    }}
                    onMouseDown={(e: React.MouseEvent) => startMove(e)}
                    onMouseUp={(e: React.MouseEvent) => endMove(e)}
                    onMouseMove={(e: React.MouseEvent) => moveItem(e)}
                    onMouseLeave={(e: React.MouseEvent) => endMove(e)}
                    onDoubleClick={toggleWidthChanger}
                >
                </div>
            </div>
        <style>
            {`
                .task-container {
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    border-top: 1px solid lightgray;
                }
                .task-left {
                    margin-right: 2em;
                    padding: 0.5em;
                    width: 300px;
                    text-align: left;
                }
                .slider-container {
                    overflow: hidden;
                    width: 100%;
                    border-left: 1px solid lightgray;
                    user-select: none;
                    -moz-user-select: none;
                    -webkit-user-select: none;
                    -ms-user-select: none;
                }
            `}
        </style>
        </div>
    )
};

export default TaskRow;
