import React from "react";
import img1 from "../assert/rev1.avif"
import img2 from "../assert/rev2.avif"
import img3 from "../assert/rev3.avif"
import Team from "../layout/Team";

const Team1 = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center md:px-32 px-5">
      <h1 className="text-gray-900 text-4xl font-semibold text-center lg:pt-16 pt-24 pb-10">
       Our Team
      </h1>
      <div className=" flex flex-col md:flex-row gap-5 mt-5">
        <Team img={img1} name="Sophia Azura" />
        <Team img={img2} name="John Deo" />
        <Team img={img3} name="Victoria Zoe" />
      </div>
    </div>
  );
};

export default Team1;