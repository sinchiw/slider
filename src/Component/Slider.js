import React, { useState } from 'react'

import '../CSS/slider.css'


const Slider = ({ slides }) => {
   const [current, setCurrent] = useState(0)
   const length = slides.length





   const nextImage = (current) => {
      if (current < length - 1) {

         setCurrent(prev => prev + 1)
      } else {
         setCurrent(0)
      }
   }

   const prevImage = (current) => {
      if (current > 0) {
         setCurrent(prev => prev - 1)
      } else {
         setCurrent(length - 1)
      }
   }

   const setImage = (img) => {

      setCurrent(img)
   }

   const renderDots = slides.map((img, index) => {
      return (
         <button onClick={() => setImage(index)}>{index}</button>
      )

   })

   const renderImage = slides.map((img, index) => {
      return (
         <img key={img.id} src={`./Assets/${img.image}`} className="image" alt={img.alt} />
      )
   })

   console.log(slides[0])

   return (
      <div className='main'>
         <div className="sliderContainer">
            <button className="leftButton" onClick={() => prevImage(current)}>{`<`}</button>
            <div className="sliderContent">
               <div className="slidesshowSlider" style={{ transform: `translate3d(${-current * 100}%, 0, 0)` }}>
                  {renderImage}
               </div>
            </div>
            <button className="rightButton" onClick={() => nextImage(current)}>{`>`}</button>

         </div>

         <div className="dots">
            {renderDots}
         </div>

      </div>

   )

}

export default Slider