import React from "react";
import { FaUsers, FaMusic, FaHeart, FaPlay } from "react-icons/fa";

const DJProfileHeader = ({
  image,
  name,
  followerCount,
  mixCount,
  favouritesCount,
  onFollow,
}) => {
  return (
    <div className="flex items-center p-10 border-b border-white/10 w-full gap-5">
      <img
        src={image}
        alt={name}
        className="h-32 w-32 aspect-square rounded-full object-cover mb-4 border-2 border-white/5 shadow-lg"
      />
      <div className="w-full">
        <div className="flex items-center gap-2 justify-between">
          <h2 className="text-lg font-bold">{name}</h2>
          <button
            className="px-4 py-2 text-sm font-extralight bg-white/10 rounded-full cursor-pointer hover:bg-[#C91F4F]"
            onClick={onFollow}
          >
            <FaPlay size={14} />
            Follow
          </button>
        </div>
        <p className="text-sm text-white/60 mt-1">
          Experienced DJ with a passion for creating unique mixes.
        </p>
        <div className="flex space-x-4 text-sm font-light text-white/60 mt-2 items-center">
          <div className="flex items-center gap-1">
            <FaUsers size={14} />
            <span>{followerCount}</span>
          </div>
          <div className="flex items-center gap-1">
            <FaMusic size={14} />
            <span>{mixCount}</span>
          </div>
          <div className="flex items-center gap-1">
            <FaHeart size={14} />
            <span>{favouritesCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DJProfileHeader;
