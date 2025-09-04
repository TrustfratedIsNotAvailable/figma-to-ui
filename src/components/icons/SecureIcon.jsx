import React from "react";

const SecureIcon = (props) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props} // allows you to pass className, etc.
  >
    <g clipPath="url(#clip0_1_44184)">
      <path
        d="M20 25C22.7614 25 25 22.7614 25 20C25 17.2386 22.7614 15 20 15C17.2386 15 15 17.2386 15 20C15 22.7614 17.2386 25 20 25Z"
        stroke="#0F4E23"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M31.6667 10H8.33333C6.49238 10 5 11.4924 5 13.3333V26.6667C5 28.5076 6.49238 30 8.33333 30H31.6667C33.5076 30 35 28.5076 35 26.6667V13.3333C35 11.4924 33.5076 10 31.6667 10Z"
        stroke="#0F4E23"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M30 20H30.0167" stroke="#0F4E23" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 20H10.0167" stroke="#0F4E23" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </g>
    <defs>
      <clipPath id="clip0_1_44184">
        <rect width="40" height="40" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default SecureIcon;
