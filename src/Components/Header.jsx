import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TiSocialFacebook } from "react-icons/ti";
import { AiFillInstagram } from "react-icons/ai";
import { HiMenu } from "react-icons/hi";
import logo from "../assets/logos/logo(2).png";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
     <header className="bg-blue-500 flex flex-col justify-center sm:flex-row sm:justify-between items-center py-4 px-4 sm:px-36 text-white">
  <div className="flex gap-4">
    <div className="gap-4 hidden sm:flex">
      <p>Residential Service</p>
      <p>Residential Service</p>
    </div>
  </div>
  <div className="flex gap-4 items-center">
    <div className="hidden sm:flex flex flex-col items-center justify-center sm:justify-start">
      <p className="hidden sm:block">+413-2619-789</p>
      <p className="hidden sm:block">support@ultranet.com</p>
    </div>
    <TiSocialFacebook />
    <AiFillInstagram />
    <TiSocialFacebook />
    <AiFillInstagram />
    <TiSocialFacebook />
  </div>
</header>


      <header className="bg-gray-100 py-4 px-4 sm:px-36">
        <div className="container mx-auto flex justify-between items-center">
          <img src={logo} className="h-16" alt="logo" />
          <nav className="hidden sm:block">
            <ul className="flex">
              <li className="mr-4 text-black">HOME</li>
              <li className="mr-4 text-black">ABOUT US</li>
              <li className="mr-4 text-black">SERVICES</li>
              <li className="mr-4 text-black">PACKAGE STYLES</li>
              <li className="mr-4 text-black">SUPPORT</li>
              <li className="mr-4 text-black">CONTACTS</li>
            </ul>
          </nav>
          <div className="sm:hidden">
            <HiMenu className="text-3xl cursor-pointer" onClick={toggleMenu} />
          </div>
        </div>
      </header>
      {showMenu &&
        <div className="sm:hidden bg-gray-100 py-4 px-4">
          <ul>
            <li className="mb-2 text-black">HOME</li>
            <li className="mb-2 text-black">ABOUT US</li>
            <li className="mb-2 text-black">SERVICES</li>
            <li className="mb-2 text-black">PACKAGE STYLES</li>
            <li className="mb-2 text-black">SUPPORT</li>
            <li className="mb-2 text-black">CONTACTS</li>
          </ul>
        </div>}
    </div>
  );
};

export default Header;
