import React from "react";
import { plans } from "../data/plans";
import Button from "./Button";
import { Check } from "lucide-react";

const PricingPlans = () => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-center items-stretch gap-6 py-6">
      {plans.map((plan, idx) => (
        <div
          key={idx}
          className={`flex flex-col justify-between rounded-2xl shadow-lg p-6 w-full max-w-sm mx-auto ${
            plan.highlight ? "bg-brand-50 text-white" : "bg-gray-100 text-black"
          }`}
        >
          {/* Title */}
          <h2 className="text-lg font-semibold mb-4">{plan.name}</h2>

          {/* Rate */}
          <div className="mb-4 flex items-end gap-2">
            <p className="text-4xl font-bold">{plan.rate}</p>
            {plan.subtitle && (
              <p className="text-sm opacity-70">{plan.subtitle}</p>
            )}
          </div>

          {/* Button */}
          <Button
            bgColor={
              plan.highlight
                ? "bg-yellow-50 hover:bg-yellow-400"
                : "bg-white border border-gray-300 hover:bg-yellow-400"
            }
            textColor={plan.highlight ? "text-black" : "text-gray-700"}
          >
            Get Started
          </Button>

          {/* Description */}
          <p
            className={`text-sm mt-2 mb-6 ${
              plan.highlight ? "text-white" : "text-gray-150"
            }`}
          >
            {plan.description}
          </p>

          {/* Features */}
          <div
            className={`bg-white rounded-lg p-5 shadow-sm ${
              plan.highlight ? "text-black" : ""
            }`}
          >
            <h3 className="font-medium mb-3 text-base">What's Included?</h3>
            <ul className="space-y-2 text-sm">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-5 h-5 flex items-center justify-center rounded-full bg-yellow-50">
                    <Check className="w-3 h-3 text-brand-50" />
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PricingPlans;
