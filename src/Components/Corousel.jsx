import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image1 from "../assets/home/slide01.jpg";
import image2 from "../assets/home/slide02.jpg";
import image3 from "../assets/home/slide03.jpg";
import image4 from "../assets/home/slide04.jpg";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  const slides = [
    {
      image: image1,
      text: `Get Router Free with 6 Months Broadband
      Performed on dedicated fiber-optic
      Guaranteed bandwidth and unlimited traffic`
    },
    {
      image: image2,
      text: `Get Ready for Ultra Speed Internet
      We’re bring gigabit Internet to all our customers, starting mid 2017.`
    },
    {
      image: image3,
      text: `More than 4000+ Happy Customers
      Providing solutions to residential, corporate, educational institutions.`
    },
    {
      image: image4,
      text: `Get Router Free with 6 Months Broadband
      Performed on dedicated fiber-optic
      Guaranteed bandwidth and unlimited traffic.`
    }
  ];

  return (
    <div style={{ maxWidth: screen, margin: "0 auto" }}>
      <Slider {...settings}>
        {slides.map((slide, index) =>
          <div key={index}>
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              style={{ width: "100%", height: "auto" }}
            />
            <div
              style={{
                padding: '1rem',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                color: '#fff',
                textAlign: 'center',
              }}
            >
              <h3>{slide.text}</h3>
            </div>
          </div>
        )}
      </Slider>
    </div>
  );
};

export default Carousel;
