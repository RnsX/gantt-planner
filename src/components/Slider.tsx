import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IProject } from '../data-structures/Project';
import { defaultLocationState, ILocation } from '../data-structures/Task';
import { gotProjectsAction } from '../redux/Projects';
import { IAppState } from '../redux/Store';


const Slider = (props:{taskId:number, projectId: number}) => {

  const dispatch = useDispatch();
  const initSliderState: ILocation | undefined = useSelector((state:IAppState) => state.projects.projects)
    .find(x=>x.Info.id == props.projectId)?.Tasks
    .find(y=>y.TaskInfo.id == props.taskId)?.location;

  const projectList: IProject[] = useSelector((state:IAppState)=> state.projects.projects);

  const [slider, setSlider] = useState(initSliderState != undefined ? initSliderState : defaultLocationState);

  const updateTaskLocation = () => {
    projectList.forEach(project => {
      if(project.Info.id == props.projectId)
      {
        project.Tasks.forEach(taskOfProject => {
          taskOfProject.location = slider;
        });
      }
    });
    dispatch(gotProjectsAction(projectList));
  }

  const startMove = (e: React.MouseEvent) => {
    if(slider.isMoving == false)
    {
      setSlider({...slider, isMoving: true, lastLocation: e.clientX});
      console.log('mouse down:', slider)
    }
  };
  const endMove = (e: React.MouseEvent) => {
    if(slider.isMoving == true)
    {
      setSlider({...slider, isMoving: false, lastLocation: e.clientX, lastDiff: slider.diff, lastWidth: slider.deltaWidth});
      updateTaskLocation();
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
         <div style={{
           minWidth: `${slider.deltaWidth}px`,
           maxWidth: `${slider.deltaWidth}px`,
           height: `50px`,
           border: `1px solid black`,
           transform: `translateX(${slider.diff}px)`,
           display: `flex`,
           justifyContent: `flex-end`,
           backgroundColor: `${slider.isChangingWidth == true ? 'lightgreen' : 'white'}`,
         }}
          onMouseDown={(e: React.MouseEvent) => startMove(e)}
          onMouseUp={(e: React.MouseEvent) => endMove(e)}
          onMouseMove={(e: React.MouseEvent) => moveItem(e)}
          onMouseLeave={(e: React.MouseEvent) => endMove(e)}
          onDoubleClick={toggleWidthChanger}

        >
        </div>
  )
};

export default Slider;
