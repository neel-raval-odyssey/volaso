'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styles from './Company.module.css';

const Company: React.FC = () => {
  const controls = useAnimation();
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is visible
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
  }, [sectionRef]);

  useEffect(() => {
    if (inView) {
      controls.start({ width: '33%' });
    } else {
      controls.start({ width: '0%' });
    }
  }, [inView, controls]);

  // Array of stats
  const stats = [
    { number: '247', label: 'Employees', width: '20%' },
    { number: '5', label: 'Core Teams', width: '33%' },
    { number: '326', label: 'Partners Worldwide', width: '50%' },
    { number: '$200m', label: 'Capital', width: '40%' },
  ];

  return (
    <section ref={sectionRef} className="bg-black text-white py-16 w-screen h-auto">
      {/* Central Line */}
      <div className="flex justify-center">
        <div className="w-11/12 flex">
          <motion.div
            className="h-0.5 bg-white"
            initial={{ width: '0%' }}
            animate={controls}
            transition={{ duration: 1, ease: 'easeOut' }}
          ></motion.div>
          <div className="h-0.5 bg-gray-500" style={{ width: '67%' }}></div>
        </div>
      </div>

      {/* Text Section */}
      <div className={`pl-20 mt-8 ${styles.textContainer}`}>
        <h6 className="text-sm text-left">COMPANY</h6>

        {/* Animated Heading */}
        <motion.h1
          className="text-8xl md:text-8xl font-bold mt-4 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          Volaso in Numbers
        </motion.h1>
      </div>

      {/* Stats Section */}
      <div className="mt-16 flex justify-around">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <h2 className="text-6xl font-bold">{stat.number}</h2>
            <div className="relative w-16 mx-auto my-2">
              <div className="h-0.5 bg-gray-500 absolute w-full"></div>
              <motion.div
                className="h-0.5 bg-white absolute"
                initial={{ width: '0%' }}
                animate={{ width: inView ? stat.width : '0%' }}
                transition={{ duration: 1, ease: 'easeOut' }}
              ></motion.div>
            </div>
            <p className="text-lg mt-2">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Video Section */}
      <div className="mt-16">
        <video
          className="w-screen"
          autoPlay
          loop
          muted
          playsInline
          src="https://video.wixstatic.com/video/c837a6_cec501896c5b45589d6eda4ebb8cad5c/720p/mp4/file.mp4"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default Company;
