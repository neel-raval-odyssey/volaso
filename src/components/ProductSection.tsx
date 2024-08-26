'use client';
import styles from './ProductSection.module.css';
import { projects } from './data';
import Card from './Cards';
import { useScroll } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import { motion, useAnimation } from "framer-motion";

const ProductSection: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });
  
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
      controls.start({ width: '10%' });
    } else {
      controls.start({ width: '0%' });
    }
  }, [inView, controls]);

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
