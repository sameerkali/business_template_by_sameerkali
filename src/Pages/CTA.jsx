import React from "react";
import CtaCard from "../Components/CtaCard";
import image1 from "../assets/cta01.png";
import image2 from "../assets/cta02.png";
import image3 from "../assets/cta03.png";

const CTA = () => {
  return (
    <div className="">
      <div className="">
        <h1 className=" text-center mt-[5rem] text-4xl font-bold">
          Get Ready for Ultra Speed Internet
        </h1>
        <p className=" text-center text-gray-500 mt-5">
          Get ready for more potential, more opportunity and more of everything
          you expect from UltraNET.
        </p>
        <p className=" text-center text-gray-500">
          We’re bring gigabit Internet to all our customers, starting in 2018.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row  justify-around mt-20 ">
        <CtaCard
          title="Download upto 1Gbps"
          image={image1}
          description="Praesent tincidunt porttitor libero, id sodales enim tincidunt. Proin dignissim leo finibus risus."
        />
        <CtaCard
          title="99% Intenet Uptime"
          image={image2}
          description="Praesent tincidunt porttitor libero, id sodales enim tincidunt. Proin dignissim leo finibus risus."
        />
        <CtaCard
          title="24/7 Customer Support"
          image={image3}
          description="Praesent tincidunt porttitor libero, id sodales enim tincidunt. Proin dignissim leo finibus risus."
        />
      </div>
      <hr className="max-w-[60rem] mx-auto border-dotted mt-20 bg-gray-300" />

      <div className="">
        <h1 className=" text-center mt-[5rem] text-3xl ">
        Thank you for Voting Us!
        </h1>
        <p className=" text-center mt-5 text-6xl font-bold text-black">
        “The Most Recommended Internet Service 
        </p>
        <p className=" text-center text-black mt-5 text-6xl font-bold">
        Provider”
        </p>
        <p className=" text-center text-gray-500 mt-10 ">
        — Themeforest’s Magazine 2018 & 2019
        </p>
      </div>
      </div>
  );
};

export default CTA;
