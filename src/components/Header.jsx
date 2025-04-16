import React from "react";
import { ImMenu2 } from "react-icons/im";
import { Link } from "react-router-dom";

const Header = ({ isScrolled }) => {
  return (
    <div
      className={`flex items-center justify-between w-full px-5 md:px-10 py-4 border-x border-white/5 sticky top-0 z-10 ${
        isScrolled ? "backdrop-blur-lg bg-red-900/10" : "bg-transparent"
      }`}
    >
      <Link to={"/"}>
        <img
          src="https://realdeejays.com/wp-content/uploads/2025/04/REAL-DJS-2023-02-e1668697815924-copy.png"
          alt="logo"
          width={150}
        />
      </Link>

      {/* added a menu */}
      <ImMenu2 size={30} className="flex md:hidden" />
    </div>
  );
};

export default Header;
