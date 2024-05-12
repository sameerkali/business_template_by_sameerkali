import React from "react";
import "../index.css";
import userimage from "../assets/user02.jpg";

const GettingStartNowSecound = () => {
  return (
    <div>
      <div className="bg02 h-screen flex-col sm:flex-row  flex justify-center items-center gap-10">
        <img className="sm:h-[25rem] sm:w-[35rem] h-[15rem] w-[20rem]" src={userimage} />
        <div className="max-w-[40rem] sm:mt-[-10rem] mt-[-6rem] sm:mx-0 mx-10">
          <h1 className="text-center sm:text-left mt-[5rem] text-4xl font-bold text-black">
            24 x 7 dedicated Technical Support for connection problem
          </h1>
          <p className="text-center sm:text-left mt-5 text-2xl text-black">
            Praesent tincidunt porttitor libero, id sodales enim tincidunt id
            Nam efficitur ultrices sapien, ut sagittis mauris venenatis.
          </p>
          <p className="text-center sm:text-left mt-10 text-sm text-black">
            Praesent tincidunt porttitor libero, id sodales enim tincidunt id
            Nam efficitur ultrices sapien, ut sagittis mauris venenatis.
          </p>
          <button className="px-6 py-3 bg-gray-600 text-white rounded-xl mt-10 sm:ml-0 ml-[4.5rem]">
            Getting Started Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default GettingStartNowSecound;
