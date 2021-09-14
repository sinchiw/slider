import React, { useState } from 'react'

import '../CSS/slider.css'


const Slider = ({ slides }) => {
   const [current, setCurrent] = useState(0)
   const length = slides.length

   //slide to the next image
   const nextImage = (current) => {
      if (current < length - 1) {

         setCurrent(prev => prev + 1)
      } else {
         setCurrent(0)
      }
   }
   //slide to the prev Image
   const prevImage = (current) => {
      if (current > 0) {
         setCurrent(prev => prev - 1)
      } else {
         setCurrent(length - 1)
      }
   }
   //setting the functionality for the dots 
   const setImage = (img) => {
      setCurrent(img)
   }

   const renderDots = slides.map((img, index) => {
      return (
         <div key={index} className={`slideshowDots${index === current ? " active" : ""}`} onClick={() => setImage(index)}></div>
      )
   })

   const renderImage = slides.map((img) => {
      return (
         <img key={img.id} src={`./Assets/${img.image}`} className="image" alt={img.alt} />
      )
   })

   return (
      <div className='main'>
         <div className="sliderContainer">
            <div className="leftButton" onClick={() => prevImage(current)}>{`<`}</div>
            <div className="sliderContent">
               <div className="imagesBox" style={{ transform: `translate3d(${-current * 100}%, 0, 0)` }}>
                  {renderImage}
               </div>
            </div>
            <div className="rightButton" onClick={() => nextImage(current)}>{`>`}</div>
         </div>
         <div className="dots">
            {renderDots}
         </div>
      </div>
   )
}

export default Slider