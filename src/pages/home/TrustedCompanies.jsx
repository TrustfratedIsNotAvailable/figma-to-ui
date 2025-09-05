import React from "react";
import Marquee from "react-fast-marquee";
import { BsStack } from "react-icons/bs";
import { FaFingerprint } from "react-icons/fa";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { TbArrowRampRight2, TbLayoutCardsFilled } from "react-icons/tb";

const companies = [
  {
    name: "Cubyn",
    icon: <MdOutlineDoubleArrow className="w-6 h-6 text-yellow-50" />,
  },
  { name: "Bastion", icon: <BsStack className="w-6 h-6 text-yellow-50" /> },
  {
    name: "DIGITS",
    icon: <FaFingerprint className="w-6 h-6 text-yellow-50" />,
  },
  {
    name: "Pipe",
    icon: <TbLayoutCardsFilled className="w-6 h-6 text-yellow-50" />,
  },
  {
    name: "Ramp",
    icon: <TbArrowRampRight2 className="w-6 h-6 text-yellow-50" />,
  },
];

const CompanyMarquee = () => {
  return (
    <div className="bg-green-800">
      <div className="container mx-auto px-6 md:px-0 text-white py-4 flex items-center gap-6">
        {/* Left fixed text */}
        <span className="font-bold whitespace-nowrap">
          Trusted by <br />
          Top Companies:
        </span>

        {/* Marquee for company icons */}
        <Marquee gradient={false} speed={50}>
          <div className="flex items-center gap-12">
            {companies.map((company, i) => (
              <div key={i} className="flex items-center gap-2 ml-2">
                {company.icon}
                <span className="font-semibold">{company.name}</span>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default CompanyMarquee;
