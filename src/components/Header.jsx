import React from "react";

const Header = ({ isScrolled }) => {
  return (
    <div
      className={`flex items-center justify-between w-full px-10 py-4 border-b border-white/5 sticky top-0 z-10 ${
        isScrolled ? "backdrop-blur-lg bg-red-900/10" : "bg-transparent"
      }`}
    >
      <img
        src="https://realdeejays.com/wp-content/uploads/2025/04/REAL-DJS-2023-02-e1668697815924-copy.png"
        alt="logo"
        width={150}
      />
    </div>
  );
};

export default Header;
