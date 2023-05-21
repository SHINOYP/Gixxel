import "./movieCardStyle.sass";
import React, { useState } from "react";
import Noimg from "../../assets/istockphoto-1452662817-612x612.jpg"
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
        <img src={IMG_URL + props.value.poster_path} onError={hideImg} />
      ) : (
        <img src={Noimg} style={{height:'100%'}}/>
      )}
    </div>
  );
}
