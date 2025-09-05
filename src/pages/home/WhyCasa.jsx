import React from "react";
import SectionHeading from "../../components/SectionHeading";
import SalesOverviewCard from "../../components/SalesOverviewCard";
import ReceiveMoneyCard from "../../components/ReceiveMoneyCard";
import { DollarSign, CreditCard, Server, ShieldCheck } from "lucide-react";
import Button from "../../components/Button";
import { SiVisa } from "react-icons/si";

const WhyCasa = ({id}) => {
  return (
    <section id={id} className="container mx-auto py-12 px-6 md:px-0">
      <SectionHeading
        badgeText="Why casa different"
        title="Why CASA Stands Out from the Rest"
        description="Empowering businesses with faster cash access, CASA provides a secure, fast, and flexible solution to get early payments for credit card sales."
      />

      {/* Content Grid */}
      <div className="flex flex-col-reverse lg:flex-row gap-6 mx-auto">
        <div className="lg:w-1/2 relative mx-auto">
          <div className="bg-green-50 rounded-2xl p-6 shadow-lg lg:pr-36 max-w-max">
            <ReceiveMoneyCard />
            <SalesOverviewCard totalSales="12,500" />
          </div>

          <div className="mt-4 lg:mt-0 lg:absolute lg:top-8 lg:-right-16 w-64 bg-white shadow-xl border border-gray-100 rounded-2xl p-6 z-10 mx-auto">
            <p className="font-semibold mb-3">Top User</p>

            <div className="flex -space-x-2 mb-4">
              {[
                "https://randomuser.me/api/portraits/men/32.jpg",
                "https://randomuser.me/api/portraits/women/65.jpg",
                "https://randomuser.me/api/portraits/men/45.jpg",
                "https://randomuser.me/api/portraits/women/45.jpg",
                "https://randomuser.me/api/portraits/men/40.jpg",
              ].map((src, i) => (
                <img
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-white"
                  src={src}
                  alt={`User ${i + 1}`}
                />
              ))}
            </div>

            <div className="flex justify-between items-center gap-6 p-6 bg-gray-100 rounded-lg mb-4">
              <div>
                <p className="text-gray-700 mb-1">Enter Amount:</p>
                <p className="font-bold">$50,000</p>
                <p className="text-gray-500 text-sm">Discount rate: 10%</p>
              </div>
              <SiVisa className="text-blue-600 w-8 h-8" />
            </div>

            <Button
              bgColor="bg-lightgreen-200"
              textColor="black"
              className="w-full"
            >
              See Detail
            </Button>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="lg:w-1/2 lg:pl-16 flex flex-col justify-center bg-white">
          <h3 className="text-2xl font-semibold mb-4">
            CASA offers instant, flexible funding from card transactions.
          </h3>
          <p className="text-gray-600 mb-6">
            CASA stands out by offering fast, flexible, and transparent funding
            for business owners who need immediate cash flow from credit card
            transactions. Here’s what makes us unique:
          </p>

          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <span className="w-7 h-7 flex items-center justify-center rounded-full bg-green-100 text-green-700">
                <DollarSign className="w-4 h-4" />
              </span>
              <span>Instant Cash, No Waiting</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-7 h-7 flex items-center justify-center rounded-full bg-green-100 text-green-700">
                <CreditCard className="w-4 h-4" />
              </span>
              <span>No Hidden Fees, No Surprises</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-7 h-7 flex items-center justify-center rounded-full bg-green-100 text-green-700">
                <Server className="w-4 h-4" />
              </span>
              <span>Seamless POS & Payment Processor</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-7 h-7 flex items-center justify-center rounded-full bg-green-100 text-green-700">
                <ShieldCheck className="w-4 h-4" />
              </span>
              <span>Secure & Compliant Transactions</span>
            </li>
          </ul>

          <Button className="max-w-max mt-4">Become a Member</Button>
        </div>
      </div>
    </section>
  );
};

export default WhyCasa;
