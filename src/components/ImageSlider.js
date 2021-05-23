import React, { useState } from 'react';
import { SliderData } from './SliderData';

const ImageSlider = () => {
  return (
    <>
      {SliderData.map((slide, index) => {
        return <img src={slide.image} alt='candies' key={index} />;
      })}
    </>
  );
};

export default ImageSlider;
