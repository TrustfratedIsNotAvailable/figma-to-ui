import { DollarSign, Plus } from "lucide-react";
import Badge from "../../components/Badge";
import Button from "../../components/Button";
import SalesOverviewCard from "../../components/SalesOverviewCard";
import { Line } from "rc-progress";
import BalanceInfo from "../../components/BalanceInfo";
import UserList from "../../components/UserList";
import OnlineInfo from "../../components/OnlineInfo";
import { BsFillLightningChargeFill, BsStack } from "react-icons/bs";
import { PiTildeBold } from "react-icons/pi";
import { ImLeaf } from "react-icons/im";
import { FaArrowTrendUp } from "react-icons/fa6";

export default function HeroSection({ id }) {
  return (
    <section id={id} className="container mx-auto py-12 px-6 md:px-0">
      {/* Top Badge */}
      <div className="flex justify-center">
        <Badge> Fast, secure, hassle-free </Badge>
      </div>

      {/* Heading */}
      <h1 className="text-center text-5xl font-bold text-gray-900 mt-6 leading-tight">
        Get Paid Faster{" "}
        <span className="inline-flex items-center relative ml-5">
          {/* Second circle (background) */}
          <span className="w-8 h-8 rounded-full bg-brand-50"></span>

          {/* First circle with icon overlapping */}
          <span className="absolute left-0 w-8 h-8 rounded-full bg-yellow-50 flex items-center justify-center -translate-x-1/2">
            <FaArrowTrendUp className="w-6 h-6" />
          </span>
        </span>{" "}
        Instant Cash
        <p>for Businesses!</p>
      </h1>

      {/* Subheading */}
      <p className="text-center text-gray-600 max-w-2xl mx-auto mt-4">
        Stop waiting months for credit card payments. CASA helps business owners
        access cash instantly by converting card transactions into immediate
        funds.
      </p>

      {/* CTA Button */}
      <div className="flex justify-center mt-6">
        <Button>Get Started</Button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="bg-lightgreen-100 rounded-2xl p-6 shadow-sm">
          <h3 className="mb-4 flex items-center gap-3">
            <span className="w-8 h-8 flex-shrink-0 aspect-square flex items-center justify-center rounded-full bg-lightgreen-200">
              <BsStack className="w-5 h-5 text-black" />
            </span>
            <span className="text-xl font-semibold text-gray-900">
              Sales overview from Previous Day
            </span>
          </h3>

          {/* Graph component */}
          <SalesOverviewCard totalSales="12,500" />

          {/* Avg sale badge with circular icon */}
          <div className="mt-3 text-sm bg-green-200 p-3 rounded-lg flex items-center gap-3">
            {/* Circle wrapper for the icon */}
            <div className="w-6 h-6 rounded-full bg-brand-50 flex items-center justify-center">
              <PiTildeBold className="w-4 h-4 text-green-200" />
            </div>
            <span className="text-brand-50">
              Avg. sale: $104.16 / per transaction
            </span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-lightgreen-150 rounded-2xl p-6 shadow-sm">
          <h3 className="mb-12 flex items-center gap-3">
            <span className="w-8 h-8 flex-shrink-0 aspect-square flex items-center justify-center rounded-full bg-lightgreen-200">
              <BsFillLightningChargeFill className="w-5 h-5 text-brand-50" />
            </span>
            <span className="text-xl font-semibold text-gray-900">
              Factoring Possible Amount.
            </span>
          </h3>
          <div className="bg-white p-4 rounded-lg w-max mx-auto">
            <p className="text-gray-150">
              Available amount
              <div className="font-bold text-xl text-gray-900">
                $15,375 <span className="text-sm font-medium">USD</span>
              </div>
            </p>
          </div>

          <div className="mt-8 bg-white p-6 rounded-xl">
            <p className="text-lg font-semibold text-black mb-4 flex items-center gap-2">
              <span className="w-8 h-8 flex-shrink-0 aspect-square flex items-center justify-center rounded-full bg-lightgreen-100 text-black">
                <DollarSign size={18} />
              </span>
              Factored amount vs. remaining balance
            </p>
            <div className="bg-lightgreen-100 p-4 rounded-xl">
              <p className="flex justify-between font-semibold mb-8">
                <span className="text-md text-gray-150">Factored balance:</span>
                <span className="text-xl text-black">$11,531.25</span>
              </p>

              <div className="relative w-full">
                {/* Progress Bar */}
                <Line
                  percent={75}
                  strokeWidth={4}
                  trailWidth={4}
                  strokeColor="#0F4E23"
                  trailColor="#F2F2F2"
                />

                {/* Percentage Label */}
                <span className="absolute -top-6 left-3/4 -translate-x-1/2 text-sm font-semibold text-gray-700">
                  75%
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-yellow-50 rounded-2xl p-6 shadow-sm relative overflow-visible">
          {/* Card Header */}
          <h3 className="mb-4 flex items-center gap-3">
            <span className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full bg-yellow-100">
              <ImLeaf className="w-5 h-5 text-black" />
            </span>
            <span className="text-xl font-semibold text-gray-900">
              Secure & Streamlined Workflow
            </span>
          </h3>

          {/* Desktop Layout */}
          <div className="hidden lg:block">
            <div className="absolute transform -rotate-12 top-28 left-20">
              <UserList />
            </div>
            <BalanceInfo className="absolute transform -rotate-2 top-54 left-40" />
            <div className="absolute top-90 left-6">
              <OnlineInfo rotate={6} />
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden flex flex-col gap-4">
            <UserList />
            <BalanceInfo />
            <OnlineInfo isMobile />
          </div>
        </div>
      </div>
    </section>
  );
}
