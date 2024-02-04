import React from "react";
import { Link } from "react-router-dom";
const OpportunitiesCard = (props) => {
  const opportunities = [
    {
      title: "Seller",
      image:
        "https://blinkit.com/careers/sites/default/files/2021-12/partner-local.png",
      details:
        "Sell products from your shop from different locations in just 4 simple steps",
      link: "#",
    },
    {
      title: "SportLight",
      image:
        "https://blinkit.com/careers/sites/default/files/2021-12/partner-spotlight_0.png",
      details: "Pick, pack and sort orders at a Blinkit warehouse",
      link: "#",
    },
    {
      title: "WareHouse",
      image:
        "https://blinkit.com/careers/sites/default/files/2021-12/partner-warehouse.png",
      details: "Pick, pack and sort orders at a Blinkit warehouse",
      link: "#",
    },
    {
      title: "Delivery",
      image:
        "https://blinkit.com/careers/sites/default/files/2021-12/partner-deliver.png",
      details: "Pick, pack and sort orders at a Blinkit warehouse",
      link: "#",
    },
  ];

  return (
    <>
      <div className=" grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-8">
        {opportunities.map((ele, index) => (
          <div
            key={index}
            className=" banner text-white shadow-inner rounded-lg"
          >
            <img
              className=" rounded-xl h-52 w-full"
              src={ele.image}
              alt="img"
            />
            <div className="p-5 ">
              <h3 className=" font-semibold  text-xl pt-1">{ele.title}</h3>
              <div className=" ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
                rem animi est illum esse sed nam nisi eligendi. Iste, et.
              </div>
              <div className="underline pt-1">
                <Link>know more</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default OpportunitiesCard;
