import React from "react";
import { Title } from "./Title";
import { useLocation } from 'react-router-dom';

const SuccessView = () => {
    const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get('email');

  return (
    <div className="flex flex-col gap-8 p-10 min-h-screen justify-end">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="60"
        height="60"
        viewBox="0 0 64 64"
      >
        <defs>
          <linearGradient id="a" x1="100%" x2="0%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#2A73FF" />
            <stop offset="100%" stopColor="#00FFF4" />
          </linearGradient>
        </defs>
        <g fill="none">
          <circle cx="32" cy="32" r="32" fill="url(#a)" />
          <path
            stroke="#000"
            strokeWidth="4"
            d="m18.286 34.686 8.334 7.98 19.094-18.285"
          />
        </g>
      </svg>

      <Title text="Thanks for subscribing!" />

      <p className="">
        A confirmation email has been sent to <span className="font-bold">{decodeURIComponent(email)}</span>. Please open
        it and click the button inside to confirm your subscription.
      </p>
      <button type='submit' className="rounded-lg bg-blue-950 p-4 text-gray-200 mt-64">
        Dismiss message
      </button>
    </div>
  );
};

export default SuccessView;
