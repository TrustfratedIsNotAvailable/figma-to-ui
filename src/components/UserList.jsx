import React from "react";

const UserList = ({ users = [1, 2, 3, 4, 5], extraCount = "9+" }) => (
  <div className="p-3 gap-3 rounded-2xl bg-white shadow-md">
    <div className="flex justify-between items-center">
      <span className="text-lg font-bold text-black">Recent User</span>
      <span className="text-xs font-semibold text-gray-400 cursor-pointer">
        View All
      </span>
    </div>
    <div className="flex mt-3 -space-x-2 items-center">
      {users.map((i) => (
        <img
          key={i}
          src={`https://i.pravatar.cc/40?img=${i}`}
          alt="user"
          className="w-8 h-8 rounded-full border-2 border-white"
        />
      ))}
      <span className="w-8 h-8 flex items-center justify-center rounded-full bg-green-100 text-xs font-medium text-green-900 border-2 border-white cursor-pointer">
        {extraCount}
      </span>
    </div>
  </div>
);

export default UserList;
