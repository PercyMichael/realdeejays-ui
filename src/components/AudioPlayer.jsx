import React, { useRef, useState, useEffect } from "react";
import { FaPlay, FaPause, FaHeart } from "react-icons/fa";
import { MdClose, MdDownload } from "react-icons/md";

const AudioPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    setCurrentTime(audio.currentTime);
  };

  const handleLoadedMetadata = () => {
    const audio = audioRef.current;
    setDuration(audio.duration);
  };

  const handleSeek = (e) => {
    const audio = audioRef.current;
    const seekTime = parseFloat(e.target.value);
    audio.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  useEffect(() => {
    const audio = audioRef.current;
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, []);

  return (
    <div className="w-full sticky z-10 bottom-0 backdrop-blur-3xl bg-black/80 border-t border-white/5 px-4 py-3 flex items-center gap-4">
      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
      />

      <div className="flex items-center gap-2">
        <button
          onClick={togglePlayPause}
          className="p-2 rounded-full cursor-pointer transition-colors duration-200"
        >
          {isPlaying ? (
            <FaPause size={16} color="white" />
          ) : (
            <FaPlay size={16} color="white" />
          )}
        </button>
      </div>

      <div
        className="w-10 h-10 bg-cover bg-center rounded-lg"
        style={{
          backgroundImage:
            "url(https://realdeejays.com/wp-content/uploads/2025/03/bang-bang-beats-67dd70350f2f8-2048x2048.jpg)",
        }}
      ></div>

      <div className="flex flex-col justify-center flex-1 space-y-2">
        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            <h3 className="text-xs font-light">BANG BANG4</h3>
            <span className="text-white/25 text-xs">&#8226;</span>
            <p className="text-xs text-white/60">DJ Ace</p>
          </div>
          <p className="text-xs text-white/60">
            {formatTime(currentTime)} / {formatTime(duration)}
          </p>
        </div>

        <input
          type="range"
          min={0}
          max={duration}
          value={currentTime}
          onChange={handleSeek}
          className="w-full h-0.5 bg-[#C91F4F] rounded-lg appearance-none cursor-pointer
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:w-2
            [&::-webkit-slider-thumb]:h-2
            [&::-webkit-slider-thumb]:bg-white
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:border-none
            [&::-moz-range-thumb]:appearance-none
            [&::-moz-range-thumb]:w-2
            [&::-moz-range-thumb]:h-2
            [&::-moz-range-thumb]:bg-white
            [&::-moz-range-thumb]:rounded-full"
        />
      </div>

      <div className="flex items-center gap-3">
        <button className="p-2 rounded-full cursor-pointer">
          <FaHeart size={14} color="white" />
        </button>
        <a
          href="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
          download
          className="p-2 rounded-full cursor-pointer"
        >
          <MdDownload size={18} color="white" />
        </a>

        <button className="p-2 rounded-full cursor-pointer">
          <MdClose />
        </button>
      </div>
    </div>
  );
};

export default AudioPlayer;
