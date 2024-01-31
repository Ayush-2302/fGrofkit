import React, { useState } from "react";
import { Collapse } from "react-collapse";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const CarrierAccordian = () => {
  const data = [
    {
      ques: "what is this",
      ans: "this is my data",
    },
    {
      ques: "what is this",
      ans: "this is my data",
    },
    {
      ques: "what is this",
      ans: "this is my data",
    },
  ];

  // const [open, setOpen] = useState(false);

  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    console.log(index);
  };

  return (
    <div>
      <div className="acc  grid gap-2 mx-auto  ">
        {data.map((ele, index) => (
          <div key={index}>
            <div className={`border-t-2 border-b-2  `}>
              <div
                onClick={() => handleToggle(index)}
                className="   px-4 pt-3 flex items-center justify-between"
              >
                <p className=" text-xl font-semibold">{ele.ques}</p>
                <p>
                  {activeIndex === index ? (
                    <IoIosArrowUp />
                  ) : (
                    <IoIosArrowDown />
                  )}
                </p>
              </div>
              <Collapse isOpened={true || false}>
                <div className="pb-3 text-lg ">
                  {activeIndex === index && (
                    <div className="px-4 ">{ele.ans}</div>
                  )}
                </div>
              </Collapse>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarrierAccordian;
