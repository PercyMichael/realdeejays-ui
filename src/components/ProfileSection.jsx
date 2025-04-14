import React from "react";
import { FaChevronDown } from "react-icons/fa";

const ProfileSection = () => {
  return (
    <div className="flex justify-between items-center gap-2 border border-white/10 bg-white/5 rounded-full px-3 py-2 hover:bg-white/10 transition-colors duration-200 cursor-pointer">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-gray-300 rounded-full border border-white/20"></div>
        <span className="text-sm font-light">Username</span>
      </div>
      <FaChevronDown size={15 } className="text-white/60" />
    </div>
  );
};

export default ProfileSection;
