import React from "react";
import "../../styles/MainPageCss/Carousel.css";
import BigCard from "./BigCard";
import SmallCard from "./Smallcard";

const Carousel = () => {
  return (
    <div className="carousel">
      <button className="arrow left">❮</button>

      <div className="carousel-content">
        <BigSection />
        <SmallSection />
      </div>

      <button className="arrow right">❯</button>
    </div>
  );
};

const BigSection = () => (
  <div className="big-section">
    <BigCard />
  </div>
);

const SmallSection = () => (
  <div className="small-section">
    {[1, 2, 3, 4, 5, 6].map((i) => (
      <SmallCard key={i} />
    ))}
  </div>
);

export default Carousel;
