import React from "react";

export const UnsplashImage = ({ url, key, alt, info, media }) => {
  return (
    <div class="gallery-container">
      <div className="gallery-items">
        <div className="image">
          <img src={url} alt={alt} key={key} />
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
