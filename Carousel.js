import React,{useState} from 'react'
import './Carousel.css'
import {images} from'./Helpers/CarouselData.js'
import KeyboardDoubleArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftOutlined';import { color, rgbToHex } from '@mui/system';
import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';

function Carousel() {
  const [currImg, setCurrImg] = useState(0);
 
  return (  
    
    <div className="carousel">
        
      <div
        className="carouselInner"
        style={{ backgroundImage: `url(${images[currImg].img})`, }}
      >
        
        <div
          className="left"
          onClick={() => {
            currImg > 0 && setCurrImg(currImg - 1);
          }}
          style={{transitionDuration:"2s"}}
        >
          <KeyboardDoubleArrowLeftOutlinedIcon style={{ fontSize: 30  }}  />
        </div>
        <div className="center">
          <br></br>
          <p>{images[currImg].subtitle}</p>
          {images[currImg].Button}
        </div>
        <div
          className="right"
          onClick={() => {
            currImg < images.length - 1 && setCurrImg(currImg + 1);
          }}
        >
          <KeyboardDoubleArrowRightOutlinedIcon style={{ fontSize: 30 }} />
        </div>
      </div>
    </div>
  );
}

export default Carousel;


