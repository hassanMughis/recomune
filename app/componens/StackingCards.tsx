// thanks to oliver: https://www.youtube.com/@olivierlarose1
'use client';
import { ReactLenis } from 'lenis/react';
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { JSX, useRef } from 'react';
import Image from 'next/image';
import DownloadButton from './DownloadButton';
import { FaApple } from 'react-icons/fa';
import { IoLogoGooglePlaystore } from 'react-icons/io5';

const projects = [
  {
    title: 'Global | Emotion-Centered AI Chat',
    description:
      'A lifeline for moments when silence feels heavy. ReComune Voice offers realistic, real-time phone conversations with your virtual friend.',
    list: [
      "24/7 realistic voice chats with live captions",
      "Emotion-aware conversations for deeper connection",
      "Perfect for easing loneliness and lifting your spirits",
      "Just tap to call — your friend is always ready",
    ],
    
    src: 'water.jpg',
    link: '/1.svg',
    color: '#0B1633',
  },
  {
    title: 'Personalized AI Conversations',
    description:
      "'Conversations that feel like they were made just for you. Companion Chat allows users to customize their virtual friend's personality, tone, and topics.'",
    list: [
      "Chat responses tailored to your mood and interests",
"AI learns and evolves with your preferences",
"Share stories, daily updates, or just vent",
"No judgment, just genuine understanding",
    ],
    
    src: 'water.jpg',
      link: '/2.svg',
    color: '#0B1633',
  },
  {
    title: 'Emotional Wellness | Smart Connection',
    description:
      'Though he views photography as a medium for storytelling, Zissou’s images don’t insist on a narrative. Both crisp and ethereal.',
list: [
      'Secure, judgment-free zone for meaningful chats',
'Text-to-speech with real-time captions',
'Simple, intuitive interface — no learning curve',
'Promotes mindfulness, connection, and calm',
    ],
      
    src: 'water.jpg',
    link: '/3.svg',
    color: '#0B1633',
  },
];

export default function index(): JSX.Element {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <ReactLenis root>
      <main className='bg-black' ref={container}>
        <section className='text-white h-[70vh] w-full bg-slate-950 grid place-content-center'>
           <div className="z-10 flex flex-col items-center text-center max-w-5xl space-y-6 mx-auto mb-40  ">
    <p className="text-lg font-bold text-[#2563EA] lg:text-xl md:text-lg sm:text-xs">The Power of Connection</p>
    <h1 className="text-3xl  lg:text-6xl md:text-5xl sm:text-3xl font-bold leading-tight">
      Explore the  {" "}
      <span className="text-[#2563EA]">World</span> of  ReComune
    </h1>
    <p className="text-sm md:text-[16px] text-gray-400 lg:text-xl md:text-xs sm:text-xs">
      Step into a world where you're never truly alone. ReComune brings the warmth of real  <br /> conversation through your very own AI companion
    </p>
  </div>
        </section>

        <section className='text-white w-full bg-slate-950'>
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                url={project?.link}
                src={project?.src}
                title={project?.title}
                color={project?.color}
                description={project?.description}
                list={project?.list || []}  // pass list here
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </section>
      </main>
    </ReactLenis>
  );
}

interface CardProps {
  i: number;
  title: string;
  description: string;
  src: string;
  url: string;
  color: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
  list: string[];
}

export const Card: React.FC<CardProps> = ({
  i,
  title,
  description,
  src,
  url,
  color,
  progress,
  range,
  targetScale,
  list,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
  ref={container}
  className=' h-screen flex items-center justify-center sticky top-0 '
>
  <motion.div
    style={{
      backgroundColor: color,
      scale,
      top: `calc(-5vh + ${i * 25}px)`,
    }}
    className={`flex flex-col relative top-[25%] h-[700px] w-[90%] rounded-3xl border-2 border-[#142759] lg:p-10  p-2 origin-top`}
  >
    <div className="flex flex-col md:flex-col sm:flex-col lg:flex-row h-full gap-10">
      <div className="w-full lg:w-[40%] relative flex flex-col h-90%">
        <h2 className="lg:text-4xl md:text-3xl sm:text-2xl text-2xl font-bold mb-3 mt-10">{title}</h2>
        <p className="lg:text-xl md:text-lg sm:text-sm text-xs leading-8 text-[#B5BED6]">{description}</p>

        {list.length > 0 && (
          <>
            <h3 className=" lg:text-3xl md:text-2xl sm:text-1xl text-xl font-bold mb-3 pt-10 text-[#2563EA]">
              Key Highlights:
            </h3>
            <ul className="list-disc pl-9 marker:text-[#2563EA] marker:text-4xl space-y-1 text-[#B5BED6]">
              {list.map((item, idx) => (
                <li className='lg:text-xl md:text-lg sm:text-sm text-xs' key={idx}>{item}</li>
              ))}
            </ul>
          </>
        )}

        <div className="flex  gap-4 mt-auto">
          <DownloadButton

            icon={<FaApple size={28} />}
            storeName="App Store"
            className="flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-gray-100 transition-all duration-300 max-[1400px]:hidden"
          />
          <DownloadButton
            icon={<IoLogoGooglePlaystore size={28} />}
            storeName="Play Store"
            className="flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-gray-100 transition-all duration-300 max-[1400px]:hidden"
          />
        </div>
      </div>

      <div className="relative w-full lg:w-[60%] h-full rounded-lg overflow-hidden">
        <motion.div
          className="w-full h-full"
          style={{ scale: imageScale }}
        >
          <Image fill src={url} alt='image' className='object-cover' />
        </motion.div>
      </div>
    </div>
  </motion.div>
</div>

  );
};
