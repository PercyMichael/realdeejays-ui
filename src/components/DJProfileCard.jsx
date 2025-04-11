import React from "react";
import { PiUsersDuotone, PiMusicNoteDuotone } from "react-icons/pi";

const DJProfileCard = ({ image, followerCount, mixesCount, onFollow }) => {
  return (
    <div className="flex flex-col items-center w-24 group">
      <div
        className="w-24 h-24 bg-cover bg-center rounded-full group-hover:border-1 group-hover:border-[#C91F4F]"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      <div className="mt-2 text-xs font-light text-white/60 flex gap-2 items-center">
        <div className="flex items-center gap-1">
          <PiUsersDuotone size={15} title={`${followerCount} Followers`} />
          <span className="text-white/80">{followerCount}</span>
        </div>
        <div className="w-px h-2 bg-white/20"></div>
        <div className="flex items-center gap-1">
          <PiMusicNoteDuotone size={15} title={`${mixesCount} Mixes`} />
          <span className="text-white/80">{mixesCount}</span>
        </div>
      </div>

      <button
        className="mt-2 px-2 py-1 text-xs font-extralight bg-white/10 hover:bg-white/20 rounded-full"
        onClick={onFollow}
      >
        Follow
      </button>
    </div>
  );
};

export default DJProfileCard;
