import React from "react";
import { MdPeopleAlt } from "react-icons/md";
import { FaWifi } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";

const Item = ({ icon, number, text }) => {
  const renderIcon = () => {
    switch (icon) {
      case "MdPeopleAlt":
        return <MdPeopleAlt size={50} color="green" />;
      case "FaWifi":
        return <FaWifi size={50} color="#2baaf9" />;
      case "CiHeart":
        return <CiHeart size={50} color="red" />;
      case "HiAdjustmentsHorizontal":
        return <HiAdjustmentsHorizontal size={50} color="#3db977" />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center text-center">
      {renderIcon()}
      <p className="text-6xl mt-3">{number}</p>
      <p className="text-[13px] mt-2">{text}</p>
    </div>
  );
};

const Features = () => {
  return (
    <div className="bg-[#223140] text-white flex items-center justify-around px-56  h-[20rem]">
    <Item icon="MdPeopleAlt" number="3654+" text="SUBSCRIBERS" />
    <Item icon="FaWifi" number="300+" text="AREAS COVERED" />
    <Item icon="CiHeart" number="2500+" text="LOVED BY" />
    <Item icon="HiAdjustmentsHorizontal" number="20+" text="CUSTOMIZABLE" />
</div>

  );
};

export default Features;
