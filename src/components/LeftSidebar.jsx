import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { GoHeart, GoHomeFill, GoSearch } from "react-icons/go";

import { IoHeadsetOutline } from "react-icons/io5";
import { PiMusicNoteDuotone } from "react-icons/pi";
import { TiHeartOutline } from "react-icons/ti";
import { Link } from "react-router-dom";

const LeftSidebar = () => {
  return (
    <div className="flex flex-col px-5 py-5 gap-10 w-1/6 h-screen">
      {/* search */}
      <div className="px-3 flex items-center border border-white/10 bg-black font-light text-sm rounded-full">
        <GoSearch
          size={20}
          className="min-w-[25px] min-h-[20px] text-white/40"
        />
        <input
          type="text"
          placeholder="Search"
          className="p-2 rounded text-white outline-none bg-transparent"
          onChange={(e) => console.log(e.target.value)}
        />
      </div>
      {/* end search */}

      <ul className="flex flex-col gap-8">
        <li>
          <Link
            to={"/"}
            className="text-lg text-white/40 hover:text-white transition-all duration-300 ease-in-out flex items-center gap-x-3"
          >
            <GoHomeFill
              size={25}
              className="transition-transform duration-300 ease-in-out hover:scale-110"
            />
            <p className="transition-transform duration-300 ease-in-out">
              Home
            </p>
          </Link>
        </li>

        <li>
          <a
            href="#"
            className="text-lg text-white/40 hover:text-white transition-all duration-300 ease-in-out flex items-center gap-x-3"
          >
            <PiMusicNoteDuotone
              size={25}
              className="transition-transform duration-300 ease-in-out hover:scale-110"
            />

            <p className="transition-transform duration-300 ease-in-out">
              Trending
            </p>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-lg text-white/40 hover:text-white transition-all duration-300 ease-in-out flex items-center gap-x-3"
          >
            <IoHeadsetOutline
              size={25}
              className="transition-transform duration-300 ease-in-out hover:scale-110"
            />
            <p className="transition-transform duration-300 ease-in-out">
              Deejays
            </p>
          </a>
        </li>

        <li>
          <a
            href="#"
            className="text-lg text-white/40 hover:text-white transition-all duration-300 ease-in-out flex items-center gap-x-3"
          >
            <GoHeart
              size={25}
              className="transition-transform duration-300 ease-in-out hover:scale-110"
            />
            <p className="transition-transform duration-300 ease-in-out">
              Favourites
            </p>
          </a>
        </li>
      </ul>

      <div className="flex flex-col gap-4 mt-auto pb-4">
        <p className="text-xs text-white/40">
          &copy; {new Date().getFullYear()} RealDeejays
        </p>
        <div className="flex gap-4">
          <a
            href="#"
            className="text-white/40 hover:text-white transition-colors duration-200"
          >
            <FaFacebook size={16} />
          </a>
          <a
            href="#"
            className="text-white/40 hover:text-white transition-colors duration-200"
          >
            <FaTwitter size={16} />
          </a>
          <a
            href="#"
            className="text-white/40 hover:text-white transition-colors duration-200"
          >
            <FaInstagram size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
