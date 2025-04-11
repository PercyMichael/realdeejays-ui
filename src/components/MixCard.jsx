import React from "react";
import { FaComment, FaPlay, FaHeart } from "react-icons/fa";

const MixCard = ({
  title,
  djName,
  onPlay,
  image,
  commentCount = 0,
  playCount = 0,
  likeCount = 0,
  className = "",
}) => {
  return (
    <div className={`border-1 border-white/5 rounded-lg w-full ${className}`}>
      <div
        className="w-full aspect-square bg-pink-100/10 rounded-t-lg bg-cover bg-center relative group"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-2 right-2 bg-black/50 p-2 rounded-full cursor-pointer"
          onClick={onPlay}
        >
          <FaPlay color="white" />
        </div>
      </div>
      <div className="p-4 flex flex-col flex-1 space-y-1.5">
        <h3 className="text-sm cursor-pointer">{title}</h3>
        <p className="text-white/25 text-xs flex-1">{djName}</p>
        <div className="flex justify-between mt-4 text-white/25 text-xs">
          <div className="flex items-center gap-1 cursor-pointer">
            <FaComment size={12} />
            <span>{commentCount}</span>
          </div>
          <div className="flex items-center gap-1 cursor-pointer">
            <FaPlay size={12} />
            <span>{playCount}</span>
          </div>
          <div className="flex items-center gap-1 cursor-pointer">
            <FaHeart size={12} />
            <span>{likeCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MixCard;
