import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import carouselImage1 from "../staticResources/carouselImage1.jpg";
import carouselImage2 from "../staticResources/carouselImage2.jpg";
import carouselImage3 from "../staticResources/carouselImage3.avif";

export default function ImageCarousel() {
  return (
    <div className="d-flex-center" style={{width: "90vw", height: "auto"}}>
      <Carousel autoPlay infiniteLoop showThumbs={false} stopOnHover={false}>
        <div>
          <img style={{objectFit: "cover"}} alt="somePhoto" src={carouselImage1} />
        </div>
        <div>
          <img alt="somePhoto" src={carouselImage2} />
        </div>
        <div>
          <img alt="somePhoto" src={carouselImage3} />
        </div>
      </Carousel>
    </div>
  );
}
