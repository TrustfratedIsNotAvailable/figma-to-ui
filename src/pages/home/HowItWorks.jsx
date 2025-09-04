import React from "react";
import PaymentSteps from "../../components/PaymentSteps";
import SectionHeading from "../../components/SectionHeading";

const HowItWorks = () => {
  return (
    <div className="p-6 lg:p-12 bg-grey-50">
      <SectionHeading
        badgeText="How it works"
        title="Simple & Fast Receive Your Payment in 3 Steps!"
        description="Empowering businesses with faster cash access, CASA provides a secure, fast, and flexible solution to get early payments for credit card sales."
      />
      <PaymentSteps />
    </div>
  );
};

export default HowItWorks;
