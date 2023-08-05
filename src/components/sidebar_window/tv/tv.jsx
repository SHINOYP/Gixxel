import "./tv_style.scss";
import React from "react";

const AddnewCourse = (props) => {
  return props.trigger ? (
    <div className="tv-popup">
      <h1 className="tv-popup-h1">TV SHOW</h1>
      <div className=" ">{props.children}</div>
    </div>
  ) : (
    ""
  );
};

export default AddnewCourse;
