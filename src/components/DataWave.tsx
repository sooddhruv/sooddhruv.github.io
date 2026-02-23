import { motion } from 'motion/react';
import { isReducedMotion } from '../lib/motion';

export function DataWave() {
  const reducedMotion = isReducedMotion();

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-10 dark:opacity-20">
      <motion.svg
        viewBox="0 0 1440 320"
        className="absolute bottom-0 w-full h-auto"
        preserveAspectRatio="none"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.path
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="2"
          d="M0,160 C320,300,420,0,740,160 C1060,320,1120,0,1440,160 L1440,320 L0,320 Z"
          animate={
            reducedMotion
              ? {}
              : {
                  d: [
                    "M0,160 C320,300,420,0,740,160 C1060,320,1120,0,1440,160 L1440,320 L0,320 Z",
                    "M0,160 C320,0,420,300,740,160 C1060,0,1120,300,1440,160 L1440,320 L0,320 Z",
                    "M0,160 C320,300,420,0,740,160 C1060,320,1120,0,1440,160 L1440,320 L0,320 Z"
                  ]
                }
          }
          transition={{
            duration: 15,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
        <motion.path
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="1"
          opacity="0.5"
          d="M0,200 C280,300,480,50,740,200 C1000,350,1160,50,1440,200 L1440,320 L0,320 Z"
          animate={
            reducedMotion
              ? {}
              : {
                  d: [
                    "M0,200 C280,300,480,50,740,200 C1000,350,1160,50,1440,200 L1440,320 L0,320 Z",
                    "M0,200 C280,50,480,300,740,200 C1000,50,1160,300,1440,200 L1440,320 L0,320 Z",
                    "M0,200 C280,300,480,50,740,200 C1000,350,1160,50,1440,200 L1440,320 L0,320 Z"
                  ]
                }
          }
          transition={{
            duration: 20,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
      </motion.svg>
    </div>
  );
}
