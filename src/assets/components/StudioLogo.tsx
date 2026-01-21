import React from "react";

export default function StudioLogo({ className = "w-10 h-10" }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle 
        cx="50" 
        cy="50" 
        r="48" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeDasharray="4 2"
        className="opacity-30"
      />
      <path
        d="M50 20C50 20 30 45 30 60C30 71.0457 38.9543 80 50 80C61.0457 80 70 71.0457 70 60C70 45 50 20 50 20Z"
        fill="currentColor"
      />
      <path
        d="M50 35C50 35 40 50 40 60C40 65.5228 44.4772 70 50 70"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        className="opacity-40"
      />
      <circle cx="50" cy="5" r="2" fill="currentColor" />
      <circle cx="50" cy="95" r="2" fill="currentColor" />
      <circle cx="5" cy="50" r="2" fill="currentColor" />
      <circle cx="95" cy="50" r="2" fill="currentColor" />
    </svg>
  );
}