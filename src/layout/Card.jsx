// src/components/Card.js
import React from 'react';

const Card = ({ title, description, imageUrl }) => {
  return (
    <div className="border-2 bg-white rounded-xl w-96 shadow-md overflow-hidden">
      <div className="md:flex">
        <div className="">
          <img className="h-48 w-full object-cover md:w-48" src={imageUrl} alt="Card" />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{title}</div>
          <p className="mt-2 text-gray-500">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
