import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleNewTaskModalAction } from '../redux/Projects';

export interface IRightClickWindowProps {
    visible: boolean,
    locationX: number,
    locationY: number,
    currentlySelectedTaskId: number
}

const RightClickWindow = (props:{windowProps: IRightClickWindowProps, closeWindow: () => void}) => {
    const { visible, locationX, locationY, currentlySelectedTaskId} = props.windowProps;
    const dispatch = useDispatch();

    const newTask = () => {
        dispatch(toggleNewTaskModalAction());
        props.closeWindow();
    }

    return (
        <div className='menu-toggle'>
            <div className='dropdown-menu dropdown-menu-dark mx-0 shadow rightClickMenu' style={{width: '220px'}}>
                <button onClick={props.closeWindow} className='dropdown-item' style={{marginBottom: '0em'}}>Close window</button>
                <hr/>
                <button onClick={newTask} className='dropdown-item'>New task</button>
                <button onClick={props.closeWindow} className='dropdown-item'>Edit task</button>
                <button onClick={props.closeWindow} className='dropdown-item'>Change color</button>
                <button onClick={props.closeWindow} className='dropdown-item'>Move up</button>
                <button onClick={props.closeWindow} className='dropdown-item'>Move down</button>
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
