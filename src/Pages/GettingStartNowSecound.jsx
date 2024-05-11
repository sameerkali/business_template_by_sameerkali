import React from "react";
import "../index.css";
import userimage from "../assets/user02.jpg";

const GettingStartNowSecound = () => {
  return (
    <div>
      <div className="bg02 h-screen flex justify-center items-center gap-10">
        <div className="max-w-[40rem] mt-[-10rem]">
          <h1 className=" text-left mt-[5rem] text-4xl font-bold text-black">
            24 x 7 dedicated Technical Support for connection problem
          </h1>
          <p className=" text-left mt-5 text-2xl   text-black">
            Praesent tincidunt porttitor libero, id sodales enim tincidunt id
            Nam efficitur ultrices sapien, ut sagittis mauris venenatis.
          </p>
          <p className=" text-left  mt-10  text-sm text-black">
            Praesent tincidunt porttitor libero, id sodales enim tincidunt id
            Nam efficitur ultrices sapien, ut sagittis mauris venenatis.
          </p>
          <button className="px-6 py-3 bg-gray-600 text-white rounded-xl mt-10 ">
            getting start now
          </button>
        </div>
        <img className="h-[25rem] w-[35rem]" src={userimage} />
      </div>
    </div>
  );
};

export default GettingStartNowSecound;
