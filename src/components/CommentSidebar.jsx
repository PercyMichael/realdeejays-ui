import React from "react";
import ProfileSection from "./ProfileSection";
import Comment from "./Comment";

const commentsData = [
  { userName: "DJ User1", date: "2025-04-15", comment: "Great mix!" },
  { userName: "MusicLover", date: "2025-04-16", comment: "Love the energy!" },
  { userName: "MixMaster", date: "2025-04-17", comment: "Awesome tracklist!" },
  { userName: "RaveQueen", date: "2025-04-18", comment: "This is fire!" },
  { userName: "BeatFan", date: "2025-04-19", comment: "The beats are insane!" },
  { userName: "DJFan42", date: "2025-04-20", comment: "Love the transitions!" },
  {
    userName: "SoundSavant",
    date: "2025-04-21",
    comment: "Great production quality!",
  },
  { userName: "PartyAnimal", date: "2025-04-22", comment: "This mix is lit!" },
  {
    userName: "MusicMaven",
    date: "2025-04-23",
    comment: "So many great tracks!",
  },
  {
    userName: "Clubber",
    date: "2025-04-24",
    comment: "Perfect for the dance floor!",
  },
  {
    userName: "AudioAddict",
    date: "2025-04-25",
    comment: "The bass is pumping!",
  },
  { userName: "MixLover", date: "2025-04-26", comment: "Such a great mix!" },
  {
    userName: "RhythmRenegade",
    date: "2025-04-27",
    comment: "Love the rhythm!",
  },
  {
    userName: "SoundSurfer",
    date: "2025-04-28",
    comment: "This mix is a journey!",
  },
  {
    userName: "BeatBlogger",
    date: "2025-04-29",
    comment: "Great beat selection!",
  },
  {
    userName: "DJDisciples",
    date: "2025-04-30",
    comment: "The DJ is a genius!",
  },
  { userName: "MixMagician", date: "2025-05-01", comment: "Magical mix!" },
  { userName: "RaveReviewer", date: "2025-05-02", comment: "5 stars!" },
  {
    userName: "SoundSleuth",
    date: "2025-05-03",
    comment: "Love the sound design!",
  },
  {
    userName: "PartyPeople",
    date: "2025-05-04",
    comment: "This mix gets parties started!",
  },
];

const CommentSidebar = () => {
  return (
    <div className="hidden md:flex flex-col px-5 pt-5 gap-6 w-1/5 h-screen overflow-y-auto">
      <ProfileSection />
      <h2 className="text-lg font-bold text-white sticky top-0 z-10">
        Comments ({commentsData.length})
      </h2>

      <div className="flex flex-col gap-2 flex-1 overflow-y-auto no-scrollbar">
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
      <div className="flex gap-x-2 pb-4">
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
