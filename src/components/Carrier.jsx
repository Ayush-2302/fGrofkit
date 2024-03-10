import BlogCard from "../layout/BlogCard";
import CarrierAccordian from "../layout/CarrierAccordian";
// import CarrierCard from "../layout/CarrierCard";
import banner from "../assert/banner/Grofkit - Web Banners - 1000x330_Career.jpg";

import UserCarosel from "../layout/UserCarosel";

function Carrier() {
  const jobs = [
    {
      title: "Software Engineer",
      image:
        "https://raw.githubusercontent.com/livebloggerofficial/Jobs-Listing-Page/bce3d9fe94e9a3a54d571330f38f92f6c0bb69fc/images/software-engineer.svg",
      details:
        "Responsible for designing, developing and maintaining software systems and applications.",
      openPositions: "2",
      link: "#",
    },

    {
      title: "Data Scientist",
      image:
        "https://raw.githubusercontent.com/livebloggerofficial/Jobs-Listing-Page/bce3d9fe94e9a3a54d571330f38f92f6c0bb69fc/images/data-scientist.svg",
      details:
        "Responsible for collecting, analyzing and interpreting large data sets to help organizations make better decisions.",
      openPositions: "3",
      link: "#",
    },
    {
      title: "Project Manager",
      image:
        "https://raw.githubusercontent.com/livebloggerofficial/Jobs-Listing-Page/bce3d9fe94e9a3a54d571330f38f92f6c0bb69fc/images/project-manager.svg",
      details:
        "Responsible for planning, executing and closing projects on time and within budget.",
      openPositions: "1",
      link: "#",
    },
    {
      title: "Product Manager",
      image:
        "https://raw.githubusercontent.com/livebloggerofficial/Jobs-Listing-Page/bce3d9fe94e9a3a54d571330f38f92f6c0bb69fc/images/product-manager.svg",
      details:
        "Responsible for managing the entire product life cycle, from ideation to launch and post-launch maintenance.",
      openPositions: "1",
      link: "#",
    },

    {
      title: "Sales Representative",
      image:
        "https://raw.githubusercontent.com/livebloggerofficial/Jobs-Listing-Page/bce3d9fe94e9a3a54d571330f38f92f6c0bb69fc/images/sales-representative.svg",
      details:
        "Responsible for reaching out to potential customers and closing sales deals.",
      openPositions: "4",
      link: "#",
    },

    {
      title: "Marketing Manager",
      image:
        "https://raw.githubusercontent.com/livebloggerofficial/Jobs-Listing-Page/bce3d9fe94e9a3a54d571330f38f92f6c0bb69fc/images/marketing-manager.svg",
      details:
        "Responsible for creating and executing marketing strategies to promote a company or product.",
      openPositions: "1",
      link: "#",
    },
  ];

  return (
    <>
       <div className=" banner-bg  h-[500px]  text-white pb-10">
        <div className="  flex justify-center w-full h-[430px] ">
          <img
            src={banner}
            alt="banner "
            className="  lg:w-10/12 md:w-full  "
          />
        </div>
        <div className=" h-24 w-full flex justify-center items-center ">
          <p className=" font-bold lg:text-4xl sm:text-2xl text-black mb-5">
            Instant commerce indistinguishable from magic
          </p>
        </div>
      </div>
      {/* <p className=" text-4xl  pt-10 text-center font-bold">We are hiring</p>
      <div
        key={jobs.image}
        className="grid gap-8 gap-y-3 p-20 lg:grid-cols-2 md:grid-cols-2"
      >
        {jobs.map((ele) => (
          <CarrierCard
            title={ele.title}
            details={ele.details}
            img={ele.image}
            opp={ele.openPositions}
          />
        ))}
      </div> */}
      <div className=" lg:px-44 md:p-20 sm:10 p-5 pt-10  space-y-16">
        <section className="about">
          <p className="text-3xl font-semibold"> Carrier</p>
          <p className="">
            Our vision to create oppertunity. We use proprietary technology to
            empower Indians - by revoluting convenient , more saving, flowless
            business and a big business culture . All this while making every
            shopping a smotter, unique Experience for Indian. We are always
            looking for best and ambitious club to join and make the e-grocery
            Industry wide . How we create club . Learning and development:- We
            are building a learning organization and offer valuable
            oppertunities for your skilling. Through mentorship knowledge
            sharing forums , and self-placed learning programs. We will support
            you in doing what you love . Come Join with us .
          </p>
        </section>
        <section className="poster ">
          <h1 className=" text-2xl my-10 font-semibold"> What set us apart</h1>
          <div className=" border-2 bg-[#14173c] p-10  rounded-lg">
            <img
              src="https://blinkit.com/careers/sites/default/files/2022-03/career-masthead-desktop.png"
              alt="banner"
              className="  mx-auto rounded-lg"
            />
          </div>
        </section>

        <section className=" blog ">
          <h1 className=" text-2xl my-5 font-semibold">
            {" "}
            Our shared philosophy
          </h1>
          <BlogCard />
        </section>

        <section className="  ">
          <div className=" border-2 bg-[#282b59] p-10  rounded-lg">
            <img
              src="https://blinkit.com/careers/sites/default/files/2022-03/career-masthead-desktop.png"
              alt="banner"
              className=" mx-auto rounded-lg"
            />
          </div>
          <h1 className=" text-xl font-semibold my-5"> What set us apart</h1>
          There is no viable path forward that does not take into account the
          needs of the future generations. The concept of sustainability entails
          that we live and work in the present in a manner that does not
          jeopardise the future
          <p className=" my-4">
            Learn about our sustainability commitment{" "}
            <span className=" font-bold">here</span>
          </p>
        </section>

        <section className=" blog ">
          <h1 className=" text-2xl my-5 font-semibold"> How we nurture you </h1>
          <BlogCard />
        </section>
        <h1 className=" text-2xl my-10 font-semibold"> What set us apart</h1>
      </div>
      <div className="c">
        <UserCarosel />
      </div>
      <div className="lg:px-44 md:p-20 sm:10 p-5 pb-10">
        <section className=" accoedian">
          <h1 className=" text-2xl mb-10 font-semibold">
            Frequently asked questions
          </h1>
          <div className="px-10">
            <CarrierAccordian />
          </div>
        </section>
      </div>
    </>
  );
}

export default Carrier;
