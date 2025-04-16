import React from "react";
import { FaPlayCircle, FaHeart, FaComment, FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";

const MixHeader = ({
  image,
  title,
  djName,
  playCount,
  likeCount,
  commentCount,
  onPlay,
}) => {
  return (
    <div className="flex items-center p-10 border-b border-white/10 w-full gap-5">
      <img
        src={image}
        alt={title}
        className="h-60 w-60 aspect-square rounded-lg object-cover mb-4 border-2 border-white/5 shadow-lg"
      />
      <div className="w-full">
        <div className="flex items-center gap-2 justify-between">
          <h2 className="text-lg font-bold">{title}</h2>

          <div className="flex items-center gap-2">
            <button
              className="px-4 py-2 text-sm font-extralight bg-white/10 rounded-full cursor-pointer hover:bg-[#C91F4F] flex items-center gap-1"
              onClick={onPlay}
            >
              <FaPlay size={14} />
              Play Mix
            </button>
            <button
              className="p-2 text-sm font-extralight bg-white/10 rounded-full cursor-pointer hover:bg-[#C91F4F]"
              onClick={() => console.log("Like clicked")}
            >
              <FaHeart size={16} />
            </button>
          </div>
        </div>
        <div className="flex items-center gap-1 mt-1">
          <span className="text-sm text-white/60">By</span>
          <Link to={`/dj/${title}`}>
            <span className="text-sm font-medium text-white hover:text-[#C91F4F]">
              {djName}
            </span>
          </Link>
        </div>
        <div className="flex space-x-4 text-sm font-light text-white/60 mt-2 items-center">
          <div className="flex items-center gap-1">
            <FaPlay size={14} />
            <span>{playCount}</span>
          </div>
          <div className="flex items-center gap-1">
            <FaHeart size={14} />
            <span>{likeCount}</span>
          </div>
          <div className="flex items-center gap-1">
            <FaComment size={14} />
            <span>{commentCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MixHeader;
