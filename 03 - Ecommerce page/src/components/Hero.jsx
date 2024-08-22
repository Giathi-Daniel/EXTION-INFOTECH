import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/Hero.css";
import bg1 from "../assets/bg1.png";
import bg2 from "../assets/bg2.avif";
import bg3 from "../assets/bg3.png";

const Hero = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
  };

  const slides = [
    {
      backgroundImage: bg1,
      title: "Redefining Smart Living",
      description: "Experience cutting-edge technology with our latest range of smart devices.",
    },
    {
      backgroundImage: bg2,
      title: "Next-Gen Performance",
      description: "Unlock the power of innovation with our high-performance gadgets.",
    },
    {
      backgroundImage: bg3,
      title: "Seamless Connectivity",
      description:
        "Collaborate with industry leaders to achieve your digital goals through cutting-edge technology.",
    },
  ];

  return (
    <Slider {...sliderSettings} className="hero-slider">
      {slides.map((slide, index) => (
        <div key={index} className="hero-slide">
          <div
            className="slide-background"
            style={{
              backgroundImage: `url(${slide.backgroundImage})`,
            }}
          >
            <div className="slide-overlay"></div>
            <div className="slide-content">
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Hero;
