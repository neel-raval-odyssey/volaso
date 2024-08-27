'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styles from './Collaboration.module.css';

const Collaboration: React.FC = () => {
  const controls = useAnimation();
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  const imageLinks = [
    "https://static.wixstatic.com/media/c837a6_44679917ec974196abb9a237cf851205~mv2.jpg/v1/fill/w_370,h_209,q_90/c837a6_44679917ec974196abb9a237cf851205~mv2.jpg",
    "https://static.wixstatic.com/media/c837a6_a9e2b3a77a624b7bb7604e1e5ae16417~mv2.jpg/v1/fill/w_370,h_209,q_90/c837a6_a9e2b3a77a624b7bb7604e1e5ae16417~mv2.jpg",
    "https://static.wixstatic.com/media/c837a6_9f228b29313e42339bcbbe9fdb97a1d9~mv2.jpg/v1/fill/w_370,h_209,q_90/c837a6_9f228b29313e42339bcbbe9fdb97a1d9~mv2.jpg",
    "https://static.wixstatic.com/media/c837a6_83627270620e42829da474a612fff9bd~mv2.jpg/v1/fill/w_370,h_209,q_90/c837a6_83627270620e42829da474a612fff9bd~mv2.jpg"
  ];

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
    <section ref={sectionRef} className="bg-white text-black py-16 w-screen h-screen">
      {/* Central Line */}
      <div className="flex justify-center">
        <div className="w-11/12 flex">
          <motion.div
            className="h-0.5 bg-black"
            initial={{ width: '0%' }}
            animate={controls}
            transition={{ duration: 1, ease: 'easeOut' }}
          ></motion.div>
          <div className="h-0.5 bg-gray-500" style={{ width: '67%' }}></div>
        </div>
      </div>

      {/* Text Section */}
      <div className={`pl-20 mt-8 ${styles.textContainer}`}>
        <h6 className="text-sm text-left">COLLABORATION</h6>

        {/* Animated Heading */}
        <motion.h1
          className="text-8xl md:text-8xl font-bold mt-4 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          Our Industry Partners
        </motion.h1>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row justify-between items-start mt-12 px-20">
        {/* Left Column */}
        <div className="flex flex-col w-1/2">
          {/* Left column left intentionally empty */}
        </div>

        {/* Right Column */}
        <div className="flex flex-col w-1/2 space-y-4">
          <div className="flex justify-between">
            <img src={imageLinks[0]} alt="Partner 1" className="w-1/2 h-auto object-cover"/>
            <img src={imageLinks[1]} alt="Partner 2" className="w-1/2 h-auto object-cover"/>
          </div>
          <div className="flex justify-between">
            <img src={imageLinks[2]} alt="Partner 3" className="w-1/2 h-auto object-cover"/>
            <img src={imageLinks[3]} alt="Partner 4" className="w-1/2 h-auto object-cover"/>
          </div>
        </div>
      </div>
      <div className='p-10'>
        <h1 className='text-9xl'>Be the First to Receive the Latest News From Volaso.</h1>
      </div>
    </section>
  );
};

export default Collaboration;
