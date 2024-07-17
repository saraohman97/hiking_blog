"use client";

import { BsGithub } from "react-icons/bs";
import React, { useEffect, useState } from "react";
import { CiMail, CiMenuBurger } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import Link from "next/link";
import toast from "react-hot-toast";

const Navbar = () => {
  // MENU STATE
  const [open, setOpen] = useState(false);

  // COPY BUTTON
  const copy = () => {
    navigator.clipboard.writeText("saraohman97@gmail.com");
    toast.success('Kopierade "saraohman97@gmail.com".', {
      icon: "👏",
    });
  };

  // HERO BACKGROUND IMAGES CAROUSEL
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
    <>
      <div className="sm:h-[500px] w-full relative">
        {/* HERO BACKGROUND IMAGES */}
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="bg-cover duration-500 w-full h-[300px] sm:h-[500px] bg-center"
        />

        <div className="absolute max-sm:top-10 inset-0 bg-white/10 flex flex-col items-center justify-center text-white">
          <h1 className="text-3xl sm:text-6xl font-bold">Vandringsblogg</h1>
          <h2 className="pt-1 font-bold text-2xl">Vandringstips</h2>
        </div>

        {/* NAVBAR */}
        <div className="absolute w-full flex items-center justify-between right-0 left-0 top-0 bg-white sm:bg-transparent sm:text-white">
          <div onClick={() => setOpen(true)} className="p-4">
            <FiMenu size={20} />
          </div>
          <a
            href="https://github.com/saraohman97"
            className="cursor-pointer hover:underline underline-offset-4 flex items-center gap-2 p-4"
          >
            Av Sara Öhman <BsGithub />
          </a>
        </div>

        {/* HERO CAROUSEL PAGINATION */}
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

      {open && (
        <div className="fixed inset-0 z-50 flex">
          <div className="bg-white flex flex-col min-w-60">
            <div onClick={() => setOpen(false)} className="p-4 mb-6 w-fit">
              <GrClose size={20} />
            </div>

            <Link
              href="/ultralatt_packning"
              onClick={() => setOpen(false)}
              className="border-l-4 p-2 hover:bg-green-50 cursor-pointer hover:border-green-600"
            >
              Ultralätt packning
            </Link>

            <Link
              href="/bjornon"
              onClick={() => setOpen(false)}
              className="border-l-4 p-2 hover:bg-green-50 cursor-pointer hover:border-green-600"
            >
              Björnön
            </Link>

            <Link
              href="/roslagsleden-etapp-11"
              onClick={() => setOpen(false)}
              className="border-l-4 p-2 hover:bg-green-50 cursor-pointer hover:border-green-600"
            >
              Roslagsleden Etapp 11
            </Link>

            <div
              onClick={copy}
              className="flex items-center gap-2 p-2 hover:bg-green-50 cursor-pointer"
            >
              <CiMail size={18} />
              Email
            </div>
            <a
              href="https://github.com/saraohman97"
              className="flex items-center gap-2 p-2 hover:bg-green-50 cursor-pointer"
            >
              <BsGithub size={18} />
              GitHub
            </a>
          </div>
          <div className="bg-black/50 w-full" onClick={() => setOpen(false)} />
        </div>
      )}
    </>
  );
};

export default Navbar;
