'use client';
import styles from './ProductSection.module.css';
import { projects } from './data';
import Card from './Cards';
import { useScroll } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { motion } from "framer-motion";

const ProductSection: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      // Cleanup on component unmount
      lenis.destroy();
    };
  }, []);

  return (
    <section className="bg-white text-black py-16 w-screen h-screen">
      {/* Central Line */}
      <div className="flex justify-center">
        <div className="w-11/12 flex">
          <div className="h-0.5 bg-black" style={{ width: '10%' }}></div>
          <div className="h-0.5 bg-gray-200" style={{ width: '90%' }}></div>
        </div>
      </div>

      {/* Text Section */}
      <div className={`pl-20 mt-8 ${styles.textContainer}`}>
        <h6 className="text-sm text-left">Our Product</h6>

        {/* Animated Heading */}
        <motion.h1
          className="text-8xl md:text-8xl mt-4 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          Fully Autonomous,
          <br />
          Uncompromisingly Sustainable
        </motion.h1>
      </div>

      {/* Cards Section */}
      <main ref={container} className={styles.main}>
        {projects.map((project, i) => {
          const targetScale = 1 - ((projects.length - i) * 0.05);
          return (
            <Card
              key={`p_${i}`}
              i={i}
              {...project}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </main>
    </section>
  );
};

export default ProductSection;
