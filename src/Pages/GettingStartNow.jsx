import React from "react";
import "../index.css";
import userimage from "../assets/user01.jpg";

const GettingStartNow = () => {
  return (
    <div>
      <div className="home h-screen flex justify-center items-center gap-10">
        <img className="h-[25rem] w-[35rem]" src={userimage} />
        <div className="max-w-[40rem] mt-[-10rem]">
          <h1 className=" text-left mt-[5rem] text-4xl font-bold text-white">
            Connect all your devices and access high speed Internet with ease
          </h1>
          <p className=" text-left mt-5 text-2xl   text-white">
            Praesent tincidunt porttitor libero, id sodales enim tincidunt id
            Nam efficitur ultrices sapien, ut sagittis mauris venenatis.
          </p>
          <p className=" text-left  mt-10  text-sm text-white te">
            Praesent tincidunt porttitor libero, id sodales enim tincidunt id
            Nam efficitur ultrices sapien, ut sagittis mauris venenatis.
          </p>
          <button className="px-6 py-3 bg-blue-400 text-white rounded-xl mt-10 ">getting start now</button>
        </div>
      </div>
    </div>
  );
};

export default GettingStartNow;
