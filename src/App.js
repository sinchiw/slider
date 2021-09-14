import React from 'react'
import Main from './Component/Main'
import "../src/CSS/main.css"
function App() {
  const imageData = [{
    "id": 1,
    "image": "1.jpg",
    "alt": "Image One"
  },
  {
    "id": 2,
    "image": "2.jpg",
    "alt": "Image Two"
  },
  {
    "id": 3,
    "image": "3.jpg",
    "alt": "Image Three"
  },
  {
    "id": 4,
    "image": "4.jpg",
    "alt": "Image Four"
  },
  {
    "id": 5,
    "image": "5.jpg",
    "alt": "Image Five"
  }]
  return (
    <div className="mainBox">
      <Main data={imageData} />
    </div>
  );
}

export default App;
