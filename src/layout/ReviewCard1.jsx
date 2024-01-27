// src/components/ReviewCard.js
import React from "react";

const ReviewCard1 = ({ review }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <img
          src={review.userAvatar}
          alt={review.userName}
          className="w-10 h-10 rounded-full mr-4"
        />
        <div>
          <h2 className="text-lg font-bold">{review.userName}</h2>
          <p className="text-gray-500">{review.date}</p>
        </div>
      </div>
      <p className="text-gray-800">{review.comment}</p>
      <div className="mt-4 flex items-center">
        <span className="text-gray-600">{review.rating}/5</span>
        <div className="ml-2 text-yellow-500">
          {[...Array(review.rating)].map((_, index) => (
            <div>hellow</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewCard1;
