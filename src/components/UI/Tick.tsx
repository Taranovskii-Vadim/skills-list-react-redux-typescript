import * as React from "react";

const Tick: React.FC = () => {
  return (
    <svg
      width="11"
      height="8"
      viewBox="0 0 11 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className='tick'
    >
      <path
        d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Tick;
