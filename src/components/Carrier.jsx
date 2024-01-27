import CarrierCard from "../layout/CarrierCard";

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
            <p className="text-lg  ">A Culinary Journey Like No Other</p>
            <h1 className="text-4xl pt-3 text-black  mb-2">
              Welcome to <span>GROFKIT</span>
            </h1>
            <p className=" uppercase text-lg mb-8 mx-auto pt-5  w-3/4 ">
              "Join us on a journey of endless growth and fulfillment, where
              your aspirations meet boundless opportunities in shaping the
              future together."
            </p>
          </section>
        </div>
      </div>
      <p className=" text-4xl  pt-10 text-center font-bold">We are hiring</p>
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
      </div>
    </>
  );
}

export default Carrier;
