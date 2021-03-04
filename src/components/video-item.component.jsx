import React from "react";
import "./video-item.styles.scss";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
      <div onClick={() => {onVideoSelect(video) }} className="video-item item">
      <img
        className="ui image"
        alt={video.snippet.titel}
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};
export default VideoItem;
