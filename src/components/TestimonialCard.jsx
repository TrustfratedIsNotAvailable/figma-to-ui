import React from "react";
import { Star } from "lucide-react";

const TestimonialCard = ({ logo: Logo, stars, title, description, author, role, avatar }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 flex flex-col">
      {/* Stars + Logo in one row */}
      <div className="flex items-center justify-between mb-4">
        {/* Stars */}
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={18}
              className={`${
                i < stars ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Logo */}
        <div>
          <Logo className="h-6" />
        </div>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold mb-3">"{title}"</h3>

      {/* Description */}
      <p className="text-gray-600 text-sm flex-1">{description}</p>

      {/* Author */}
      <div className="flex items-center mt-6">
        {avatar && (
          <img
            src={avatar}
            alt={author}
            className="w-10 h-10 rounded-full mr-3 object-cover"
          />
        )}
        <div>
          <p className="font-medium text-gray-800 text-sm">{author}</p>
          <p className="text-gray-500 text-xs">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
