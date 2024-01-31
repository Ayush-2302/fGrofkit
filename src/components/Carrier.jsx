import BlogCard from "../layout/BlogCard";
import CarrierAccordian from "../layout/CarrierAccordian";
import CarrierCard from "../layout/CarrierCard";
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
      <div className="bg-yellow-400 h-[460px]  font-bold flex justify-center items-center text-white py-20">
        <div className=" container">
          <section id="chef" className=" text-center  p-10  ">
            <div className=" banner flex justify-center w-full h-[330px] ">
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
      <div className=" lg:p-44 md:p-20 sm:10 p-5 pt-10 pb-0 space-y-16">
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
        <section className="banner ">
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

        <section className="banner ">
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

        <section className="banner ">
          <h1 className=" text-2xl my-10 font-semibold"> What set us apart</h1>
          <div className="cla  flex justify-center">
            <UserCarosel />
          </div>
        </section>
        <section className=" accoedian">
          <h1 className=" text-2xl my-10 font-semibold">
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
