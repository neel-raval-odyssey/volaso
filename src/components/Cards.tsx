'use client'
import Image from 'next/image';
import styles from './Cards.module.css';
import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef } from 'react';

interface CardProps {
  i: number;
  title: string;
  description: string;
  src: string;
  url?: string; // Make it optional
  color: string;
  progress: any; // Replace 'any' with the correct type if possible
  range: [number, number];
  targetScale: number;
  number1: string;
  number2: string;
  unit1: string;
  unit2: string;
  type1: string;
  type2: string;
}

const Card: React.FC<CardProps> = ({i, title, description, src, url, color, progress, range, targetScale, number1, number2, unit1, unit2, type1, type2}) => {

  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className={styles.cardContainer}>
      <motion.div 
        style={{backgroundColor: color, scale, top:`calc(-5vh + ${i * 25}px)`}} 
        className={styles.card}
      >
        <h2>{title}</h2>
        <div className={styles.body}>
                <div className={styles.metrics}>
                    <div className={styles.metric}>
                        <span className='text-2xl font-bold' style={{ marginRight: '1rem' }}>
                            {number1} <span className={styles.unit}>{unit1}</span>
                        </span>
                        <span className={styles.type}>{type1}</span>
                    </div>
                    <div className={styles.separator}></div>
                    <div className={styles.metric}>
                        <span className='text-2xl font-bold' style={{ marginRight: '1rem' }}>
                            {number2} <span className={styles.unit}>{unit2}</span>
                        </span>
                        <span className={styles.type}>{type2}</span>
                    </div>
                    <p className='mt-2' style={{maxWidth: '20vw'}}>{description}</p>
                </div>
            <div className={styles.imageContainer}>
                <motion.div
                className={styles.inner}
                style={{scale: imageScale}}
                >
                <Image
                    fill
                    src={`${src}`}
                    alt="image" 
                />
                </motion.div>
            </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Card;