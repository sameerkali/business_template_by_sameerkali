import React from "react";
import imageWifi from "../assets/features/wifi.png";
import imageHotspot from "../assets/features/super-speed.png";
import imageCustomize from "../assets/features/customize.png";

const Features = () => {
  return (
    <div className="bg-[#0077db] text-white flex items-center justify-around px-56  h-[20rem]">
      <div className="">
        <h1 className="font-2xl">Benefits of Ultranet Internet.</h1>
        <h1 className="text-6xl font-bold ">Super Fast</h1>
      </div>
      <div>
        <img src={imageWifi} alt="icon" />
        <h1 className="font-2xl text-center mt-4">wifi Hotspot</h1>
      </div>

      <div>
        <img src={imageHotspot} alt="icon" />
        <h1 className="font-2xl text-center mt-4">Super-Fast Speeds</h1>
      </div>
      <div>
        <img src={imageCustomize} alt="icon" />
        <h1 className="font-2xl text-center mt-4">Bundle Your Pack</h1>
      </div>
    </div>
  );
};

export default Features;
