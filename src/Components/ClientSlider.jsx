import React from "react";

const ClientSlider = props => {
  const { name, position, img_url, stars, disc } = props.item;
  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 m-4 rounded-lg">
      <div className="flex items-center justify-between mb-4">
        <span className="text-4xl text-green-400 opacity-70">
          {/* <IoIosQuote /> */}
          <p>icon</p>
        </span>
        <div>
          {Array(stars).fill().map((_, i) =>
            <span className="text-yellow-400 text-xl" key={i}>
              {/* <AiOutlineStar /> */}
              <p>⭐</p>
            </span>
          )}
        </div>
      </div>
      <p className="text-sm mb-6">
        {disc}
      </p>
      <div className="flex items-center gap-4">
        <img
          src={img_url}
          alt={name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div className="text-white">
          <h1 className="text-xl font-bold">
            {name}
          </h1>
          <p className="text-sm text-gray-400">
            {position}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClientSlider;
