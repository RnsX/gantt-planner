import React from 'react';
import { useState } from 'react';


const Slider = () => {


  const [slider, setSlider] = useState({
    isMoving: false,
    lastLocation: 0,
    diff: 0,
    lastDiff: 0,

    isChangingWidth: false,
    lastWidth: 100,
    deltaWidth: 100
  });

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
      console.log('mouse up:', slider)
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
      <>
         <div className='slider'
          onMouseDown={(e: React.MouseEvent) => startMove(e)}
          onMouseUp={(e: React.MouseEvent) => endMove(e)}
          onMouseMove={(e: React.MouseEvent) => moveItem(e)}
          onMouseLeave={(e: React.MouseEvent) => endMove(e)}
          onDoubleClick={toggleWidthChanger}

        >
            <div className='widthButton'
            >

            </div>
        </div>
        <style>
            {`
                .slider {
                    min-width: ${slider.deltaWidth}px;
                    max-width: ${slider.deltaWidth}px;
                    height: 50px;
                    border: 1px solid black;
                    transform: translateX(${slider.diff}px);
                    display: flex;
                    justify-content: flex-end;
                    background-color: ${slider.isChangingWidth == true ? 'lightgreen' : 'white'};
                }
                .widthButton {
                    min-width: 20px;
                    max-width: 20px;
                    min-height: 100%;
                    background-color: black;
                    border: 1px solid black;
                }
            `}
        </style>
      </>
  )
};

export default Slider;
