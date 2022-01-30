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
            <div className='task-left'>
                <table className='taskTable'>
                    <tr className='tableRow'>
                        <td>{name}</td>
                    </tr>
                </table>
            </div>
            <div className='slider-container'>   
                <div style={{
                        minWidth: `${slider.deltaWidth}px`,
                        maxWidth: `${slider.deltaWidth}px`,
                        height: `35px`,
                        borderRadius: '0.3em',
                        transform: `translateX(${slider.diff}px)`,
                        display: `flex`,
                        justifyContent: `flex-end`,
                        backgroundColor: `${slider.isChangingWidth == true ? 'lightgreen' : props.task.TaskInfo.color}`,
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
                
                .tableRow > td {
                    padding-right: 1em;
                    padding-left: 1em;
                    width: 325px;
                    -moz-user-select: none;
                    -webkit-user-select: none;
                    -ms-user-select: none;
                }
                .task-container {
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    border-top: 1px solid lightgray;
                }
                .task-left {
                    text-align: left;
                    width: fit-content;
                }
                .slider-container {
                    overflow: hidden;
                    flex: 1;
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
