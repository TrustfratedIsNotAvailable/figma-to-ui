import React from "react";
import Badge from "./Badge";

const SectionHeading = ({ badgeText, title, description, className = "" }) => {
  return (
    <div className={`text-center max-w-2xl mx-auto mb-12 ${className}`}>
      {badgeText && <Badge>{badgeText}</Badge>}
      {title && (
        <h2 className="text-3xl md:text-4xl font-bold mt-4">{title}</h2>
      )}
      {description && (
        <p className="text-gray-500 mt-4">{description}</p>
      )}
    </div>
  );
};

export default SectionHeading;
