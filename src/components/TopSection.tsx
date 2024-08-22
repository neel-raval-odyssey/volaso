'use client';

import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { HandIcon } from "@heroicons/react/outline";
import styles from "./TopSection.module.css";

const TopSection: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className="relative flex flex-col justify-between w-screen h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://static.wixstatic.com/media/c837a6_518925604ea94963890d43b5f41aa5bff000.jpg')",
      }}
    >
      {/* Header */}
      <header
        className={`${styles.header} ${
          isScrolled ? styles.headerScrolled : styles.headerNotScrolled
        }`}
      >
        <div className="flex items-center justify-between w-full">
          {/* Left side with logo and name */}
          <div className="flex items-center">
            <span className="text-xl font-bold mr-2 text-white">Volaso</span>
            <svg
              preserveAspectRatio="xMidYMid meet"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 47.998 40"
              height="40"
              width="48"
            >
              <g>
                <path
                  fill="#FFFFFF"
                  d="M21.255 24.996a5.873 5.873 0 0 1 .014 5.976L15.947 40l-5.718-9.7 4.51-7.652H5.72L0 12.948h10.642a6.13 6.13 0 0 1 5.278 3l1.527 2.591.003.002 3.805 6.455Z"
                  clipRule="evenodd"
                  fillRule="evenodd"
                />
                <path
                  fill="#FFFFFF"
                  d="M26.744 24.98a5.873 5.873 0 0 0-.014 5.975l5.322 9.028 5.718-9.7-4.51-7.651h9.02l5.718-9.7H37.356a6.13 6.13 0 0 0-5.278 3l-1.527 2.591-.001.001-3.806 6.456Z"
                  clipRule="evenodd"
                  fillRule="evenodd"
                />
                <path
                  fill="#FFFFFF"
                  d="M29.454 12.003a6 6 0 0 0 5.169-2.953L39.958 0H28.522L24.01 7.653 19.5 0H8.062l5.336 9.05a6 6 0 0 0 5.168 2.953h10.888Z"
                  clipRule="evenodd"
                  fillRule="evenodd"
                />
              </g>
            </svg>
          </div>

          {/* Right side with buttons */}
          <div className="flex space-x-4">
            <Button variant="ghost" className="text-white">Product</Button>
            <Button variant="ghost" className="text-white">About</Button>
            <Button>
              <HandIcon className="w-5 h-5 mr-2" />
              Request a demo
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Banner Content */}
      <div className="absolute top-1/4 left-8 bg-opacity-50 p-8 text-white max-w-md">
        <h1 className="text-4xl font-bold mb-4">The Future of Delivery Is Here</h1>
        <p className="text-xl leading-relaxed">
          DISCOVER A GREENER, FASTER SELF-DRIVING DELIVERY SOLUTION WITH VOLASO.
        </p>

        {/* Animated line near the car */}
        {/* <div style={{ marginLeft: '30rem', marginTop: '-2.1rem'}}>
            <div className={styles.lineContainer}>
                <div className={styles.line}></div>
            </div>
        </div> */}
        {/* <div className="relative" style={{ marginTop: '-2.1rem' }}>
            <div className={styles.lineContainer} style={{ position: 'absolute', left: '60rem' }}>
                <div className={styles.line}></div>
            </div>
        </div> */}
      </div>
    </section>
  );
};

export default TopSection;