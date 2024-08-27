'use client';

import React, { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { HandIcon } from "@heroicons/react/outline";
import styles from "./TopSection.module.css";

const words = ["word 1", "word 2", "word 3"];

const TopSection: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFade(false); // Start fading out
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setFade(true); // Start fading in
      }, 500); // Duration of the fade-out transition
    }, 3000); // Total duration including the fade-out and fade-in

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeaderVisible(entry.intersectionRatio > 0.2);
      },
      {
        root: null,
        threshold: [0.2],
        rootMargin: "-20%",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col justify-between w-screen h-screen"
    >
      {/* Background video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://video.wixstatic.com/video/c837a6_518925604ea94963890d43b5f41aa5bf/1080p/mp4/file.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay content */}
      <div className="relative z-10 flex flex-col justify-between w-full h-full">
        {/* Header */}
        {isHeaderVisible && (
          <header
            className={`${styles.header} ${
              isScrolled ? styles.headerScrolled : styles.headerNotScrolled
            }`}
          >
            <div className="flex items-center justify-between w-full">
              {/* Left side with logo and name */}
              <div className="flex items-center">
                <img
                  src="/Odyssey-whiteOT-logo-v1.png"
                  alt="Volaso Logo"
                  className="h-20 w-20"
                />
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
        )}

        {/* Hero Banner Content */}
        <div className="absolute top-1/4 left-8 bg-opacity-50 p-8 text-white max-w-md">
          <h1 className="text-3xl font-bold mb-4 text-white">
            Enterprise-grade{" "}
            <span
              className={`text-blue-400 transition-opacity duration-500 ${
                fade ? "opacity-100" : "opacity-0"
              }`}
            >
              {words[currentWordIndex]}
            </span>{" "}
            <br />
            to accelerate and grow your business!
          </h1>
          
          {/* Call to Action Buttons */}
          <div className="mt-8 space-x-4">
            <button className="px-6 py-3 bg-green-300 hover:bg-green-500 text-white font-bold rounded">
              Button 1
            </button>
            <button className="px-6 py-3 bg-red-300 hover:bg-red-500 text-white font-bold rounded">
              Button 2
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSection;
