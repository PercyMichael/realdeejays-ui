import React from "react";
import { FaComment, FaPlay, FaHeart } from "react-icons/fa";

const HorizontalMixCard = ({
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
      <div
        className="w-25 h-25 bg-cover bg-center rounded-l-lg relative"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="p-2 flex flex-col flex-1 justify-center">
        <h3 className="text-xs">{title}</h3>
        <p className="text-white/25 text-xs">{description}</p>
        <div className="flex justify-between mt-2 text-white/25 text-xs">
          <div className="flex items-center gap-1">
            <FaComment size={10} />
            <span>{commentCount}</span>
          </div>
          <div className="flex items-center gap-1">
            <FaPlay size={10} />
            <span>{playCount}</span>
          </div>
          <div className="flex items-center gap-1">
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
