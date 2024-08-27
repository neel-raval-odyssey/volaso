'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styles from './VisionSection.module.css';

const VisionSection: React.FC = () => {
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

  return (
    <section ref={sectionRef} className="bg-black text-white py-16 w-screen h-screen">
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
        <h6 className="text-sm text-left">VISION</h6>

        {/* Animated Heading */}
        <motion.h1
          className="text-8xl md:text-8xl font-bold mt-4 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          We’re Here to Revolutionize the World of Local Shipping
        </motion.h1>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row justify-between items-start mt-12 px-20">
        {/* Left Column */}
        <div className="bg-black text-white p-8 max-w-lg md:w-1/2">
          <p className="text-left">
            This is the space to introduce visitors to the business or brand.
            Briefly explain who's behind it, what it does and what makes it
            unique. Share its core values and what this site has to offer.
          </p>
        </div>

        {/* Right Column */}
        <div className="max-w-lg md:w-1/2 flex justify-end">
          <img
            src="https://static.wixstatic.com/media/84770f_4768df327fc14639ab855ebaa4699255~mv2.jpg/v1/fill/w_147,h_104/Robot_Dark_Background.jpg"
            alt="Vision Image"
            className="object-contain w-1/2"
          />
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
