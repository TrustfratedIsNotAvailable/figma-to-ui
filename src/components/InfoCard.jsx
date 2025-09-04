// src/components/InfoCard.jsx
import React from "react";

const InfoCard = ({
  title,
  description,
  bgColor = "bg-grey-50",
  titleColor = "text-black",
  descriptionColor = "text-grey-100",
  Icon,
}) => {
  return (
    <div className={`${bgColor} rounded-2xl shadow-sm p-8`}>
      <h3 className={`font-roboto font-bold text-2xl mb-4 ${titleColor}`}>{title}</h3>
      {/* {Icon && <Icon className="w-10 h-10" />} */}
      {Icon && (
        <div className="w-10 h-10 rounded-full bg-lightgreen-100 flex items-center justify-center mb-4">
          <Icon className="w-8 h-8" />
        </div>
      )}
      <p className={`${descriptionColor} text-lg leading-relaxed`}>
        {description}
      </p>
    </div>
  );
};

export default InfoCard;
