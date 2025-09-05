import React from "react";
import SectionHeading from "../../components/SectionHeading";
import PricingPlans from "../../components/PricingPlans";

const PricingSection = ({id}) => {
  return (
    <section id={id} className="container mx-auto py-12 px-6 md:px-0">
      <SectionHeading
        badgeText="Pricing"
        title="Simple, Transparent Pricing  No Hidden Fees!"
        description="Trusted by Thousands of Business Owners See what our satisfied customers have to say about CASA."
      />
      <PricingPlans/>
    </section>
  );
};

export default PricingSection;
