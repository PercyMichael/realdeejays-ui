import React from "react";
import { FaComment, FaPlay, FaHeart } from "react-icons/fa";

const HorizontalMixCardWithTime = ({
  title,
  author,
  onPlay,
  image,
  commentCount = 0,
  playCount = 0,
  likeCount = 0,
  publishedTime,
}) => {
  return (
    <div className="flex flex-row w-full border-0 items-center group">
      <div
        className="w-16 h-16 bg-cover bg-center rounded-lg"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full cursor-pointer"
          onClick={onPlay}
        >
          <FaPlay color="white" />
        </div>
      </div>
      <div className="p-2 flex flex-col flex-1 justify-center space-y-1">
        <h3 className="text-sm cursor-pointer">{title}</h3>
        <div className="flex space-x-2 items-center">
          <p className="text-white/25 text-xs">{author}</p>
          <span className="text-white/25 text-xs">&#8226;</span>
          <p className="text-white/20 text-xs">{publishedTime}</p>
        </div>
        <div className="flex justify-between text-white/25 text-xs font-light">
          <div className="flex items-center gap-1 cursor-pointer">
            <FaComment size={10} />
            <span>{commentCount}</span>
          </div>
          <div className="flex items-center gap-1 cursor-pointer">
            <FaPlay size={10} />
            <span>{playCount}</span>
          </div>
          <div className="flex items-center gap-1 cursor-pointer">
            <FaHeart size={10} />
            <span>{likeCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalMixCardWithTime;
