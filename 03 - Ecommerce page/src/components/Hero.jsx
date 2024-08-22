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
        "https://img.freepik.com/premium-photo/abstract-graphic-design-featuring-shopping-icons-geometric-shapes_1305385-18135.jpg?size=626&ext=jpg&ga=GA1.2.447471987.1724343035&semt=ais_hybrid",
      title: "Welcome to Our Store",
      description: "Find the best deals on the latest products.",
    },
    {
      backgroundImage:
        "https://img.freepik.com/free-psd/3d-rendering-ecommerce-background_23-2151386703.jpg?size=626&ext=jpg&ga=GA1.1.447471987.1724343035&semt=ais_hybrid",
      title: "Exclusive Offers",
      description: "Enjoy special discounts and offers only for you.",
    },
    {
      backgroundImage:
        "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=600",
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
