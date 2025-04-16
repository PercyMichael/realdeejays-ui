import React, { useState } from "react";
import MixCard from "./components/MixCard";
import HorizontalMixCard from "./components/HorizontalMixCard";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";
import AudioPlayer from "./components/AudioPlayer";
import Header from "./components/Header";
import DJProfileCard from "./components/DJProfileCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import djsData from "./json/djs.json";
import latestMixesData from "./json/latestMixes.json";
import communityMixesData from "./json/communityMixes.json";
import { Link } from "react-router-dom";

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = (event) => {
    if (event.target.scrollTop > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  return (
    <div
      className="bg-black/60 text-white min-h-screen flex items-stretch justify-center backdrop-blur-2xl"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* left */}
      <LeftSidebar />
      {/* end left */}

      {/* middle */}
      <div className="flex flex-col w-full md:max-w-4xl h-screen">
        <Header isScrolled={isScrolled} />

        <div
          className="flex flex-col items-center border border-x border-white/5 overflow-y-auto no-scrollbar flex-1"
          onScroll={handleScroll}
        >
          {/* dj profiles */}
          <div className="w-full px-5 md:px-10 py-10">
            <h1 className="text-xl">Top DJs</h1>
            <p className="text-sm mt-1 text-white/60">
              Discover and follow your favorite DJs.
            </p>
            <Slider
              className="mt-4"
              dots={true}
              infinite={true}
              speed={500}
              slidesToShow={3}
              slidesToScroll={3}
              arrows={false}
              responsive={[
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    arrows: false,
                    dotsClass: "slick-dots slick-thumb",
                  },
                },
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 5,
                    slidesToScroll: 4,
                    arrows: true,
                  },
                },
              ]}
              autoplay={true}
              autoplaySpeed={3000}
            >
              {djsData.map((dj, index) => (
                <DJProfileCard
                  key={index}
                  index={index}
                  image={dj.image}
                  followerCount={dj.followerCount}
                  mixesCount={dj.mixesCount}
                  onFollow={() => console.log(`Follow clicked for DJ ${index}`)}
                />
              ))}
            </Slider>
          </div>
          {/* end jd profiles */}

          {/* content */}
          <div className="flex flex-col justify-start w-full px-5 md:px-10 py-10">
            {/* latest mixes */}
            <h1 className="text-xl">New Mixes</h1>
            <p className="text-sm mt-1 text-white/60">
              Greatest DJ mixes curated just for you.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mg:gap-6 w-full pt-8">
              {latestMixesData.map((mix, index) => (
                <MixCard
                  key={index}
                  title={mix.title}
                  djName={mix.djName}
                  image={mix.image}
                  commentCount={mix.commentCount}
                  playCount={mix.playCount}
                  likeCount={mix.likeCount}
                  onPlay={() => console.log(`Play clicked for ${mix.title}`)}
                />
              ))}
            </div>
            {/* end latest */}

            {/* <h1 className="text-xl mt-8">Community Mixes</h1>
            <p className="text-sm mt-1 text-white/60">
              Mixes submitted by our community members.
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
            </div> */}
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

export default App;
