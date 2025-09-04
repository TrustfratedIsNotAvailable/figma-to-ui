import ServiceSection from "./pages/home/ServiceSection";
import HeroSection from "./pages/home/HeroSection";
import Navbar from "./components/Navbar";
import HowItWorks from "./pages/home/HowItWorks";
import WhyIsDiffSection from "./pages/home/WhyIsDiffSection";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ServiceSection />
      <HowItWorks />
      <WhyIsDiffSection />
    </>
  );
}

export default App;
