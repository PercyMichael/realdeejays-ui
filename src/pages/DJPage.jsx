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

const DJPage = () => {
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
          <DJProfileHeader
            image="https://realdeejays.com/wp-content/uploads/2025/02/new-mix-2-67a9be4dd55fa.webp"
            name="DJ Name"
            followerCount={1000}
            mixCount={50}
            favouritesCount={200}
          />

          {/* content */}
          <div className="flex flex-col justify-start w-full p-10">
            <h1 className="text-xl font-semibold text-white">My Mixes</h1>
            <p className="text-sm mt-1 text-white/60">
              Discover fresh and updated mixes from DJ Name.
            </p>

            <div className="grid grid-cols-2 gap-6 w-full py-8">
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

        <AudioPlayer />
      </div>

      {/* right */}
      <RightSidebar />
      {/* end right */}
    </div>
  );
};

export default DJPage;
