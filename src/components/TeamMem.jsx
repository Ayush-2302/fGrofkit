// App.js
import React from "react";
import MemberCard from "../layout/TeamMember";
// import Aditya from '../assert/memberOfGrokit/ceo.png'

function TeamMem() {
  const member = [
    {
      name: "Aditya Kumar Mishra",
      role: "Founder MD &CEO ",
      imageSrc: "image/memberOfGrokit/ceo.png",
    },
    {
      name: "Angle",
      role: "Co-Founder",
      imageSrc:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "John Doe",
      role: "CEO",
      imageSrc:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  return (
    <div className="grid lg:grid-cols-3 gap-8 md:grid-cols-2 sm:grid-col-1 p-5 ">
      {member.map((ele) => (
        <MemberCard {...ele} />
      ))}
    </div>
  );
}

export default TeamMem;
