import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image01 from "../assets/user01.jpg";
import image02 from "../assets/user02.jpg";
import image03 from "../assets/user01.jpg"; 

const Testimonials = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  const testimonials = [
    {
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nisi vitae nisi eleifend, vel consectetur libero efficitur.",
      author: "John Doe",
      position: "CEO, Company XYZ",
      image: image01 // Add image path for testimonial 1
    },
    {
      text:
        "Nullam vitae mauris eget nisi varius aliquam. Fusce ut diam molestie, finibus nulla ac, faucibus nibh. Praesent fringilla ex nec massa efficitur, vitae volutpat risus posuere.",
      author: "Jane Smith",
      position: "Marketing Manager, Company ABC",
      image: image02 // Add image path for testimonial 2
    },
    {
      text:
        "Sed vel augue vel ex sollicitudin feugiat. Donec vel nulla ac sapien faucibus bibendum. Suspendisse potenti.",
      author: "Michael Johnson",
      position: "Product Designer, Company LMN",
      image: image03 // Add image path for testimonial 3
    }
  ];

  return (
    <div className="container mx-auto py-8 h-screen">
      <div className="text-center mt-28 mb-28">
        <h2 className="text-3xl mb-2 font-bold">We Give Awesome Service,</h2>
        <h2 className="text-3xl font-bold">
          See How{" "}
          <span className="text-3xl text-blue-500 font-bold ">
            Customers Love Us.
          </span>
        </h2>
      </div>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) =>
          <div key={index} className="px-4">
            <div className=" p-6 rounded-lg shadow-md text-center">
              <p className="text-gray-700 mb-4  text-2xl  text-center">
                {testimonial.text}
              </p>
              <div className="flex items-center flex-col">
                <div className="mr-4">
                  <img
                    src={testimonial.image}
                    alt="Avatar"
                    className="rounded-full"
                    style={{ width: 84, height: 84 }} 
                  />
                </div>
                <div>
                  <h3 className="font-bold text-center">
                    {testimonial.author}
                  </h3>
                  <p className="text-gray-600 text-center">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </Slider>
    </div>
  );
};

export default Testimonials;
