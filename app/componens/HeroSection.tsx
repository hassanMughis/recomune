"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa";
import DownloadButton from "./DownloadButton";
import { data } from "./data";

const HeroSection = () => {
  const pages = ["page1", "page2", "page3"] as const;
  const [pageIndex, setPageIndex] = useState(0);
  const isScrolling = useRef(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPageIndex((prev) => (prev === 2 ? prev-2 : prev + 1));
    }, 5000);
    return () => clearTimeout(timer);
  }, [pageIndex]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isScrolling.current) return;
      if (e.deltaY < 0) setPageIndex((prev) => Math.max(prev - 1, 0));
      isScrolling.current = true;
      setTimeout(() => (isScrolling.current = false), 1000);
    };

    window.addEventListener("wheel", handleWheel);
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  const currentPage = pages[pageIndex];
  const current = data[currentPage];

  return (
    <div className="relative w-full h-fit bg-[url('/Rectangle.png')] bg-cover bg-center bg-no-repeat overflow-hidden ">
      <motion.img
        src="/Logo.svg"
        alt="logo"
        className="absolute top-6 left-8 w-24 sm:top-8 sm:left-12 sm:w-32 md:top-10 md:left-10 md:w-44 lg:top-10 lg:left-25 lg:w-60 z-40 xl:left-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />

      <div className="absolute w-78 h-43 left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 -ml-2 sm:right-10 sm:w-72 sm:h-44 md:right-0 md:w-100 md:h-62 lg:right-0 xl:right-50 lg:w-155 lg:h-96">
        <motion.img
          src="/Vector 1.svg"
          alt="vector"
          className="absolute"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        <AnimatePresence mode="wait">
          <motion.img
            key={current.img}
            src={current.img}
            alt="overlay"
            className="absolute w-42 right-16 top-10 sm:w-44 sm:right-12 sm:top-16 md:w-60 md:right-17 md:top-22 lg:w-80 lg:right-34 lg:top-30"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </AnimatePresence>
      </div>

      <div className="relative flex flex-col justify-center w-[90%] ml-[8%] mt-100 h-auto sm:w-[60%] sm:ml-[10%] sm:h-[80vh] md:w-[40%]  md:ml-[5%] md:h-screen md:mt-0 lg:w-[40%] lg:ml-[8%] lg:mt-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center h-full"
          >
            <h1
              className="font-switzer leading-tight font-bold text-white text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-7xl text-left"
              dangerouslySetInnerHTML={{ __html: current.para }}
            />
            <p className="font-switzer text-white leading-relaxed text-[15px] sm:text-[16px] md:text-[18px] mt-3 w-full text-left">
              {current.heading}
            </p>
                        <div className="flex flex-wrap gap-4 mt-8">

              <DownloadButton
                icon={<FaApple size={28} />}
                storeName="App Store"
                className="flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-xl  shadow-md hover:bg-gray-100 transition-all duration-300 text-lg sm:text-2xl font-bold"
              />
              <DownloadButton
                icon={<IoLogoGooglePlaystore size={28} />}
                storeName="Play Store"
                className="flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-xl  shadow-md hover:bg-gray-100 transition-all duration-300 text-lg sm:text-2xl font-bold"
              />
            </div>
            
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4 z-50">
        {pages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setPageIndex(idx)}
            className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
              pageIndex === idx ? "bg-white border-white" : "bg-transparent border-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
