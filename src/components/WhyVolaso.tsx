'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styles from './WhyVolaso.module.css';
import { ArrowRightIcon } from '@heroicons/react/outline';

const WhyVolaso: React.FC = () => {
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
      controls.start({ width: '90%' });
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
          <div className="h-0.5 bg-gray-500" style={{ width: '10%' }}></div>
        </div>
      </div>

      {/* Text Section */}
      <div className={`pl-20 mt-8 ${styles.textContainer}`}>
        <h6 className="text-sm text-left">WHY VOLASO</h6>

        {/* Animated Heading */}
        <motion.h1
          className="text-8xl md:text-8xl font-bold mt-4 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          A different approach, using a new method of manufacturing
        </motion.h1>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row justify-between items-start mt-12 px-20">

        {/* Left Column */}
        <div className="max-w-lg md:w-1/2 flex justify-end">
          {/* <img
            src="https://static.wixstatic.com/media/84770f_4768df327fc14639ab855ebaa4699255~mv2.jpg/v1/fill/w_147,h_104/Robot_Dark_Background.jpg"
            alt="Vision Image"
            className="object-contain w-1/2"
          /> */}
        </div>

        {/* Right Column */}
        <div className="bg-black text-white p-8 max-w-lg md:w-1/2">
          <p className="text-left">
            This is the space to introduce visitors to the business or brand.
            Briefly explain who's behind it, what it does and what makes it
            unique. Share its core values and what this site has to offer.
          </p>
          <span className="inline-flex items-center group relative">
            <span className="flex items-center relative z-10 text-gray-500 group-hover:text-white transition-colors duration-300">
              Read More 
              <ArrowRightIcon className="h-6 w-6 ml-2 group-hover:hidden" />
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6 ml-2 hidden group-hover:inline-flex">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25" />
              </svg>
            </span>
            <span className="absolute bottom-[-2px] left-0 w-full h-[1px] bg-gray-500 group-hover:bg-white transition-colors duration-300"></span>
          </span>
        </div>
      </div>

      {/* Image Section */}
      <div className='h-screen'>
        <img
            src="https://static.wixstatic.com/media/84770f_d8e3b8a927114130962994bc367c5ee8~mv2.jpg/v1/fill/w_2994,h_1264,fp_0.56_0.51,q_90,usm_0.66_1.00_0.01,enc_auto/84770f_d8e3b8a927114130962994bc367c5ee8~mv2.jpg"
        />
      </div>
    </section>
  );
};

export default WhyVolaso;
