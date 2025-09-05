import React from "react";
import SectionHeading from "../../components/SectionHeading";
import ContactForm from "../../components/ContactForm";
import Button from "../../components/Button";
import { PhoneCall, Users } from "lucide-react";
import BalanceInfo from "../../components/BalanceInfo";
import { Line } from "rc-progress";

const ContactSection = ({ id }) => {
  return (
    <section id={id} className="py-12 bg-gray-50 mb-12">
      <div className="container mx-auto">
        {/* Section Heading */}
        <SectionHeading
          badgeText="Contact"
          title="We’re Here to Help – Get in Touch with CASA"
          description="Trusted by Thousands of Business Owners See what our satisfied customers have to say about CASA."
        />

        <div className="mt-12 container mx-auto px-4 flex flex-col md:flex-row justify-between gap-4">
          {/* Left: Contact Form */}
          <ContactForm />

          {/* Right: Cards */}
          <div className="flex flex-col gap-6 items-center md:items-start">
            {/* Large Device Layout with overlapping */}
            <div className="hidden lg:block bg-yellow-50 p-8 rounded-2xl flex flex-col items-end relative">
              {/* Total Users Card */}
              <div className="bg-white rounded-2xl p-6 w-72 shadow-lg mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-green-100 w-8 h-8 flex items-center justify-center rounded-full">
                    <Users className="w-5 h-5 text-green-700" />
                  </div>
                  <h4 className="font-medium text-gray-800">Total Users</h4>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm text-black font-bold flex-shrink-0 aspect-square bg-gray-100 rounded-full p-2">
                    25k+ <br />
                    <span className="text-gray-150">Users</span>
                  </p>
                  <div className="flex -space-x-2 mt-3 mb-4">
                    {[1, 2, 3].map((i) => (
                      <img
                        key={i}
                        src={`https://i.pravatar.cc/40?img=${i}`}
                        alt="user"
                        className="w-8 h-8 rounded-full border"
                      />
                    ))}
                  </div>
                </div>

                <div className="bg-lightgreen-150 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-5">Monthly user</p>

                  {/* Line Progress Bar */}
                  <div className="relative w-full mt-2">
                    <Line
                      percent={50}
                      strokeWidth={4}
                      trailWidth={4}
                      strokeColor="#0F4E23"
                      trailColor="#F2F2F2"
                    />

                    {/* Percentage Label */}
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-sm font-semibold text-gray-700">
                      50%
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative flex justify-end">
                {/* Call for Consultation Card */}
                <div className="absolute right-48 bg-lightgreen-50 rounded-2xl shadow-lg p-6 w-60 text-center">
                  <div className="bg-brand-50 w-16 h-16 mx-auto flex items-center justify-center rounded-full mb-4">
                    <PhoneCall className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">
                    Call for consultation
                  </h4>
                  <p className="text-xl font-bold text-gray-150 mb-4">or</p>
                  <Button bgColor="bg-yellow-50" textColor="text-black">
                    Let’s connect
                  </Button>
                </div>

                {/* Balance Info */}
                <BalanceInfo className="w-44 -rotate-6 h-32" />
              </div>
            </div>

            {/* Medium + Small Devices Layout without overlapping */}
            <div className="lg:hidden bg-yellow-50 p-6 rounded-2xl flex flex-col items-center gap-6">
              {/* Total Users Card */}
              <div className="bg-white rounded-2xl p-6 w-72 shadow-lg mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-green-100 w-8 h-8 flex items-center justify-center rounded-full">
                    <Users className="w-5 h-5 text-green-700" />
                  </div>
                  <h4 className="font-medium text-gray-800">Total Users</h4>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm text-black font-bold flex-shrink-0 aspect-square bg-gray-100 rounded-full p-2">
                    25k+ <br />
                    <span className="text-gray-150">Users</span>
                  </p>
                  <div className="flex -space-x-2 mt-3 mb-4">
                    {[1, 2, 3].map((i) => (
                      <img
                        key={i}
                        src={`https://i.pravatar.cc/40?img=${i}`}
                        alt="user"
                        className="w-8 h-8 rounded-full border"
                      />
                    ))}
                  </div>
                </div>

                <div className="bg-lightgreen-150 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-5">Monthly user</p>

                  {/* Line Progress Bar */}
                  <div className="relative w-full mt-2">
                    <Line
                      percent={50}
                      strokeWidth={4}
                      trailWidth={4}
                      strokeColor="#0F4E23"
                      trailColor="#F2F2F2"
                    />

                    {/* Percentage Label */}
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-sm font-semibold text-gray-700">
                      50%
                    </span>
                  </div>
                </div>
              </div>

              {/* Call for Consultation Card */}
              <div className="bg-lightgreen-50 rounded-2xl shadow-lg p-6 w-full text-center">
                <div className="bg-brand-50 w-16 h-16 mx-auto flex items-center justify-center rounded-full mb-4">
                  <PhoneCall className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-2">
                  Call for consultation
                </h4>
                <p className="text-xl font-bold text-gray-150 mb-4">or</p>
                <Button bgColor="bg-yellow-50" textColor="text-black">
                  Let’s connect
                </Button>
              </div>

              {/* Balance Info */}
              <BalanceInfo className="w-full h-32" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
