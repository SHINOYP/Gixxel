import React from "react";
import YouTube from "react-youtube";

const VideoPlay = ({ videoId }) => {
  const opts = {
    height: "290",
    width: "720",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return (
    <div>
      <YouTube videoId="2g811Eo7K8U" opts={opts} />
    </div>
  );
};

export default VideoPlay;
