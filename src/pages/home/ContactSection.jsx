import React from "react";
import SectionHeading from "../../components/SectionHeading";
import ContactForm from "../../components/ContactForm";
import Button from "../../components/Button";
import { PhoneCall } from "lucide-react";
import BalanceInfo from "../../components/BalanceInfo";

const ContactSection = () => {
  return (
    <section className="py-12 bg-gray-50 mb-12">
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
                <h4 className="font-medium text-gray-800 mb-2">Total user</h4>
                <p className="text-sm text-gray-600">25k+ Users</p>
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
                <p className="text-sm text-gray-600 mb-1">Monthly user</p>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-green-500 h-3 rounded-full w-1/2"></div>
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
              <div className="bg-white rounded-2xl p-6 w-full shadow-lg">
                <h4 className="font-medium text-gray-800 mb-2">Total user</h4>
                <p className="text-sm text-gray-600">25k+ Users</p>
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
                <p className="text-sm text-gray-600 mb-1">Monthly user</p>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-green-500 h-3 rounded-full w-1/2"></div>
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
