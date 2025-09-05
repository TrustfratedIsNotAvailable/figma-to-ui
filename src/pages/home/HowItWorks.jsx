import React from "react";
import PaymentSteps from "../../components/PaymentSteps";
import SectionHeading from "../../components/SectionHeading";

const HowItWorks = () => {
  return (
    <div className="py-12 bg-grey-50">
      <div className="container mx-auto">
        <SectionHeading
          badgeText="How it works"
          title="Simple & Fast Receive Your Payment in 3 Steps!"
          description="Empowering businesses with faster cash access, CASA provides a secure, fast, and flexible solution to get early payments for credit card sales."
        />
        <PaymentSteps />
      </div>
    </div>
  );
};

export default HowItWorks;
