import React, { useEffect, useState } from "react";
import "./App.css";

import {UnsplashImage}  from './component/UnsplashImage';

function App(props) {
  const [images, setPhotos] = useState([]);

  const fetchRequest = async () => {
    const data = await fetch(
      `https://api.unsplash.com/photos/random?client_id=xFacdBRowTwJiZassqttcds9FzXWs1x8ahBmFKegZpE&count=30`
    );
    const dataJ = await data.json();
    console.log(dataJ);
    setPhotos(dataJ)
  };
  useEffect(() => {
    fetchRequest();
  }, [] );

  return (
    <div className="container">
      {images.map((val, index) => (
        <UnsplashImage url={val.urls.small}
        alt={"val.alt.description"} 
        key={index}
        info={val.user.name}
        media={val.links.download}
        />
     )) }
     
    </div>
  );
}

export default App;