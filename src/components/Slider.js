import React from 'react';
import {Slide} from "react-slideshow-image";

function Slider({slideImages}) {

  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '606px',
    borderRadius: '25px',
    width: '100%',
  }

  return (
    <div className={"w-72 rounded-3xl"}>
      <Slide duration={1500} autoplay={true} arrows={false}>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div style={{...divStyle, 'backgroundImage': `url(${slideImage.url})`}}></div>
          </div>
        ))}
      </Slide >
    </div>
  );
}

export default Slider;