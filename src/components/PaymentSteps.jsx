import React from "react";
import Badge from "./Badge";
import { Check, ChevronRight } from "lucide-react";
import UserList from "./UserList";
import ReceiveMoneyCard from "./ReceiveMoneyCard";

const PaymentSteps = () => {
  const steps = [
    {
      top: (
        <div className="bg-lightgreen-150 p-6 rounded-xl text-center max-w-sm mx-auto">
          <h4 className="font-semibold text-gray-800 mb-4">Sign Up</h4>

          <form className="space-y-3">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 rounded-lg bg-white"
            />
            <input
              type="text"
              placeholder="Company Name"
              className="w-full px-4 py-2 rounded-lg bg-white"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 rounded-lg bg-white"
            />
          </form>
        </div>
      ),
      title: "Connect Your Business",
      description:
        "Sign up and link your credit card processor or POS system with CASA. We support all major payment providers.",
      highlights: [
        "Fast approval & easy integration",
        "No impact on your credit score",
      ],
    },
    {
      top: (
        <div className="bg-yellow-50 p-4 rounded-xl">
          <div className="bg-white rounded-lg p-3 flex flex-col lg:flex-row items-center justify-between shadow-md mb-2">
            {/* Image + Name/Email */}
            <div className="flex items-center gap-3">
              <img
                src="https://i.pravatar.cc/48?img=12"
                alt="Maria Kosta"
                className="w-12 h-12 rounded-full"
              />
              <div className="flex flex-col">
                <p className="font-semibold text-black">Maria Kosta</p>
                <p className="text-sm text-gray-150">maria@mail.com</p>
              </div>
            </div>

            {/* Amount */}
            <p className="font-semibold text-brand-50">+$10K</p>
          </div>

          <div className="bg-white rounded-lg p-3 shadow-md flex flex-col gap-3">
            {/* Top content: Two sections */}
            <div className="flex items-center justify-between">
              {/* Total Balance */}
              <div className="flex flex-col items-center">
                <p className="text-sm text-gray-150">Total Balance</p>
                <p className="text-lg font-bold text-black">$12000.00</p>
              </div>

              {/* Discount */}
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 flex items-center justify-center bg-yellow-50 rounded-full mb-1">
                  <span className="text-sm font-semibold text-black">10%</span>
                </div>
                <p className="text-xs text-gray-600">Discount Rate</p>
              </div>
            </div>

            <button className="w-full bg-lightgreen-150 text-black text-sm font-semibold py-2 px-4 rounded-lg transition flex items-center justify-between">
              <span>See Detail</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      ),
      title: "Transactions for Early Payment",
      description:
        "Every morning, your previous day’s credit card transactions are automatically submitted for funding.",
      highlights: [
        "No waiting for 30-60 day settlements",
        "Transparent discount rates",
      ],
    },
    {
      top: (
        <div className="bg-lightgreen-150 px-2.5 py-6 rounded-xl text-center">
          <ReceiveMoneyCard />
          <UserList />
        </div>
      ),
      title: "Receive Funds & Grow",
      description:
        "Every morning, your previous day’s credit card transactions are automatically submitted for funding.",
      highlights: [
        "Same-day or next-day payouts",
        "Flexible repayment from future sales",
      ],
    },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-8">
      {steps.map((step, index) => (
        <div
          key={index}
          className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition flex flex-col"
        >
          {/* Top section */}
          <div className="p-6">{step.top}</div>

          {/* Bottom section */}
          <div className="p-6 pt-0">
            <h3 className="text-lg font-bold mb-2 text-black">{step.title}</h3>
            <p className="text-gray-150 mb-4 text-sm">{step.description}</p>
            <ul className="space-y-2 text-sm">
              {step.highlights.map((point, i) => (
                <li
                  key={i}
                  className="flex items-center font-semibold text-gray-150"
                >
                  <span className="flex items-center justify-center w-5 h-5 mr-2 rounded-full bg-lightgreen-100 text-brand-50">
                    <Check size={14} strokeWidth={2} />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PaymentSteps;
