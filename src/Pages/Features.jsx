import React from "react";
import imageWifi from "../assets/features/wifi.png";
import imageHotspot from "../assets/features/super-speed.png";
import imageCustomize from "../assets/features/customize.png";

const Features = () => {
  return (
    <div className="bg-[#0077db] text-white flex flex-col sm:flex-row items-center justify-around px-4 sm:px-56 py-8 sm:py-0 sm:h-[20rem] h-[60rem]">
      <div className="text-center sm:text-left mb-8 sm:mb-0">
        <h1 className="font-2xl">Benefits of Ultranet Internet.</h1>
        <h1 className="text-6xl font-bold">Super Fast</h1>
      </div>
      <div className="flex flex-col items-center">
        <img src={imageWifi} alt="icon" />
        <h1 className="font-2xl text-center mt-4">wifi Hotspot</h1>
      </div>
      <div className="flex flex-col items-center">
        <img src={imageHotspot} alt="icon" />
        <h1 className="font-2xl text-center mt-4">Super-Fast Speeds</h1>
      </div>
      <div className="flex flex-col items-center">
        <img src={imageCustomize} alt="icon" />
        <h1 className="font-2xl text-center mt-4">Bundle Your Pack</h1>
      </div>
    </div>
  );
};

export default Features;
