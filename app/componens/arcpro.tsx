"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CircleProgress = ({ progress = 75, size = 300, stroke = 38 }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => setValue(progress), 300);
    return () => clearTimeout(timeout);
  }, [progress]);

  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <div
      className=" relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size}>
        {/* Background circle */}
        <circle
          stroke="#172A5A"
          fill="transparent"
          strokeWidth={stroke}
          cx={size / 2}
          cy={size / 2}
          r={radius}
        />

        {/* Animated progress circle */}
        <motion.circle
          stroke="#2563EA"
          fill="transparent"
          strokeWidth={stroke-10}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
          style={{
            transform: "rotate(-90deg)",
            transformOrigin: "50% 50%",
          }}
        />
      </svg>

      {/* Center content */}
      <div className="absolute flex flex-col items-center justify-center text-center">
        <h1 className="text-8xl font-extrabold text-[#2563EA]">
          {Math.round(value)}%
        </h1>
        <p className="text-lg text-white tracking-wide w-50">Social connection can reduce</p>
      </div>
    </div>
  );
};

export default CircleProgress;
