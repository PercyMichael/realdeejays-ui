import React from "react";
import { FaComment, FaPlay, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const HorizontalMixCardWithTime = ({
  index,
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
      <Link to={`/mix/${index}`} key={index}>
        <div
          className="min-w-16 w-16 h-16 bg-cover bg-center rounded-lg"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full cursor-pointer"
            onClick={onPlay}
          >
            <FaPlay color="white" />
          </div>
        </div>
      </Link>
      <div className="p-2 flex flex-col flex-1 justify-center space-y-1 min-w-[150px]">
        <Link to={`/mix/${index}`} key={index}>
          <h3 className="text-sm cursor-pointer">{title}</h3>
        </Link>
        <div className="flex space-x-2 items-center">
          <Link to={`/dj/${index}`} key={index}>
            <p className="text-white/25 text-xs">{author}</p>
          </Link>
          <span className="text-white/25 text-xs">&#8226;</span>
          <p className="text-white/20 text-xs">{publishedTime}</p>
        </div>
        <div className="flex justify-between text-white/25 text-xs font-light">
          <div className="flex items-center gap-1 cursor-pointer hover:text-[#C91F4F]">
            <FaComment size={10} />
            <span>{commentCount}</span>
          </div>
          <div className="flex items-center gap-1 cursor-pointer hover:text-[#C91F4F]">
            <FaPlay size={10} />
            <span>{playCount}</span>
          </div>
          <div className="flex items-center gap-1 cursor-pointer hover:text-[#C91F4F]">
            <FaHeart size={10} />
            <span>{likeCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalMixCardWithTime;
