import React from 'react';
import { useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { IProject } from '../data-structures/Project';
import { defaultLocationState, ILocation, ITask } from '../data-structures/Task';
import { gotProjectsAction, updateLocationAction } from '../redux/Projects';
import { IAppState } from '../redux/Store';


const Slider = (props:{task: ITask}) => {

  const projects: IProject[] = useSelector((state:IAppState) => state.projects.projects);

  const [slider, setSlider] = useState<ILocation>(defaultLocationState);

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
    }
    console.log('mouse up', slider)
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

export default Slider

// const mapStateToProps = (state: IAppState) =>({
//   currentAlertCount: state.projects.viewing
// })
// export default connect(mapStateToProps)(Project)