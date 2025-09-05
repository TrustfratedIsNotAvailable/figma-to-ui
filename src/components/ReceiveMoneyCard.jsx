import React from "react";
import { ImLeaf } from "react-icons/im";

const ReceiveMoneyCard = () => {
  return (
    <div className="bg-white p-3 rounded-2xl mb-4 flex gap-1 items-center shadow-sm max-w-max">
      {/* Icon */}
      <span className="w-7 h-7 flex items-center justify-center rounded-full bg-lightgreen-50">
        <ImLeaf className="w-4 h-4 text-black" />
      </span>

      {/* Text Content */}
      <div>
        <h4 className="font-semibold text-gray-800">Receive Money from card</h4>
        <p className="text-sm text-gray-500">Cash deposited within 24 hours</p>
      </div>
    </div>
  );
};

export default ReceiveMoneyCard;
