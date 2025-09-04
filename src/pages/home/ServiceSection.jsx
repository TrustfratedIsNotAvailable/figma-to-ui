import Badge from "../../components/Badge";
import Button from "../../components/Button";
import InfoCard from "../../components/InfoCard";
import { cardsData } from "../../data/cardsData";

const ServiceSection = () => {
  return (
    <section className="w-full bg-white py-16 px-6">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div>
          <Badge> About Casa Service</Badge>
          <h2 className="mt-4 text-4xl font-bold text-gray-900 leading-tight">
            Revolutionizing Cash Flow <br /> for Business Owners!
          </h2>
        </div>
        <div>
          <p className="font-manrope text-grey-100 text-xl mb-4">
            Empowering businesses with faster cash access, CASA provides a
            secure, fast, and flexible solution to get early payments for credit
            card sales.
          </p>
          <Button>Join Now</Button>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-6xl mx-auto">
        {cardsData.map((card, idx) => (
          <InfoCard key={idx} {...card} />
        ))}
      </div>
    </section>
  );
};
export default ServiceSection;
