import React from "react";

const MemberCard = ({ name, role, imageSrc }) => {
  return (
    <div className="rounded overflow-hidden shadow-lg  ">
      <div className="flex justify-center ">
        <img
          className=" h-72 w-11/12 "
          src={imageSrc}
          alt={`Team of ${name}`}
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{role}</p>
      </div>
    </div>
  );
};

export default MemberCard;
