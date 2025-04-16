import React from "react";

const Comment = ({ userName, date, comment }) => {
  return (
    <div className="flex flex-col gap-1 p-2 border-b border-white/10">
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-white">{userName}</span>
        <span className="text-xs text-white/60">{date}</span>
      </div>
      <p className="text-sm text-white/80">{comment}</p>
    </div>
  );
};

export default Comment;
