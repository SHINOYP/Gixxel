import "./movie_style.sass";
import React from "react";

const AddnewCourse = (props) => {
  return props.trigger ? (
    <div className="mv-popup  ">
      <h1 className="mv-popup-h1">MOVIES</h1>
      <div className="popup-inner rounded-xl ">{props.children}</div>
    </div>
  ) : (
    ""
  );
};

export default AddnewCourse;
