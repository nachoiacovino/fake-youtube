import React from "react";

export default ({ video }) => {
  if (!video) {
    return <div></div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  const videoURL = `https://www.youtube.com/watch?v=${video.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe src={videoSrc} title="video-player"></iframe>
      </div>
      <div className="ui segment">
        <a href={videoURL}>
          <h4 className="ui header">{video.snippet.title}</h4>
        </a>
        <p className="description">{video.snippet.description}</p>
      </div>
    </div>
  );
};
