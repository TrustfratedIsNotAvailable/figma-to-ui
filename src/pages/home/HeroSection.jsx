import { DollarSign, Plus } from "lucide-react";
import Badge from "../../components/Badge";
import Button from "../../components/Button";
import ArrowStarIcon from "../../components/icons/ArrowStarIcon";
import AvgSaleIcon from "../../components/icons/AvgSaleIcon";
import LeafIcon from "../../components/icons/LeafIcon";
import ProfitIcon from "../../components/icons/ProfitIcon";
import StackedLayersIcon from "../../components/icons/StackedLayersIcon";
import SalesOverviewCard from "../../components/SalesOverviewCard";
import { Line } from "rc-progress";

export default function HeroSection() {
  return (
    <section className="w-full bg-white py-16 px-6">
      {/* Top Badge */}
      <div className="flex justify-center">
        <Badge> Fast, secure, hassle-free </Badge>
      </div>

      {/* Heading */}
      <h1 className="text-center text-4xl font-bold text-gray-900 mt-6 leading-tight">
        Get Paid Faster{" "}
        <span className="inline-flex items-center relative ml-5">
          {/* Second circle (background) */}
          <span className="w-8 h-8 rounded-full bg-brand-50"></span>

          {/* First circle with icon overlapping */}
          <span className="absolute left-0 w-8 h-8 rounded-full bg-yellow-50 flex items-center justify-center -translate-x-1/2">
            <ProfitIcon className="w-6 h-6" />
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
              <StackedLayersIcon className="w-6 h-6 text-black" />
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
              <AvgSaleIcon className="w-4 h-4 text-green-200" />
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
              <ArrowStarIcon className="text-brand-50" />
            </span>
            <span className="text-xl font-semibold text-gray-900">
              Factoring Possible Amount.
            </span>
          </h3>
          <div className="bg-white p-4 rounded-lg w-max mx-auto">
            <p className="text-grey-100">
              Available amount{" "}
              <p className="font-bold text-xl text-gray-900">
                $15,375 <span className="text-sm font-medium">USD</span>
              </p>
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
                <span className="text-md text-grey-100">Factored balance:</span>
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
              <LeafIcon className="text-black" />
            </span>
            <span className="text-xl font-semibold text-gray-900">
              Secure & Streamlined Workflow
            </span>
          </h3>

          {/* === Desktop Layout === */}
          <div className="hidden sm:block">
            {/* User List */}
            <div className="absolute transform -rotate-12 top-28 left-20 p-3 gap-4 rounded-2xl bg-white shadow-md">
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-black">
                  Recent User
                </span>
                <span className="text-xs font-semibold text-gray-400 cursor-pointer">
                  View All
                </span>
              </div>
              <div className="flex mt-3 -space-x-2 items-center">
                {[1, 2, 3, 4, 5].map((i) => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/40?img=${i}`}
                    alt="user"
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                ))}
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-green-100 text-xs font-medium text-green-900 border-2 border-white cursor-pointer">
                  9+
                </span>
              </div>
            </div>

            {/* Balance Info */}
            <div className="absolute transform -rotate-2 top-54 left-40 p-4 gap-2 rounded-2xl bg-white shadow-md w-48">
              <p className="text-lg text-gray-500">Total Balance</p>
              <p className="text-2xl font-bold text-gray-900">23,576.00</p>
              <button className="mt-2 flex items-center gap-1 text-lg text-gray-400 cursor-pointer">
                <span className="w-5 h-5 flex items-center justify-center rounded-full bg-green-100">
                  <Plus className="w-4 h-4 text-black" />
                </span>
                Add Number
              </button>
            </div>

            {/* Online Info */}
            <div className="absolute transform rotate-6 top-90 left-6 p-4 rounded-2xl bg-white shadow-md flex items-center gap-4">
              <img
                src="https://i.pravatar.cc/48?img=12"
                alt="restaurant"
                className="w-12 h-12 rounded-full border-2 border-gray-200 flex-shrink-0"
              />
              <div className="flex flex-col flex-1">
                <div className="flex justify-between items-center text-xl font-bold text-black">
                  <p>Online</p>
                  <span>+$10K</span>
                </div>
                <div className="flex justify-between items-center mt-1">
                  <p className="text-base font-medium text-gray-400 mr-2">
                    Tony Restaurant
                  </p>
                  <Badge>Confirm</Badge>
                </div>
              </div>
            </div>
          </div>

          {/* === Mobile Layout === */}
          <div className="sm:hidden flex flex-col gap-4">
            {/* User List */}
            <div className="p-3 gap-3 rounded-2xl bg-white shadow-md">
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-black">
                  Recent User
                </span>
                <span className="text-xs font-semibold text-gray-400 cursor-pointer">
                  View All
                </span>
              </div>
              <div className="flex mt-3 -space-x-2 items-center">
                {[1, 2, 3, 4, 5].map((i) => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/40?img=${i}`}
                    alt="user"
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                ))}
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-green-100 text-xs font-medium text-green-900 border-2 border-white cursor-pointer">
                  9+
                </span>
              </div>
            </div>

            {/* Balance Info */}
            <div className="p-4 gap-2 rounded-2xl bg-white shadow-md">
              <p className="text-lg text-gray-500">Total Balance</p>
              <p className="text-2xl font-bold text-gray-900">23,576.00</p>
              <button className="mt-2 flex items-center gap-1 text-lg text-gray-400 cursor-pointer">
                <span className="w-5 h-5 flex items-center justify-center rounded-full bg-green-100">
                  <Plus className="w-4 h-4 text-black" />
                </span>
                Add Number
              </button>
            </div>

            {/* Online Info */}
            <div className="p-4 rounded-2xl bg-white shadow-md flex items-center gap-4">
              <img
                src="https://i.pravatar.cc/48?img=12"
                alt="restaurant"
                className="w-12 h-12 rounded-full border-2 border-gray-200 flex-shrink-0"
              />
              <div className="flex flex-col flex-1">
                <div className="flex justify-between items-center text-xl font-bold text-black">
                  <p>Online</p>
                  <span>+$10K</span>
                </div>
                <div className="flex justify-between items-center mt-1">
                  <p className="text-base font-medium text-gray-400 mr-2">
                    Tony Restaurant
                  </p>
                  <Badge>Confirm</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
