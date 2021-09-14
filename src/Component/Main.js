import React from 'react'
import Slider from '../Component/Slider'

import "../CSS/main.css"
import '..'
const Main = ({ data }) => {
   return (
      <div className="header">
         <h1 className="title">Page Heading</h1>
         <h3 className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perfendis architecto neque illum eius error, totam mollitia reiceiendis officiis quis magnam?</h3>
         <Slider slides={data} />
      </div>
   )
}

export default Main