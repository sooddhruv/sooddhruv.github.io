import { motion } from 'motion/react';
import { isReducedMotion } from '../lib/motion';

export function AnimatedBackground() {
  const reducedMotion = isReducedMotion();

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
      {/* Animated gradient layer */}
      <motion.div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        animate={
          reducedMotion
            ? {}
            : {
                backgroundPosition: ['0% 0%', '100% 100%'],
              }
        }
        transition={{
          duration: 20,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        style={{
          background: 'radial-gradient(circle at center, var(--color-accent) 0%, transparent 50%)',
          backgroundSize: '200% 200%',
        }}
      />
      
      {/* CSS Noise overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />
    </div>
  );
}
