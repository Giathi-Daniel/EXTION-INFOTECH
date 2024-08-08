import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductSlider = ({ products, onAddToCart }) => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.8,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.8,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="slider-container">
      <button className="slider-button prev" onClick={goToPrev}>
        &lt;
      </button>

      <Slider ref={sliderRef} {...settings}>
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.imgSrc} alt={product.desc} />
            <div className="product__desc">
              <div className="stars"></div>
              <p dangerouslySetInnerHTML={{ __html: product.desc }}></p>
              <div className="product__listing">
                <span
                  className="price"
                  dangerouslySetInnerHTML={{ __html: product.price }}
                ></span>
              </div>
              <button type="submit" onClick={() => onAddToCart(product.id)}>
                add to cart
              </button>
            </div>
          </div>
        ))}
      </Slider>

      <button className="slider-button next" onClick={goToNext}>
        &gt;
      </button>
    </div>
  );
};

export default ProductSlider;
