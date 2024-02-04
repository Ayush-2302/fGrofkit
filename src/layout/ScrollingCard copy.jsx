import React, { useState } from "react";
import Card from "./Card";

import Slider from "react-slick";

function ScrollingCardC() {

  const cards = [
    {
      title: "Card 1",
      description: "Description for Card 1",
      imageUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHVzZXJ8ZW58MHx8MHx8fDA%3D", // Replace with your image URL
    },
    {
      title: "Card 2",
      description: "Description for Card 2",
      imageUrl: "https://images.unsplash.com/photo-1546961329-78bef0414d7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHVzZXJ8ZW58MHx8MHx8fDA%3D", // Replace with your image URL
    },
    {
      title: "Card 1",
      description: "Description for Card 1",
      imageUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHVzZXJ8ZW58MHx8MHx8fDA%3D", // Replace with your image URL
    },
    {
      title: "Card 2",
      description: "Description for Card 2",
      imageUrl: "https://images.unsplash.com/photo-1546961329-78bef0414d7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHVzZXJ8ZW58MHx8MHx8fDA%3D", // Replace with your image URL
    },
    {
      title: "Card 1",
      description: "Description for Card 1",
      imageUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHVzZXJ8ZW58MHx8MHx8fDA%3D", // Replace with your image URL
    },
    {
      title: "Card 2",
      description: "Description for Card 2",
      imageUrl: "https://images.unsplash.com/photo-1546961329-78bef0414d7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHVzZXJ8ZW58MHx8MHx8fDA%3D", // Replace with your image URL
    },
    {
      title: "Card 1",
      description: "Description for Card 1",
      imageUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHVzZXJ8ZW58MHx8MHx8fDA%3D", // Replace with your image URL
    },
    {
      title: "Card 2",
      description: "Description for Card 2",
      imageUrl: "https://images.unsplash.com/photo-1546961329-78bef0414d7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHVzZXJ8ZW58MHx8MHx8fDA%3D", // Replace with your image URL
    },
    {
      title: "Card 1",
      description: "Description for Card 1",
      imageUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHVzZXJ8ZW58MHx8MHx8fDA%3D", // Replace with your image URL
    },
    {
      title: "Card 2",
      description: "Description for Card 2",
      imageUrl: "https://images.unsplash.com/photo-1546961329-78bef0414d7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHVzZXJ8ZW58MHx8MHx8fDA%3D", // Replace with your image URL
    },
    {
      title: "Card 1",
      description: "Description for Card 1",
      imageUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHVzZXJ8ZW58MHx8MHx8fDA%3D", // Replace with your image URL
    },
    {
      title: "Card 2",
      description: "Description for Card 2",
      imageUrl: "https://images.unsplash.com/photo-1546961329-78bef0414d7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHVzZXJ8ZW58MHx8MHx8fDA%3D", // Replace with your image URL
    },
    {
      title: "Card 1",
      description: "Description for Card 1",
      imageUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHVzZXJ8ZW58MHx8MHx8fDA%3D", // Replace with your image URL
    },
    {
      title: "Card 2",
      description: "Description for Card 2",
      imageUrl: "https://images.unsplash.com/photo-1546961329-78bef0414d7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHVzZXJ8ZW58MHx8MHx8fDA%3D", // Replace with your image URL
    },
    // Add more cards as needed
  ];

  return (
    <div className=" cust-scrollbar  ease-in-out  overflow-auto flex gap-8">
        {cards.map((ele, index) => (
          <div className="">
            <Card
              title={ele.title}
              description={ele.description}
              imageUrl={ele.imageUrl}
              key={index}
            />
          </div>
        ))}
    </div>
  );
}

export default ScrollingCardC;
