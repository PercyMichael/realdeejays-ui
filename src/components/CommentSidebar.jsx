import React from "react";
import ProfileSection from "./ProfileSection";
import Comment from "./Comment";

const commentsData = [
  {
    userName: "DJ User1",
    date: "2025-04-15",
    comment: "Great mix!",
  },
  {
    userName: "MusicLover",
    date: "2025-04-16",
    comment: "Love the energy!",
  },
];

const CommentSidebar = () => {
  return (
    <div className="flex flex-col px-5 py-5 gap-6 w-1/5 h-screen overflow-y-auto">
      <ProfileSection />
      <hr className="border-white/10" />
      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-bold text-white">
          Comments ({commentsData.length})
        </h2>
        <div className="flex flex-col">
          {commentsData.map((comment, index) => (
            <Comment
              key={index}
              userName={comment.userName}
              date={comment.date}
              comment={comment.comment}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-auto">
        <input
          type="text"
          placeholder="Add a comment..."
          className="px-3 py-2 text-sm bg-white/10 border border-white/20 rounded-full focus:outline-none focus:border-[#C91F4F]"
        />
        <button className="px-4 py-2 text-sm font-extralight bg-white/10 hover:bg-[#C91F4F] rounded-full self-end">
          Post
        </button>
      </div>
    </div>
  );
};

export default CommentSidebar;
