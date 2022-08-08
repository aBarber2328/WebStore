import React from "react";

const navCarousel = () => {
  return (
    <div
    style={{backgroundColor: "#e28413"}}
      className="main-carousel"
      data-flickity='{"cellAlign": "right", "wrapAround": true, "autoPlay": 3500, "pauseAutoPlayOnHover": true, "draggable": false, "pageDots": false, "fade": true}'
    >
      <div className="carousel-cell">GET YOUR BUCKET OF EMOTIONS</div>
      <div className="carousel-cell">ON SALE FOR A LIMITED... </div>
      <div className="carousel-cell">20% OFF HAPPINESS!!!</div>
    </div>
  );
};

export default navCarousel;
