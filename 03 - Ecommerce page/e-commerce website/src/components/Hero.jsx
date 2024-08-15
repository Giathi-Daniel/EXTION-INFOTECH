import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/Hero.css";

const Hero = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: false,
  };

  const slides = [
    {
      backgroundImage:
        "https://m.media-amazon.com/images/I/718aT6EGL4L.__AC_SX300_SY300_QL70_FMwebp_.jpg",
      title: "Welcome to Our Store",
      description: "Find the best deals on the latest products.",
    },
    {
      backgroundImage:
        "https://m.media-amazon.com/images/I/41pTMpnKFhL._AC_UF480,480_SR480,480_.jpg",
      title: "Exclusive Offers",
      description: "Enjoy special discounts and offers only for you.",
    },
    {
      backgroundImage:
        "https://m.media-amazon.com/images/I/81y296p3rdL._AC_UL480_FMwebp_QL65_.jpg",
      title: "New Arrivals",
      description: "Check out the latest additions to our collection.",
    },
  ];

  return (
    <Slider {...sliderSettings} className="hero-slider">
      {slides.map((slide, index) => (
        <div key={index} className="hero-slide">
          <div
            style={{
              backgroundImage: `url(${slide.backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              blockSize: "100vh",
            }}
          >
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
