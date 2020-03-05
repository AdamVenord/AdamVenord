import React from 'react';
import { Image, } from 'semantic-ui-react'
import { Slide } from 'react-slideshow-image';
import Adam from "./Imgs/Adam.jpg"
 
// const slideImages = [
//   <Image src={Adam} />,
//   'images/slide_3.jpg',
//   'images/slide_4.jpg'
// ];
 
const properties = {
  duration: 10000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}
 
const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide">
            {/* <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              <span>Slide 1</span>
            </div> */}
             <Image src={Adam} style={{ width: 400, }} />
          </div>
          <div className="each-slide">
            {/* <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              <span>Slide 2</span>
            </div> */}
          </div>
          <div className="each-slide">
            {/* <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <span>Slide 3</span>
            </div> */}
          </div>
        </Slide>
      </div>
    )
}

export default Slideshow