import React from "react";

const Badge = ({children}) => {
  return (
    <span className="bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm font-medium">
      {children}
    </span>
  );
};

export default Badge;
