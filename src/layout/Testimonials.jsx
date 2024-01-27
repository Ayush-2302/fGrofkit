import React from "react";

function Testimonials() {
  const member = [
    {
      img: "https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg",
      name: "Maria Smantha",
      role: " Web Developer",
      desc: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur",
    },
    {
      img: "https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).jpg",
      name: "Lisa Cudrow",
      role: "Graphic Designer",
      desc: " Ut enim ad minima veniam, quis nostrum exercitationem ull amcorporis suscipit laboriosam, nisi ut aliquid commodi.",
    },
    {
      img: "https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(9).jpg",
      name: "Adam Lisa",
      role: "Content Writter",
      desc: " Ut enim ad minima veniam, quis nostrum exercitationem ull amcorporis suscipit laboriosam, nisi ut aliquid commodi.",
    },
  ];

  return (
    <>
    

      <div className="grid gap-6 text-center md:grid-cols-3 lg:gap-12">
        {member.map((ele) => (
          <div className="mb-0">
            <div className="mb-6 flex justify-center">
              <img
                src={ele.img}
                className="w-32 rounded-full shadow-lg dark:shadow-black/30"
                alt="Member of Team"
              />
            </div>
            <div className="mb-12 md:mb-0">
              <h5 className="mb-4 text-xl font-semibold">{ele.name}</h5>
              <h6 className="mb-4 font-semibold text-primary dark:text-primary-400">
                {ele.role}
              </h6>
              <p className="">{ele.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Testimonials;
