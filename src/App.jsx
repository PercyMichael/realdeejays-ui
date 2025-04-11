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
      <div
        className="flex flex-col items-center border border-x border-white/5 w-4xl max-h-screen overflow-y-auto no-scrollbar"
        onScroll={handleScroll}
      >
        {/* header */}
        <Header isScrolled={isScrolled} />
        {/* end header */}

        {/* dj profiles */}
        <div className="w-full p-10">
          <h1 className="text-xl">Top DJs</h1>
          <p className="text-sm mt-1 text-white/60">
            Discover and follow your favorite DJs.
          </p>
          <Slider
            className="mt-4"
            dots={true}
            infinite={true}
            speed={500}
            slidesToShow={5}
            slidesToScroll={4}
            autoplay={true}
            autoplaySpeed={3000}
          >
            {[
              {
                image:
                  "https://realdeejays.com/wp-content/uploads/2025/03/bang-bang-beats-67dd70350f2f8-2048x2048.jpg",
                followerCount: 1200,
                mixesCount: 50,
              },
              {
                image:
                  "https://realdeejays.com/wp-content/uploads/2025/03/bang-bang-beats-comp-67e6718ddd20c.webp",
                followerCount: 800,
                mixesCount: 30,
              },
              {
                image:
                  "https://realdeejays.com/wp-content/uploads/2025/04/bang-bang-beats-67efdd36651b7-300x300.webp",
                followerCount: 500,
                mixesCount: 20,
              },
              {
                image:
                  "https://realdeejays.com/wp-content/uploads/2025/02/cover-beats-67af234bcccb2.webp",
                followerCount: 2000,
                mixesCount: 100,
              },
              {
                image:
                  "https://realdeejays.com/wp-content/uploads/2025/02/new-mix-2-67a9be4dd55fa.webp",
                followerCount: 1000,
                mixesCount: 40,
              },
            ].map((dj, index) => (
              <DJProfileCard
                key={index}
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
        <div className="flex flex-col justify-start w-full p-10">
          {/* latest mixes */}
          <h1 className="text-xl">New Mixes</h1>
          <p className="text-sm mt-1 text-white/60">
            Greatest DJ mixes curated just for you.
          </p>
          <div className="grid grid-cols-3 gap-6 w-full py-8">
            {[
              {
                title: "BANG BANG 4",
                djName: "DJ Bang Bang",
                image:
                  "https://realdeejays.com/wp-content/uploads/2025/03/bang-bang-beats-67dd70350f2f8-2048x2048.jpg",
                commentCount: 12,
                playCount: 1200,
                likeCount: 500,
              },
              {
                title: "Summer Vibes",
                djName: "DJ Summer",
                image:
                  "https://realdeejays.com/wp-content/uploads/2025/03/bang-bang-beats-comp-67e6718ddd20c.webp",
                commentCount: 8,
                playCount: 800,
                likeCount: 300,
              },
              {
                title: "Night Beats",
                djName: "DJ Night",
                image:
                  "https://realdeejays.com/wp-content/uploads/2025/03/crush-reggae-mixtape-comp-67e54581a77d9.webp",
                commentCount: 15,
                playCount: 1500,
                likeCount: 700,
              },
              {
                title: "Chill Sessions",
                djName: "DJ Chill",
                image:
                  "https://realdeejays.com/wp-content/uploads/2025/04/bang-bang-beats-67efdd36651b7-300x300.webp",
                commentCount: 5,
                playCount: 500,
                likeCount: 200,
              },
              {
                title: "Party Anthems",
                djName: "DJ Party",
                image:
                  "https://realdeejays.com/wp-content/uploads/2025/02/cover-beats-67af234bcccb2.webp",
                commentCount: 20,
                playCount: 2000,
                likeCount: 1000,
              },
              {
                title: "Deep House",
                djName: "DJ Deep",
                image:
                  "https://realdeejays.com/wp-content/uploads/2025/02/new-mix-2-67a9be4dd55fa.webp",
                commentCount: 10,
                playCount: 1000,
                likeCount: 400,
              },
            ].map((mix, index) => (
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

          <h1 className="text-xl mt-8">Community Mixes</h1>
          <p className="text-sm mt-1 text-white/60">
            Mixes submitted by our community members.
          </p>

          <div className="grid grid-cols-2 gap-6 w-full py-8">
            {[
              {
                title: "BANG BANG 4",
                djName: "DJ Bang Bang",
                image:
                  "https://realdeejays.com/wp-content/uploads/2025/03/bang-bang-beats-67dd70350f2f8-2048x2048.jpg",
                commentCount: 12,
                playCount: 1200,
                likeCount: 500,
              },
              {
                title: "Summer Vibes",
                djName: "DJ Summer",
                image:
                  "https://realdeejays.com/wp-content/uploads/2025/03/bang-bang-beats-comp-67e6718ddd20c.webp",
                commentCount: 8,
                playCount: 800,
                likeCount: 300,
              },
              {
                title: "Night Beats",
                djName: "DJ Night",
                image:
                  "https://realdeejays.com/wp-content/uploads/2025/03/crush-reggae-mixtape-comp-67e54581a77d9.webp",
                commentCount: 15,
                playCount: 1500,
                likeCount: 700,
              },
              {
                title: "Chill Sessions",
                djName: "DJ Chill",
                image:
                  "https://realdeejays.com/wp-content/uploads/2025/04/bang-bang-beats-67efdd36651b7-300x300.webp",
                commentCount: 5,
                playCount: 500,
                likeCount: 200,
              },
              {
                title: "Party Anthems",
                djName: "DJ Party",
                image:
                  "https://realdeejays.com/wp-content/uploads/2025/02/cover-beats-67af234bcccb2.webp",
                commentCount: 20,
                playCount: 2000,
                likeCount: 1000,
              },
              {
                title: "Deep House",
                djName: "DJ Deep",
                image:
                  "https://realdeejays.com/wp-content/uploads/2025/02/new-mix-2-67a9be4dd55fa.webp",
                commentCount: 10,
                playCount: 1000,
                likeCount: 400,
              },
            ].map((mix, index) => (
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

        {/* footer */}
        <AudioPlayer />
      </div>

      {/* right */}
      <RightSidebar />
      {/* end right */}
    </div>
  );
};

export default App;
