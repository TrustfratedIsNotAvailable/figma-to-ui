import React from "react";
import WeeklySalesChart from "./WeeklySalesChart";
import TotalSalesIcon from "./icons/TotalSalesIcon";

const SalesOverviewCard = ({ totalSales }) => {
  return (
    <div className="bg-white rounded-xl p-4 mt-4 shadow-sm">
      <p className="text-gray-600 flex items-center gap-2">
        <span className="w-6 h-6 flex items-center justify-center rounded-full bg-brand-50">
          <TotalSalesIcon className="w-4 h-4 text-white" />
        </span>
        Total sales : <span className="font-bold">${totalSales}</span>
      </p>

      <WeeklySalesChart />
    </div>
  );
};

export default SalesOverviewCard;
