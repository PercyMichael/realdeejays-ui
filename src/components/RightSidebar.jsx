import React from "react";
import HorizontalMixCardWithTime from "./HorizontalMixCardWithTime";
import ProfileSection from "./ProfileSection";

const RightSidebar = () => {
  const topMixes = [
    {
      title: "BANG BANG 4",
      author: "DJ Ace",
      image:
        "https://realdeejays.com/wp-content/uploads/2025/03/bang-bang-beats-67dd70350f2f8-2048x2048.jpg",
      commentCount: 12,
      playCount: 1200,
      likeCount: 500,
      publishedTime: "2 days ago",
    },
    {
      title: "Summer Vibes",
      author: "DJ Vibes",
      image:
        "https://realdeejays.com/wp-content/uploads/2025/03/bang-bang-beats-comp-67e6718ddd20c.webp",
      commentCount: 8,
      playCount: 800,
      likeCount: 300,
      publishedTime: "1 day ago",
    },
    {
      title: "Night Beats",
      author: "DJ Night",
      image:
        "https://realdeejays.com/wp-content/uploads/2025/03/crush-reggae-mixtape-comp-67e54581a77d9.webp",
      commentCount: 15,
      playCount: 1500,
      likeCount: 700,
      publishedTime: "3 days ago",
    },
    {
      title: "Chill Sessions",
      author: "DJ Chill",
      image:
        "https://realdeejays.com/wp-content/uploads/2025/04/bang-bang-beats-67efdd36651b7-300x300.webp",
      commentCount: 5,
      playCount: 500,
      likeCount: 200,
      publishedTime: "5 hours ago",
    },
    {
      title: "Party Anthems",
      author: "DJ Party",
      image:
        "https://realdeejays.com/wp-content/uploads/2025/02/cover-beats-67af234bcccb2.webp",
      commentCount: 20,
      playCount: 2000,
      likeCount: 1000,
      publishedTime: "1 hour ago",
    },
    {
      title: "Deep House",
      author: "DJ Deep",
      image:
        "https://realdeejays.com/wp-content/uploads/2025/02/new-mix-2-67a9be4dd55fa.webp",
      commentCount: 10,
      playCount: 1000,
      likeCount: 400,
      publishedTime: "4 hours ago",
    },
    {
      title: "Electro House",
      author: "DJ Electro",
      image:
        "https://realdeejays.com/wp-content/uploads/2025/02/new-mix-2-67a20d03995f3.webp",
      commentCount: 7,
      playCount: 700,
      likeCount: 250,
      publishedTime: "6 hours ago",
    },
    {
      title: "Trance Mix",
      author: "DJ Trance",
      image:
        "https://realdeejays.com/wp-content/uploads/2024/10/cover-6711fd5b34abf.webp",
      commentCount: 18,
      playCount: 1800,
      likeCount: 900,
      publishedTime: "8 hours ago",
    },
    {
      title: "Hip Hop Hits",
      author: "DJ HipHop",
      image:
        "https://realdeejays.com/wp-content/uploads/2024/10/MIXTAPES-1-1.jpg",
      commentCount: 9,
      playCount: 900,
      likeCount: 350,
      publishedTime: "10 hours ago",
    },
    {
      title: "Rock Anthems",
      author: "DJ Rock",
      image:
        "https://realdeejays.com/station/dance-hall-after-beach-party-mixtape/",
      commentCount: 11,
      playCount: 1100,
      likeCount: 450,
      publishedTime: "12 hours ago",
    },
    {
      title: "Pop Hits",
      author: "DJ Pop",
      image:
        "https://realdeejays.com/wp-content/uploads/2021/12/WhatsApp-Image-2021-12-21-at-2.27.16-PM.jpeg",
      commentCount: 6,
      playCount: 600,
      likeCount: 220,
      publishedTime: "14 hours ago",
    },
    {
      title: "Retro Mix",
      author: "DJ Retro",
      image: "https://picsum.photos/200/300?random=12",
      commentCount: 14,
      playCount: 1400,
      likeCount: 600,
      publishedTime: "16 hours ago",
    },
    {
      title: "Funky Town",
      author: "DJ Funky",
      image: "https://picsum.photos/200/300?random=13",
      commentCount: 4,
      playCount: 400,
      likeCount: 150,
      publishedTime: "18 hours ago",
    },
    {
      title: "Electro Beats",
      author: "DJ Electro",
      image: "https://picsum.photos/200/300?random=14",
      commentCount: 3,
      playCount: 300,
      likeCount: 100,
      publishedTime: "20 hours ago",
    },
    {
      title: "House Party",
      author: "DJ House",
      image: "https://picsum.photos/200/300?random=15",
      commentCount: 2,
      playCount: 200,
      likeCount: 50,
      publishedTime: "22 hours ago",
    },
    {
      title: "Trance Nation",
      author: "DJ Trance",
      image: "https://picsum.photos/200/300?random=16",
      commentCount: 1,
      playCount: 100,
      likeCount: 20,
      publishedTime: "1 day ago",
    },
    {
      title: "Hip Hop Frenzy",
      author: "DJ HipHop",
      image: "https://picsum.photos/200/300?random=17",
      commentCount: 0,
      playCount: 0,
      likeCount: 0,
      publishedTime: "1 day ago",
    },
    {
      title: "Rock On",
      author: "DJ Rock",
      image: "https://picsum.photos/200/300?random=18",
      commentCount: 0,
      playCount: 0,
      likeCount: 0,
      publishedTime: "1 day ago",
    },
    {
      title: "Pop Mix",
      author: "DJ Pop",
      image: "https://picsum.photos/200/300?random=19",
      commentCount: 0,
      playCount: 0,
      likeCount: 0,
      publishedTime: "1 day ago",
    },
    {
      title: "Retro Revival",
      author: "DJ Retro",
      image: "https://picsum.photos/200/300?random=20",
      commentCount: 0,
      playCount: 0,
      likeCount: 0,
      publishedTime: "1 day ago",
    },
    {
      title: "Funky Beats",
      author: "DJ Funky",
      image: "https://picsum.photos/200/300?random=21",
      commentCount: 0,
      playCount: 0,
      likeCount: 0,
      publishedTime: "1 day ago",
    },
    {
      title: "Electro Mix",
      author: "DJ Electro",
      image: "https://picsum.photos/200/300?random=22",
      commentCount: 0,
      playCount: 0,
      likeCount: 0,
      publishedTime: "1 day ago",
    },
    {
      title: "House Mix",
      author: "DJ House",
      image: "https://picsum.photos/200/300?random=23",
      commentCount: 0,
      playCount: 0,
      likeCount: 0,
      publishedTime: "1 day ago",
    },
    {
      title: "Trance Mix",
      author: "DJ Trance",
      image: "https://picsum.photos/200/300?random=24",
      commentCount: 0,
      playCount: 0,
      likeCount: 0,
      publishedTime: "1 day ago",
    },
  ];

  return (
    <div className="flex flex-col px-5 py-5 gap-6 w-1/6 h-screen">
      <ProfileSection />
      <hr className="border-white/10" />
      {/* top mixes */}

      <div className="flex flex-col gap-3 overflow-y-auto max-h-screen no-scrollbar">
        <div className="flex justify-between items-center">
          <h2 className="text-base font-bold text-white/90">Top Mixes</h2>
          <p className="text-xs text-white/40 hover:text-white/60 transition-colors duration-200 cursor-pointer">
            See all
          </p>
        </div>
        {topMixes.map((mix, index) => (
          <HorizontalMixCardWithTime
            key={index}
            title={mix.title}
            author={mix.author}
            image={mix.image}
            commentCount={mix.commentCount}
            playCount={mix.playCount}
            likeCount={mix.likeCount}
            publishedTime={mix.publishedTime}
            onPlay={() => console.log(`Play clicked for ${mix.title}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default RightSidebar;
