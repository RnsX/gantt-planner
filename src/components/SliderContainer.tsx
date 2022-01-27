import React from 'react';
import Slider from './Slider';


const SliderContainer = () => {
  return (
    <div className='sliderContainer'>
        <Slider></Slider>
        <Slider></Slider>
        <Slider></Slider>
        <Slider></Slider>
        <Slider></Slider>
        <Slider></Slider>
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
                border: 1px solid red;
                overflow: hidden;
            }
          `}
        </style>
    </div>
  )
};

export default SliderContainer;
