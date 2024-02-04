import React from "react";
import OpportunitiesCard from "../layout/OpportunitiesCard";
import UserCarosel from "../layout/UserCarosel";
import ScrollingCard from "../layout/ScrollingCard";
import Card from "../layout/Card";
import ScrollingCardC from "../layout/ScrollingCard copy";
const Partner = () => {
  const reviews = [
    {
      userName: "John Doe",
      userAvatar:
        "https://images.unsplash.com/photo-1682687982501-1e58ab814714?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
      date: "January 20, 2024",
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      rating: 4,
    },
    // Add more reviews as needed
  ];
  return (
    <>
      <div className="banner bg-yellow-400 h-[460px]  font-bold flex justify-center items-center text-white py-20">
        <div className=" container">
          <section id="chef" className=" text-center  p-10  ">
            <div className=" flex justify-center w-full h-[330px] ">
              <img
                src="https://blinkit.com/careers/sites/default/files/2022-03/career-masthead-desktop.png"
                alt="banner "
                className=" h-full lg:w-4/5 md:w-full "
              />
            </div>

            <div className=" h-24 w-full flex  p-10 justify-center items-center ">
              <p className=" font-bold text-xl text-white">
                "Join us on a journey of endless growth and fulfillment, where
                your aspirations meet boundless opportunities in shaping the
                future together."
              </p>
            </div>
          </section>
        </div>
      </div>

      <div className=" lg:px-44 md:p-20 sm:10 p-5  pb-0 space-y-16">
        <section className="about">
          <p className="text-3xl my-5 font-semibold">
            {" "}
            Better lives for more people
          </p>
          <p className="">
            To actualize our vision of better lives for more people, we use
            proprietary technology to empower Indians – by creating increased
            convenience, more savings, flourishing businesses, and stronger
            communities. All this, while making everyday shopping a smoother,
            happier experience for India. We are always looking for driven
            individuals to join us in making instant commerce indistinguishable
            from magic.
          </p>
        </section>

        <section className=" poster">
          <h1 className=" text-2xl my-10 font-semibold"> What set us apart</h1>
          <div className="banner border-2  p-10  rounded-lg">
            <img
              src="https://blinkit.com/careers/sites/default/files/2022-03/career-masthead-desktop.png"
              alt="banner"
              className="  mx-auto rounded-lg"
            />
          </div>
        </section>

        <OpportunitiesCard />

        <h1 className="text-2xl my-10 font-semibold">Partner testimonials</h1>
      </div>

      <div className="">
        <UserCarosel />
      </div>

      <div className="lg:px-44 md:p-20 sm:10 p-5  pb-0">
        <h1 className="text-2xl my-10 font-semibold">Partner testimonials</h1>
        <div className=" ">
          <ScrollingCardC />
        </div>
      </div>
    </>
  );
};

export default Partner;
