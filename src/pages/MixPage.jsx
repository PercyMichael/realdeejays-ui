import React, { useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import communityMixesData from "../json/communityMixes.json";

import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import Header from "../components/Header";
import AudioPlayer from "../components/AudioPlayer";
import HorizontalMixCard from "../components/HorizontalMixCard";
import DJProfileHeader from "../components/DJProfileHeader";
import MixHeader from "../components/MixHeader";
import CommentSidebar from "../components/CommentSidebar";
import MobileComments from "../components/MobileComments";

const MixPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = (event) => {
    if (event.target.scrollTop > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  return (
    <div className="bg-black/60 text-white min-h-screen flex items-stretch justify-center backdrop-blur-2xl">
      {/* left */}
      <LeftSidebar />
      {/* end left */}

      {/* middle */}
      <div className="flex flex-col w-4xl h-screen">
        <Header isScrolled={isScrolled} />

        <div
          className="flex flex-col items-center border border-x border-white/5 overflow-y-auto no-scrollbar flex-1"
          onScroll={handleScroll}
        >
          <MixHeader
            image="https://realdeejays.com/wp-content/uploads/2025/02/new-mix-2-67a9be4dd55fa.webp"
            title="My Awesome Mix"
            djName="DJ Name"
            playCount={1234}
            likeCount={567}
            commentCount={89}
            onPlay={() => console.log("Mix played")}
          />

          {/* mix info */}
          <div className="flex flex-col justify-start w-full p-5 md:p-10 border-b border-white/10">
            <h1 className="text-xl font-bold text-white">My Awesome Mix</h1>
            <p className="text-sm text-white/60">By DJ Name</p>
          </div>
          {/* end mix info */}

          {/* comments */}
          <MobileComments />
          {/* end comments */}

          {/* content */}
          <div className="flex flex-col justify-start w-full p-5 md:p-10">
            <h1 className="text-xl font-semibold text-white">
              You may also like
            </h1>
            <p className="text-sm mt-1 text-white/60">
              Other fresh and updated mixes from DJ Name.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full py-8">
              {communityMixesData.map((mix, index) => (
                <HorizontalMixCard
                  key={index}
                  title={mix.title}
                  description={mix.djName}
                  image={mix.image}
                  commentCount={mix.commentCount}
                  playCount={mix.playCount}
                  likeCount={mix.likeCount}
                  onPlay={() => console.log(`Play clicked for ${mix.title}`)}
                />
              ))}
            </div>
          </div>
          {/* end content */}
        </div>

        {/* <AudioPlayer /> */}
        <div className="flex items-start px-5 w-full gap-2 py-4 sticky bottom-0 bg-black/90 backdrop-blur-lg">
          <textarea
            placeholder="Add a comment..."
            className="px-3 py-2 w-full text-sm bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-[#C91F4F] resize-none overflow-auto max-h-24 min-h-[2.5rem]"
          />
          <button className="px-4 py-2 text-sm font-extralight bg-[#C91F4F] rounded-full self-end">
            Post
          </button>
        </div>
      </div>

      {/* right */}
      <CommentSidebar />
      {/* end right */}
    </div>
  );
};

export default MixPage;
