import React from "react";
import images from "./images"; 
import "./Gallery.css";

function Gallery() {
  return (
    <div className="gallery-container">
      {images.map((src, index) => (
        <div className="gallery-item" key={index}>
          <img src={src} alt={`Gallery ${index + 1}`} />
        </div>
      ))}
    </div>
  );
}

export default Gallery;
