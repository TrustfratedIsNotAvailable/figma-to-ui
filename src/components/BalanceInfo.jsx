import { Plus } from 'lucide-react';
import React from 'react';

const BalanceInfo = ({className}) => {
    return (
            <div className={`p-4 gap-2 rounded-2xl bg-white shadow-md ${className}`}>
              <p className="text-lg text-gray-500">Total Balance</p>
              <p className="text-2xl font-bold text-gray-900">23,576.00</p>
              <button className="mt-2 flex items-center gap-1 text-lg text-gray-400 cursor-pointer">
                <span className="w-5 h-5 flex items-center justify-center rounded-full bg-green-100">
                  <Plus className="w-4 h-4 text-black" />
                </span>
                Add Number
              </button>
            </div>
    );
};

export default BalanceInfo;