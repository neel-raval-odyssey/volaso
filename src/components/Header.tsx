import React from "react";
import { Button } from "./ui/button";
import { HandIcon } from "@heroicons/react/outline";

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between p-4">
      {/* Left side with logo and name */}
      <div className="flex items-center">
        <span className="text-xl font-bold mr-2">Volaso</span>
        <svg
          preserveAspectRatio="xMidYMid meet"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 47.998 40"
          height="40"
          width="48"
        >
          <g>
            <path
              fill="#010203"
              d="M21.255 24.996a5.873 5.873 0 0 1 .014 5.976L15.947 40l-5.718-9.7 4.51-7.652H5.72L0 12.948h10.642a6.13 6.13 0 0 1 5.278 3l1.527 2.591.003.002 3.805 6.455Z"
              clipRule="evenodd"
              fillRule="evenodd"
            />
            <path
              fill="#010203"
              d="M26.744 24.98a5.873 5.873 0 0 0-.014 5.975l5.322 9.028 5.718-9.7-4.51-7.651h9.02l5.718-9.7H37.356a6.13 6.13 0 0 0-5.278 3l-1.527 2.591-.001.001-3.806 6.456Z"
              clipRule="evenodd"
              fillRule="evenodd"
            />
            <path
              fill="#010203"
              d="M29.454 12.003a6 6 0 0 0 5.169-2.953L39.958 0H28.522L24.01 7.653 19.5 0H8.062l5.336 9.05a6 6 0 0 0 5.168 2.953h10.888Z"
              clipRule="evenodd"
              fillRule="evenodd"
            />
          </g>
        </svg>
      </div>

      {/* Right side with buttons */}
      <div className="flex space-x-4">
        <Button variant="ghost">Product</Button>
        <Button variant="ghost">About</Button>
        <Button>
          <HandIcon className="w-5 h-5 mr-2" />
          Request a demo
        </Button>
      </div>
    </header>
  );
};

export default Header;