import React from "react";
import Navbar from "./components/Navbar";
import ServiceSection from "./pages/home/ServiceSection";
import HeroSection from "./pages/home/HeroSection";
import HowItWorks from "./pages/home/HowItWorks";
import WhyIsDiffSection from "./pages/home/WhyIsDiffSection";
import ReviewsSection from "./pages/home/ReviewsSection";
import PricingSection from "./pages/home/PricingSection";
import ContactSection from "./pages/home/ContactSection";
import CTASection from "./pages/home/CTASection";
import Footer from "./pages/home/Footer";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ServiceSection />
      <HowItWorks />
      <WhyIsDiffSection />
      <ReviewsSection />
      <PricingSection />
      <ContactSection />
      <CTASection />
      <Footer />
    </>
  );
}

export default App;
