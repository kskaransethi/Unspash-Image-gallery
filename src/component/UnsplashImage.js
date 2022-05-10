import React from "react";

export const UnsplashImage = ({ url, id, alt, info, media }) => {
  return (
    <div className="gallery-container">
      <div className="gallery-items">
        <div className="image">
          <img src={url} alt={alt} key={id} />
        </div>
        <div className="text">
          <p>{info}</p>
        </div>
        <div className="download">
          <a 
            href={media.url}
            download
          >
            Download
          </a>
        </div>
      </div>
    </div>
  );
};
