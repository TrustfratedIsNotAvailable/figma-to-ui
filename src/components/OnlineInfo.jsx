import React from "react";
import Badge from "./Badge";

const OnlineInfo = ({
  name = "Tony Restaurant",
  amount = "+$10K",
  imgSrc = "https://i.pravatar.cc/48?img=12",
  badgeText = "Confirm",
  rotate = 0,
  isMobile = false,
}) => (
  <div
    className={`p-4 rounded-2xl bg-white shadow-md flex ${
      isMobile ? "md:flex-col gap-4" : "items-center gap-4"
    } transform`}
    style={{ rotate: `${rotate}deg` }}
  >
    <div className="flex-shrink-0 flex gap-1 items-center">
      <img
        src={imgSrc}
        alt={name}
        className="w-12 h-12 rounded-full border-2 border-gray-200"
      />
      <div className="flex flex-col justify-center flex-1">
        <p className="text-xl font-bold text-black">Online</p>
        <p className="text-base font-medium text-gray-400">{name}</p>
      </div>
    </div>

    <div
      className={`flex flex-col ${
        isMobile ? "md:flex-row" : "justify-between"
      } items-center gap-1`}
    >
      <span className="text-xl font-bold text-black">{amount}</span>
      <Badge>{badgeText}</Badge>
    </div>
  </div>
);

export default OnlineInfo;
