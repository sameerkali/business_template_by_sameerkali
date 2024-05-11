import React from "react";

const CtaCard = ({ title, image, description }) => {
  return (
    <div className="flex flex-col max-w-96 text-center items-center">
      <img src={image} alt="Dummy Image" className="h-52 w-52" />
      <h2 className="text-2xl mb-4 text-black">{title}</h2>
      <p className="text-gray-500">{description}</p>
    </div>
  );
};

export default CtaCard;