"use client";
import { useEffect, useRef, useState } from "react";
import Section2 from "./componens/section2";
import HeroSection from "./componens/HeroSection";
import { recomuneData } from "./cards"
import CircleProgress from "./componens/arcpro";
import StackingCards from "./componens/StackingCards";
import DownloadButton from "./componens/DownloadButton";
import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { Facebook,Youtube,Instagram,Linkedin } from 'lucide-react';



export default function Page() {
  const [approachNumber, setApproachNumber] = useState("01");

  // Create 3 refs for the 3 dots
  const triggerRefs = [
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
  ];

  useEffect(() => {
    const handleScroll = () => {
      triggerRefs.forEach((ref, index) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();

          if (rect.top + 450 < window.innerHeight * 0.5) {
            setApproachNumber(String(index + 1).padStart(2, "0"));
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full">
      <section>
        <HeroSection />
      </section>

      <section>
        <Section2 />
      </section>












      <section className="relative w-full h-fill flex flex-col bg-[#040C20] text-white  px-60 max-[2000px]:px-60  max-[1800px]:px-20 max-[1000px]:px-6">
  <div className="absolute left-1/2 top-100 h-8/9 bg-gradient-to-b w-0.5 from-transparent via-[#2563EA] to-transparent max-[1000px]:hidden" />

  {/* Dots (hidden below 1000px) */}
  <div
    ref={triggerRefs[0]}
    className="absolute left-[49.6%] top-[45vh] w-5 h-5 rounded-full max-[1000px]:hidden"
  />
  <div
    ref={triggerRefs[1]}
    className="absolute left-[49.6%] top-[145vh] w-5 h-5 rounded-full bg-white border-2 border-[#040C20] max-[1000px]:hidden"
  />
  <div
    ref={triggerRefs[2]}
    className="absolute left-[49.6%] top-[245vh] w-5 h-5 rounded-full bg-white border-2 border-[#040C20] max-[1000px]:hidden"
  />

  {/* Main content */}
  <div className="z-10 flex flex-col items-center text-center max-w-5xl space-y-6 mt-40 mx-auto ">
    <p className="text-lg font-bold text-[#2563EA] lg:text-xl md:text-lg sm:text-xs">The Power of Connection</p>
    <h1 className="text-3xl  lg:text-6xl md:text-5xl sm:text-3xl font-bold leading-tight">
      Conversations That Support A Healthier,{" "}
      <span className="text-[#2563EA]">Happier Life</span> For Seniors
    </h1>
    <p className="text-sm md:text-[16px] text-gray-400 lg:text-xl md:text-xs sm:text-xs">
      Regular Social Interaction Isn’t Just Enjoyable—It’s Essential For Mental
      Sharpness, <br /> Emotional Well-Being, And Physical Health.
    </p>
  </div>

  {/* Sticky section name */}
  <div className="sticky top-20 text-white/10 mt-30 font-bold text-9xl max-[1600px]:text-9xl  max-[1500px]:text-8xl max-[1500px]:ml-[calc(50%-500px)]  self-start ml-[calc(50%-700px)] transition-all duration-500 max-[1000px]:hidden">
    {approachNumber} <br />
    {approachNumber === "01"
      ? "Approach"
      : approachNumber === "02"
      ? "Benefits"
      : approachNumber === "03"
      ? "Friends"
      : "Approach"}
  </div>

  {/* Bottom content */}
  <div className="flex flex-col items-end max-[1000px]:items-center max-[1000px]:w-full">
    {recomuneData.map((section, index) => (
      <div
        key={index}
        className={`self-end flex flex-col justify-end w-[40%] h-[90vh] ${
          index === 0 ? "lg:-mt-40 mt-40 " : "mt-30"
        } max-[1000px]:w-full max-[1000px]:items-center max-[1000px]:text-center`}
      >
        <h1 className="hidden max-[1000px]:block text-white/20 text-6xl mb-5">
  {section.h1}
</h1>

        <h1 className="text-5xl md:text-3xl font-bold mb-3 max-[1000px]:text-2xl">
          {section.title}
        </h1>

        <p className="text-[16px] leading-8 text-[#B5BED6]">
          {section.description}
        </p>

        <h2 className="text-xl leading-8 text-[#2563EA] font-bold my-3">
          {section.subtitle}
        </h2>

        <ul className="list-disc pl-9 marker:text-[#2563EA] marker:text-4xl space-y-1 text-[#B5BED6] max-[1000px]:pl-5 max-[1000px]:text-left">
          {section.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>

        <div className="bg-[url('/Rectangle1.svg')] bg-cover bg-no-repeat bg-center overflow-hidden w-full h-full flex justify-center my-5 rounded-4xl">
          <img
            src={section.image}
            alt=""
            className="object-contain h-[90%] m-5"
          />
        </div>
      </div>
    ))}
  </div>
</section>











         <section className="bg-[#040C20] mb-0 pb-0 overflow-hidden">


        <div className="z-10 flex flex-col items-center text-center max-w-3xl space-y-6 mt-40 mx-auto ">
  <p className="text-lg font-bold text-[#2563EA]">The Power of Connection</p>
  <h1 className="text-5xl md:text-5xl font-bold leading-tight text-white">
    Why <span className="text-[#2563EA]">Social Connection</span> Matters
  </h1>
  <p className="text-sm md:text-[16px] text-gray-400">
    Social connection is more than just a feel-good experience — it’s a proven key to healthier aging. 
    Meaningful interactions can reduce loneliness, lower stress, 
    and even strengthen memory and cognitive health.
  </p>
</div>
<div className="h-fit flex flex-col lg:flex-row mg:flex-col sm:flex-col items-center justify-center gap-10 bg-[#040C20] text-white p-10">
  {/* Left side cards */}
  <div className="flex flex-col gap-6">
  <div className="w-66 rounded-xl flex flex-col justify-center p-5 px-2 lg:px-5 md:px-5 sm:px-2 lg:w-99 md:w-99 sm:66 bg-[#071330] transition-transform duration-300 hover:scale-105 hover:bg-[#0C1B40]">
       <h2 className="text-xl font-bold text-[#2563EA]">Stay Mentally Sharp</h2>
      <p className="text-lg text-gray-400 mt-2">
        Conversations keep the brain active and memory strong.
      </p>
    </div>

      <div className="w-66 rounded-xl flex flex-col justify-center p-5 px-2 lg:px-5 md:px-5 sm:px-2 lg:w-99 md:w-99 sm:66 bg-[#071330] transition-transform duration-300 hover:scale-105 hover:bg-[#0C1B40]">
  <h2 className="text-xl font-bold text-[#2563EA]">Feel Emotionally Connected</h2>
      <p className="text-lg text-gray-400 mt-2">
        Talking regularly with friends boosts happiness and lowers stress.
      </p>
    </div>

    <div className="w-66 rounded-xl flex flex-col justify-center p-5 px-2 lg:px-5 md:px-5 sm:px-2 lg:w-99 md:w-99 sm:66 bg-[#071330] transition-transform duration-300 hover:scale-105 hover:bg-[#0C1B40]">
      <h2 className="text-xl font-bold text-[#2563EA]">Live Healthier, Longer</h2>
      <p className="text-lg text-gray-400 mt-2">
        Strong relationships support physical health and overall wellness.
      </p>
    </div>
  </div>

  {/* Center circle */}
 <CircleProgress
  progress={40}
  size={
   450
  }
/>


  {/* Right side cards */}
  <div className="flex flex-col justify-center gap-6">
   <div className="w-66 rounded-xl flex flex-col justify-center p-5 px-2 lg:px-5 md:px-5 sm:px-2 lg:w-99 md:w-99 sm:66 bg-[#071330] transition-transform duration-300 hover:scale-105 hover:bg-[#0C1B40]">
         <h2 className="text-xl font-bold text-[#2563EA]">Always Available Support</h2>
      <p className="text-lg text-gray-400 mt-2">
        Talk to someone anytime, reducing loneliness on demand.
      </p>
    </div>

      <div className="w-66 rounded-xl flex flex-col justify-center p-5 px-2 lg:px-5 md:px-5 sm:px-2 lg:w-99 md:w-99 sm:66 bg-[#071330] transition-transform duration-300 hover:scale-105 hover:bg-[#0C1B40]">
   <h2 className="text-xl font-bold text-[#2563EA]">Personalized Friendships</h2>
      <p className="text-lg text-gray-400 mt-2">
        Match with people who fit your interests and needs.
      </p>
    </div>

     <div className="w-66 rounded-xl flex flex-col justify-center p-5 px-2 lg:px-5 md:px-5 sm:px-2 lg:w-99 md:w-99 sm:66 bg-[#071330] transition-transform duration-300 hover:scale-105 hover:bg-[#0C1B40]">
     <h2 className="text-xl font-bold text-[#2563EA]">Peace of Mind for Caregivers</h2>
      <p className="text-lg text-gray-400 mt-2">
        Reliable social interaction helps reduce caregiver stress.
      </p>
    </div>
  </div>
</div>
<div className="w-full h-full overflow-hidden p-5 sm:p-10 md:p-20">
  <video
    src="30fps.mp4"
    autoPlay
    loop
    muted
    playsInline
  className="w-full h-[50vh]  sm:h-[50vh] md:h-[70vh]  lg:h-[90vh] object-cover rounded-4xl"
  ></video>
      
</div>



      
    </section>
    <StackingCards />
    <section className="bg-[#040C20] text-white py-24 px-10  md:px-28 flex flex-col items-center">
  <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center ">
    Your <span className="text-[#2563EA]">Trusted Friend</span>, Always Available
  </h2>

  <div className="grid md:grid-cols-3 gap-16 items-center max-w-9xl">
    {/* Left image */}
    <div className="h-4/5 flex justify-center object-contain">
      <img
        src="/beautiful-mature-woman-having-fun-time1.svg"
        alt="Woman taking selfie"
        className="rounded-2xl w-[450px] object-cover"
      />
    </div>

    {/* Right side text */}
    <div className="flex flex-col space-y-8">
      <div>
        <h3 className="text-[#2563EA] text-lg font-bold">01</h3>
        <h4 className="text-2xl font-semibold mt-2">Thoughtful Companionship</h4>
        <p className="text-gray-400 mt-1 leading-relaxed">
          ReComune brings real, heartfelt conversations with a virtual friend who listens,
          understands, and responds with empathy.
        </p>
      </div>

      <div>
        <h3 className="text-[#2563EA] text-lg font-bold">02</h3>
        <h4 className="text-2xl font-semibold mt-2">Effortless Experience</h4>
        <p className="text-gray-400 mt-1 leading-relaxed">
          With a clean, intuitive design, ReComune makes it easy to chat, revisit conversations,
          and connect — all with a tap.
        </p>
      </div>

      <div>
        <h3 className="text-[#2563EA] text-lg font-bold">03</h3>
        <h4 className="text-2xl font-semibold mt-2">Safe & Private Space</h4>
        <p className="text-gray-400 mt-1 leading-relaxed">
          ReComune keeps your conversations private and secure, creating a safe, judgment-free
          space to be yourself.
        </p>
      </div>

      <div>
        <h3 className="text-[#2563EA] text-lg font-bold">04</h3>
        <h4 className="text-2xl font-semibold mt-2">Always Here for You</h4>
        <p className="text-gray-400 mt-1 leading-relaxed">
          Day or night, your companion is always there — for support, conversation, or simply to
          keep you company.
        </p>
      </div>
    </div>
    {/* Right image */}
    <div className="mt-16 pr-7 flex justify-end w-full max-w-7xl">
    <video
    src="30fps.mp4"
    autoPlay
    loop
    muted
    playsInline
    className="w-full object-cover rounded-4xl"
  ></video>
  </div>
  </div>

  
</section>
<footer className="bg-[#05112B] text-white text-center pt-16">
  {/* Logo and tagline */}
  <div className="flex flex-col items-center space-y-4">
      <img src="/Logo.svg" alt="ReComune Logo" className="w-76" />
      
  </div>

  {/* Tagline */}
  <p className="text-gray-400 mt-6 mb-8 text-sm">
    Connecting people, fostering meaningful conversations, and making every interaction count.
  </p>

  <hr className="border-gray-700 w-2/4 mx-auto mb-8" />

  {/* Links + App Buttons */}
  <div className="flex flex-col  items-center justify-center gap-6">
    <div className="flex space-x-8 text-gray-300 text-sm">
      <a href="#" className="hover:text-[#2563EA] transition">Term & Condition</a>
      <a href="#" className="hover:text-[#2563EA] transition">Privacy Policy</a>
      <a href="#" className="hover:text-[#2563EA] transition">Support</a>
    </div>

    <div className="flex space-x-4 mt-6 md:mt-0">
       <div className="flex flex-wrap gap-4 mt-8">
              <DownloadButton
                icon={<FaApple size={28} />}
                storeName="App Store"
                className="flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-gray-100 transition-all duration-300"
              />
              <DownloadButton
                icon={<IoLogoGooglePlaystore size={28} />}
                storeName="Play Store"
                className="flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-gray-100 transition-all duration-300"
              />
            </div>
    </div>
  </div>

  {/* Bottom bar */}
  <div className="bg-[#2563EA] mt-12 py-4 flex flex-col md:flex-row items-center justify-between px-8">
    <p className="text-sm text-gray-200">
      © 2025 ReComune © 2025 | All Rights Reserved.
    </p>

    <div className="flex space-x-3 mt-4 md:mt-0">
      <a href="#" className="w-9 h-9 flex items-center justify-center border border-white/40 hover:bg-[#1B2D5C] rounded-md">
        <i className="fa-brands fa-facebook-f"><Facebook className="text-white w-4"/></i>
      </a>
     <a href="#" className="w-9 h-9 flex items-center justify-center  border border-white/40 bg-[#0A122A] hover:bg-[#1B2D5C] rounded-md">
         <i className="fa-brands fa-youtube"><Youtube className="text-white w-4"/></i>
      </a>
      <a href="#" className="w-9 h-9 flex items-center justify-center border border-white/40 hover:bg-[#1B2D5C] rounded-md">
        <i className="fa-brands fa-instagram"> <Instagram className="text-white w-4"/></i>
      </a>
      <a href="#" className="w-9 h-9 flex items-center justify-center border border-white/40 hover:bg-[#1B2D5C] rounded-md">
        <i className="fa-brands fa-linkedin-in"> <Linkedin className="text-white w-4"/></i>
      </a>
    </div>
  </div>
</footer>


    </div>
  );
}
