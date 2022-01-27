import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ITask } from '../data-structures/Task'
import { IAppState } from '../redux/Store';
import Slider from './Slider';

const TaskRow = (props:{task: ITask, projectId: number}) => {

    const { id, name, orderId } = props.task.TaskInfo;

    return (
        <div className='task-container'>
            <div className='task-left'>{orderId} | {name}</div>
            <div className='slider-container'>
                <Slider taskId={id} projectId={props.projectId}></Slider>
            </div>
        <style>
            {`
                .task-container {
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    border-top: 1px solid black;
                    user-select: none;
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
                    border-left: 1px solid black;
                }
            `}
        </style>
        </div>
    )
};

export default TaskRow;
