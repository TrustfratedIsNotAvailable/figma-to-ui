import React from "react";
import PaymentSteps from "../../components/PaymentSteps";
import SectionHeading from "../../components/SectionHeading";

const HowItWorks = ({id}) => {
  return (
    <div id={id} className="py-12 bg-grey-50">
      <div className="container mx-auto px-6 md:px-0">
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
