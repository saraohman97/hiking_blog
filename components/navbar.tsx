"use client";

import { BsGithub } from "react-icons/bs";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const slides = [
    {
      url: "/hero1.jpg",
    },
    {
      url: "/hero2.jpg",
    },
    {
      url: "/hero3.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    }, 10000);
  }, [slides.length, currentIndex]);

  return (
    <div className="h-[500px] w-full relative">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="bg-cover duration-500 w-full h-[500px] bg-center"
      />

      <div className="absolute inset-0 bg-white/10 flex flex-col items-center justify-center text-white">
        <h1 className="text-3xl sm:text-6xl font-bold">Vandringsblogg</h1>
        <h2 className="pt-1 font-bold text-2xl">Vandringstips</h2>
      </div>
      <a
        href="https://github.com/saraohman97"
        className="absolute flex gap-2 items-center p-4 right-0 top-0 cursor-pointer hover:underline underline-offset-4 text-white"
      >
        Av Sara Öhman <BsGithub />
      </a>
      <div className="flex justify-center gap-3 absolute -bottom-4 left-0 right-0">
        <div
          onClick={() => setCurrentIndex(0)}
          className={`border-b-4 w-10 hover:border-gray-400 cursor-pointer ${
            currentIndex === 0 ? "border-gray-400" : "border-gray-300"
          }`}
        />
        <div
          onClick={() => setCurrentIndex(1)}
          className={`border-b-4 w-10 hover:border-gray-400 cursor-pointer ${
            currentIndex === 1 ? "border-gray-400" : "border-gray-300"
          }`}
        />
        <div
          onClick={() => setCurrentIndex(2)}
          className={`border-b-4 w-10 hover:border-gray-400 cursor-pointer ${
            currentIndex === 2 ? "border-gray-400" : "border-gray-300"
          }`}
        />
      </div>
    </div>
  );
};

export default Navbar;
