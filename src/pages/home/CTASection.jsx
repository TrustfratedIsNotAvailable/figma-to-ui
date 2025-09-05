import React from "react";
import SectionHeading from "../../components/SectionHeading";
import Button from "../../components/Button";

const CTASection = () => {
  return (
    <div className="container mx-auto px-6 md:px-0">
      <div className="p-6 md:p-10 bg-brand-50 rounded-2xl text-center">
        <SectionHeading
          title=" Unlock Instant Cash Flow for Your Business!"
          description="Running a business shouldn’t mean waiting weeks for credit card payments to clear. With CASA, you can convert your daily transactions into instant cash,"
          textClass="text-white"
        />
        <Button bgColor="bg-yellow-50" textColor="text-black">
          Let's get started
        </Button>
      </div>
    </div>
  );
};

export default CTASection;
