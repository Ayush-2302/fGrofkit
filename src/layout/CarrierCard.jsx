import React from "react";

function CarrierCard({ title, details, opp, img }) {
  return (
    <div>
      <div className=" rounded-lg bg-white p-6 shadow-lg h-52">
        <div className="flex items-center justify-between">
          <div className="flex items-center ">
            <img className="w-14" src={img} alt="img" />
            <h5 className="mb-2 ml-2 text-xl font-medium leading-tight text-neutral-800 ">
              {title}
            </h5>
          </div>
          <p className="mb-4 text-base  ">openPositions - {opp}</p>
        </div>
        <p className="mb-4 text-base  ">{details}</p>
        <button className=" py-2 px-3 text-sm text-white bg-blue-600 rounded-lg hover:bg-blue-700 shadow-lg">
          Button
        </button>
      </div>
    </div>
  );
}

export default CarrierCard;
