import React from 'react';

export interface IRightClickWindowProps {
    visible: boolean,
    locationX: number,
    locationY: number,
    currentlySelectedTaskId: number
}

const RightClickWindow = (props:{windowProps: IRightClickWindowProps, closeWindow: () => void}) => {
    const { visible, locationX, locationY, currentlySelectedTaskId} = props.windowProps;

    return (
        <div className='rightClickMenu'>
            <p onClick={props.closeWindow}>Close window</p>
            <p>Task ID: {currentlySelectedTaskId}</p>
            <style>
                {`
                    .rightClickMenu {
                        width: 120px;
                        height: 100px;
                        border: 1px solid lightgray;
                        padding: 0.33em;
                        display: ${visible == true ? 'flex' : 'none'};
                        flex-direction: column;
                        justify-content: flex-start;
                        position: absolute;
                        background-color: white;
                        transform: translate(${locationX}px, ${locationY}px);
                        border-radius: 0.5em;
                        -webkit-box-shadow: 0px 0px 22px 4px rgba(0,0,0,0.3); 
                        box-shadow: 0px 0px 22px 4px rgba(0,0,0,0.3);
                        z-index: 99;
                    }
                    
                    .rightClickMenu > button {
                        padding: 0.2em;
                        font-size: small;
                        margin-bottom: 0.25em;
                    }
                `}
            </style>
        </div>
    )
};

export default RightClickWindow;
