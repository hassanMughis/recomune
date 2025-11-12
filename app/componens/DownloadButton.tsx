"use client";

import React from "react";

interface DownloadButtonProps {
  icon: React.ReactNode;
  Name?: string;
  storeName?: string;
  className?: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({
  icon,
  Name = "Download on the",
  storeName = "",
  className = "",
}) => {
  return (
    <button
      className={`flex items-center gap-2 sm:gap-2 px-3 py-2 sm:px-5 sm:py-2 transition-all duration-300 ${className}`}
    >
      <div className="text-[22px] sm:text-[30px]">{icon}</div>
      <div className="flex flex-col text-left leading-tight">
        <span className="text-xs sm:text-sm">{Name}</span>
        <span className="">{storeName}</span>
      </div>
    </button>
  );
};

export default DownloadButton;
