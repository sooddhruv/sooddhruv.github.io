import { motion } from 'motion/react';
import { content } from '../content';
import { fadeUp, staggerContainer } from '../lib/motion';

export function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Lightweight SVG Visualization Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 dark:opacity-10 flex items-center justify-center">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-slate-300 dark:text-slate-700" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <motion.circle cx="20%" cy="30%" r="4" fill="currentColor" className="text-accent" animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 3, repeat: Infinity }} />
          <motion.circle cx="80%" cy="70%" r="4" fill="currentColor" className="text-accent" animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 4, repeat: Infinity, delay: 1 }} />
          <motion.circle cx="60%" cy="20%" r="4" fill="currentColor" className="text-accent" animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 3.5, repeat: Infinity, delay: 2 }} />
          <motion.path d="M 20% 30% L 60% 20% L 80% 70%" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent/30" strokeDasharray="4 4" animate={{ strokeDashoffset: [0, 20] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-display font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Skills & Expertise
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Technologies and methodologies I work with.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.skillsByCategory.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all group hover:border-accent/30"
            >
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 pb-4 border-b border-slate-100 dark:border-slate-800 group-hover:border-accent/30 transition-colors">
                {category.category}
              </h3>
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-3"
              >
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={{
                      hidden: { opacity: 0, scale: 0.8 },
                      visible: { opacity: 1, scale: 1 }
                    }}
                    whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(59, 130, 246, 0.3)" }}
                    className="px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-950 text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shadow-sm transition-colors cursor-default hover:border-accent hover:text-accent dark:hover:text-accent"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
