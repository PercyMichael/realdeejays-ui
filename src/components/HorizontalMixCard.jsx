import React from "react";
import { FaComment, FaPlay, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const HorizontalMixCard = ({
  index,
  title,
  description,
  onPlay,
  image,
  commentCount = 0,
  playCount = 0,
  likeCount = 0,
}) => {
  return (
    <div className="flex flex-row w-full border border-white/5 rounded-lg group">
      <Link to={`/mix/${index}`} key={index}>
        <div
          className="w-25 h-25 bg-cover bg-center rounded-l-lg relative"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      </Link>
      <div className="p-2 flex flex-col flex-1 justify-center gap-2">
        <Link to={`/mix/${index}`} key={index}>
          <h3 className="text-xs">{title}</h3>
        </Link>
        <Link to={`/dj/${index}`} key={index}>
          <p className="text-white/25 text-xs">{description}</p>
        </Link>
        <div className="flex justify-between text-white/25 text-xs">
          <div className="flex items-center gap-1  cursor-pointer hover:text-[#C91F4F]">
            <FaComment size={10} />
            <span>{commentCount}</span>
          </div>
          <div className="flex items-center gap-1  cursor-pointer hover:text-[#C91F4F]">
            <FaPlay size={10} />
            <span>{playCount}</span>
          </div>
          <div className="flex items-center gap-1 cursor-pointer hover:text-[#C91F4F]">
            <FaHeart size={10} />
            <span>{likeCount}</span>
          </div>
        </div>
      </div>
      <div
        className="flex items-center justify-center w-12 transition-colors duration-200 rounded-r-lg"
        onClick={onPlay}
      >
        <FaPlay
          size={16}
          color="white"
          className="cursor-pointer transition-transform duration-200 hover:scale-90"
        />
      </div>
    </div>
  );
};

export default HorizontalMixCard;
