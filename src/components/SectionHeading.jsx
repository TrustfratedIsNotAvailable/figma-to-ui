import React from "react";
import Badge from "./Badge";

const SectionHeading = ({ badgeText, title, description, className = "" ,textClass="" }) => {
  return (
    <div className={`text-center max-w-md mx-auto mb-12 ${className}`}>
      {badgeText && <Badge>{badgeText}</Badge>}
      {title && (
        <h2 className={`text-4xl font-bold mt-4 ${textClass}`}>{title}</h2>
      )}
      {description && (
        <p className={`text-gray-500 mt-4 ${textClass}`}>{description}</p>
      )}
    </div>
  );
};

export default SectionHeading;
