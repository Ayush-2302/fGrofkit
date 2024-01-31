import React, { useState } from "react";
import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiDoubleQuotesL,
} from "react-icons/ri";

const UserCarosel = () => {
  const [pic, setPic] = useState(0);
  const handlePrevious = () => {
    setPic(!pic ? Carosel.length - 1 : pic - 1);
  };
  const handleafter = () => {
    setPic((pic + 1) % Carosel.length);
  };
  const Carosel = [
    {
      name: "aliya",
      img: "https://images.unsplash.com/photo-1682687218147-9806132dc697?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, temporibus tempore repellendus modi repudiandae facilis officiis dicta quod quam pariatur est tenetur voluptates exercitationem iste voluptatem sint velit ipsam cumque.",
    },
    {
      name: "rohan",
      img: "https://images.unsplash.com/photo-1682685797527-63b4e495938f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, temporibus tempore repellendus modi repudiandae facilis officiis dicta quod quam pariatur est tenetur voluptates exercitationem iste voluptatem sint velit ipsam cumque.",
    },
    {
      name: "raja",
      img: "https://images.unsplash.com/photo-1706303192345-294f72ac7d4d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D",
      desc: "AYush Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, temporibus tempore repellendus modi repudiandae facilis officiis dicta quod quam pariatur est tenetur voluptates exercitationem iste voluptatem sint velit ipsam cumque.",
    },
  ];

  return (
    <div>
      <div className="flex items-center gap-4  p-5  ">
        <div
          className="previous hidden border-2 rounded-full  md:flex lg:flex justify-center items-center w-14 h-14"
          onClick={handlePrevious}
        >
          <RiArrowLeftSLine className="  text-3xl  " />
        </div>

        <div className=" bg-[#29292b] rounded-lg w-full  p-10 ">
          {Carosel.map((ele, index) => (
            <>
              {/* <div className="coma">
                    <RiDoubleQuotesL className=" text-2xl text-white" />
                  </div> */}
              <div
                className={`grid lg:grid-cols-2  h-full  ${
                  index === pic ? "block" : "hidden"
                }`}
              >
                <div className="text text-white p-10 gap-y-10 ">
                  <p> {ele.desc}</p>
                  <p className=" mt-10">-{ele.name}</p>
                </div>
                <div className=" w-full h-full  ">
                  <img
                    src={ele.img}
                    alt="user "
                    className={`object-center w-full h-80 rounded-md`}
                  />
                </div>
              </div>
            </>
          ))}
        </div>
        <div
          className="after border-2  hidden md:flex rounded-full lg:flex justify-center items-center w-14 h-14 "
          onClick={handleafter}
        >
          <RiArrowRightSLine className=" text-3xl  " />
        </div>
      </div>
    </div>
  );
};

export default UserCarosel;
