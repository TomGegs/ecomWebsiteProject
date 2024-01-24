import React, { useState } from "react";

import "./Slider.scss";
import sliderImg1 from "../../images/sliderImg1.png";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    sliderImg1,
    "https://balenciaga.dam.kering.com/m/595f5abf08f93ffe/Large-Home_Balenciaga_Summer23_Campaign_Look15_2600x1300px-2x1.jpg",
    "https://balenciaga.dam.kering.com/m/1c6adf06a133fb06/Large-Stan-Smith-only_2600X1300.jpg",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="slider">
      <div
        className="container"
        style={{ transform: `translateX(-${currentSlide * 100}vw` }}>
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <ArrowBackIosNewIcon />
        </div>
        <div className="icon">
          <ArrowForwardIosIcon onClick={nextSlide} />
        </div>
      </div>
    </div>
  );
};

export default Slider;
