import React from 'react';
import DownloadButton from './DownloadButton';
import { IoLogoGooglePlaystore } from 'react-icons/io5';
import { FaApple } from 'react-icons/fa';

const Section2 = () => {
  return (
    <section className="bg-gradient-to-l from-[#060E23] to-[#0B1538] h-fit flex flex-col md:flex-row items-center justify-center p-10 md:p-30">
      
      <div className="flex justify-center items-center relative mb-6 md:mb-0 md:w-1/2">
        <div className="animate-gradient-sphere"></div>
        <img
          src="/4 1.svg"
          alt=""
          className="absolute w-60 h-60 sm:w-80 sm:h-80 md:w-120 md:h-120 lg:w-150 lg:h-150 hover:scale-105 transition-all duration-300"
        />
      </div>

      <div className="flex flex-col-reverse md:flex-row justify-center items-center w-full md:w-2/3 gap-4 md:gap-6">
        
        <div className="flex flex-col items-end gap-3 md:mr-2">
          <DownloadButton
            icon={<FaApple size={40} />}
            storeName="App Store"
            className="inline-flex items-center justify-center border-2 border-black rounded-2xl bg-[#2563EA] text-white px-5 py-2 w-48 sm:w-52 md:w-55 transition-all duration-200 hover:bg-white hover:text-black"
          />
          <DownloadButton
            icon={<IoLogoGooglePlaystore size={40} />}
            storeName="Play Store"
            className="inline-flex items-center justify-center border-2 border-black rounded-2xl bg-[#2563EA] text-white px-5 py-2 w-48 sm:w-52 md:w-55 transition-all duration-200 hover:bg-white hover:text-black"
          />
        </div>

        {/* Text Card */}
        <div className="border border-[#2563EA] rounded-2xl p-6 text-white bg-[#0B1538] shadow-lg hover:shadow-[#2563EA]/50 transition-all duration-300 w-full sm:w-[80%] md:w-[75%]">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2 text-[#2563EA]">
            Feeling Lonely After Retirement?
          </h1>
          <p className="text-gray-300 text-sm sm:text-base leading-6">
            No one should have to face loneliness alone. On Recomune, you can connect with companions anytime—whether you’re seeking friendship, comfort, or simply someone to share your day with. Start meaningful conversations and find the companionship you deserve.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section2;
