import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export const Carousel = ({ images }) => {
  /* You will need to  use  state to mnage the current image */
  const [imageSate,setImageState] = useState(0);
  /* You will need to hanle the click on left and right button */
  function updateState(isToTheright){
    setImageState((i)=> (i + (isToTheright? 1 : -1) + 8)%8);
  }

  /* You will need to manage the cases when we are on the last image or first image*/


  return (
    <div className="carousel">
      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={()=>updateState(false)}/>

      {/* YOu will need to display the current image, not the first one.. */}
      <img src={images[imageSate].src} alt={images[imageSate].alt} className="slide" />

      <BsArrowRightCircleFill className="arrow arrow-right" onClick={()=>updateState(true)}/>
    </div>
  );
};
