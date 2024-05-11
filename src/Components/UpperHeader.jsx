import React from "react";
import { Link } from "react-router-dom";
import { TiSocialFacebook } from "react-icons/ti";
import { AiFillInstagram } from "react-icons/ai";

const UpperHeader = () => {
  return (
    <header className="bg-gray-800 flex justify-between items-center py-4 px-36 text-white">
      <div className="flex gap-4">
        <div className="flex gap-4">
          <p>Residential Service</p>
          <p>Residential Service</p>
        </div>
      </div>
      <div className="flex gap-4">
        <p>+413-2619-789</p>
        <p>support@ultranet.com</p>
        <TiSocialFacebook />
        <AiFillInstagram />
        <TiSocialFacebook />
        <AiFillInstagram />
        <TiSocialFacebook />
      </div>
    </header>
  );
};
export default UpperHeader;