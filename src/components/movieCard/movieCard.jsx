import "./movieCardStyle.scss";
import React, { useState } from "react";
import Noimg from "../../assets/istockphoto-1452662817-612x612.jpg"
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function movieCard(props) {
  const url = "https://secure.gravatar.com/avatar?d=wavatar";
  const [showImage, setShowImage] = useState(true);
  const IMG_URL = import.meta.env.VITE_IMG_URI;
  const hideImg = (event) => {
    setShowImage(false);
  };
  return (
    <div className="mvcard">
      {showImage ? (
        <LazyLoadImage  src={IMG_URL + props.value.poster_path} onError={hideImg} />
      ) : (
        <LazyLoadImage  src={Noimg} style={{height:'100%'}}/>
      )}
    </div>
  );
}
