import React from "react";
import Testimonials from "../layout/Testimonials";
// import banner from "../assert/banner.webp";
import banner from "../assert/banner.webp";
import BlogCard from "../layout/BlogCard";
import TeamMem from "./TeamMem";

const About = () => {
  return (
    <>
      <div className="banner bg-yellow-400  h-[460px]  text-white pb-10">
        <div className="  flex justify-center w-full h-[330px] ">
          <img
            src={banner}
            alt="banner "
            className=" h-full lg:w-4/5 md:w-full "
          />
        </div>
        <div className=" h-24 w-full flex  p-10 justify-center items-center ">
          <p className=" font-bold text-4xl text-white">
            Instant commerce indistinguishable from magic
          </p>
        </div>
      </div>

      <div className="  lg:px-44 md:p-20 sm:10 p-5 pt-10 pb-10 mx-auto">
        <section>
          <h1 className=" text-3xl ">About us</h1>
          <p className=" p-5">
            Just imagine! Sometimes any of your colleague is at your home and
            you kept him alone and put some snacks and breakfast items for them.
            Now we are revolutionizing E-commerce by making the responsibility
            out of you and put them on your partner(grofkit). Avail to you at
            just some gossip. We would like to our customers family to focous on
            their important things and not need to plan for the little things
            that life needs an every day basis. We are hear to taken your choses
            and making your life better . We are revolutionizing the retail
            grocery system in India. Our aim however is to be make a club of
            entrepreneur in next some little years . We would like to become the
            most important e-retail companies of our session . we need to
            create, who can think on making their own ownership and commit to
            making outcomes happens. If you are ambitious but you have no hands
            nad plans. Then we would love to hear from you . Oppertunies to
            create an iconic businesses in India . we are trying and looking for
            the hungry. Grofkit is run and managed by Grofkit pvt. Ltd. Some of
            the people building Grofkit.
          </p>
        </section>
        <section className="blog  ">
          <div className="p-10">
            <h1 className=" text-2xl ">From our blog</h1>
            <p>
              Explore our blog to check out what we’re up to and what makes us
              tick at Grofit
            </p>
          </div>
          <BlogCard />
        </section>
        <section className="team-member   ">
          <h1 className=" text-2xl p-10">
            Some of the people building GrofKit
          </h1>
          <TeamMem />
        </section>
        <section className=" mt-10">
          <div className="mx-auto text-center md:max-w-xl lg:max-w-3xl  mb-20">
            <h3 className="mb-6 text-3xl font-bold ">Grofkit Members</h3>
            <p className="mb-6 pb-2 md:mb-12 md:pb-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
              error amet numquam iure provident voluptate esse quasi, veritatis
              totam voluptas nostrum quisquam eum porro a pariatur veniam.
            </p>
          </div>
          <Testimonials />
        </section>
        <section className="team-member  ">
          <h1 className=" text-2xl p-10">Our Partners </h1>
          <TeamMem />
        </section>
      </div>
    </>
  );
};

export default About;
