import React from "react";
import "./icon-style.min.css";
import { svgProps } from "./iconProps";

const ArrowBackIcon = ({ color }: svgProps) => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      preserveAspectRatio="xMidYMid meet"
      className="icon arrow-icon"
    >
      <g
        transform="translate(0.000000,16.000000) scale(0.100000,-0.100000)"
        fill="#000000"
        stroke="none"
      >
        <path
          d="M227 594 c-72 -22 -160 -111 -181 -183 -35 -118 -11 -209 74 -293 86
-84 175 -106 290 -72 75 22 162 109 184 184 35 116 11 208 -74 292 -85 83
-180 107 -293 72z m208 -42 c47 -24 95 -73 121 -122 26 -49 26 -171 0 -220
-26 -49 -74 -98 -121 -123 -31 -17 -58 -22 -115 -22 -85 0 -133 20 -186 77
-54 57 -69 95 -69 178 0 83 15 121 69 178 31 34 70 58 116 73 41 14 142 3 185
-19z"
        />
        <path
          d="M247 372 c-20 -21 -37 -45 -37 -53 0 -18 70 -89 88 -89 19 0 14 25
-9 46 -21 19 -21 19 52 24 45 3 74 10 77 18 3 9 -17 12 -79 12 l-83 0 27 28
c15 15 27 33 27 40 0 23 -26 12 -63 -26z"
        />
      </g>
    </svg>
  );
};

export default ArrowBackIcon;
