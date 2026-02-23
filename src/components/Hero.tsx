import { motion, useReducedMotion } from 'motion/react';
import { Mail, Linkedin, Github, ArrowRight, ChevronDown } from 'lucide-react';
import { content } from '../content';
import { fadeUp, staggerContainer } from '../lib/motion';

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0 bg-slate-50 dark:bg-slate-950 overflow-hidden">
        {/* Soft radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,theme(colors.slate.800)_0%,transparent_70%)] opacity-30 dark:opacity-40" />

        {/* Faint grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

        {/* Flowing points */}
        <motion.div
          className="absolute inset-0 opacity-40 dark:opacity-60"
          animate={shouldReduceMotion ? {} : {
            backgroundPosition: ["0px 0px", "60px 60px"],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage: "radial-gradient(circle at center, rgba(148, 163, 184, 0.2) 0, transparent 4px)",
            backgroundSize: "60px 60px"
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-50 dark:to-slate-950" />
      </div>

      {/* Animated Data Nodes Network */}
      {!shouldReduceMotion && (
        <div className="absolute inset-0 z-0 opacity-30 dark:opacity-40 pointer-events-none overflow-hidden">
          <svg className="absolute w-full h-full text-accent/30" xmlns="http://www.w3.org/2000/svg">
            <motion.line x1="20%" y1="30%" x2="50%" y2="50%" stroke="currentColor" strokeWidth="2"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            />
            <motion.line x1="50%" y1="50%" x2="80%" y2="40%" stroke="currentColor" strokeWidth="1"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 1 }}
            />
            <motion.line x1="20%" y1="70%" x2="50%" y2="50%" stroke="currentColor" strokeWidth="1"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.5 }}
            />
            <motion.line x1="80%" y1="80%" x2="50%" y2="50%" stroke="currentColor" strokeWidth="2"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 1.5 }}
            />
            <motion.line x1="10%" y1="50%" x2="20%" y2="30%" stroke="currentColor" strokeWidth="1"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.2 }}
            />
            <motion.circle cx="20%" cy="30%" r="4" fill="currentColor" className="text-accent"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.circle cx="50%" cy="50%" r="6" fill="currentColor" className="text-accent"
              animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }} transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.circle cx="80%" cy="40%" r="4" fill="currentColor" className="text-accent"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
            />
            <motion.circle cx="20%" cy="70%" r="5" fill="currentColor" className="text-accent"
              animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }} transition={{ duration: 2.2, repeat: Infinity, delay: 0.5 }}
            />
            <motion.circle cx="80%" cy="80%" r="5" fill="currentColor" className="text-accent"
              animate={{ scale: [1, 1.4, 1], opacity: [0.4, 1, 0.4] }} transition={{ duration: 2.8, repeat: Infinity, delay: 0.8 }}
            />
            <motion.circle cx="10%" cy="50%" r="3" fill="currentColor" className="text-accent"
              animate={{ scale: [1, 1.8, 1], opacity: [0.4, 1, 0.4] }} transition={{ duration: 1.8, repeat: Infinity, delay: 1.2 }}
            />
          </svg>
        </div>
      )}

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={fadeUp} className="text-5xl sm:text-7xl font-display font-bold tracking-tight text-slate-900 dark:text-white mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400 animate-shimmer bg-[length:200%_auto]">
              {content.hero.headline}
            </span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-xl sm:text-2xl font-medium text-accent mb-8">
            {content.hero.subheadline}
          </motion.p>

          <motion.div variants={fadeUp} className="space-y-6">
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
              {content.hero.primaryLine}
            </p>



            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                whileHover={shouldReduceMotion ? {} : { scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href={`mailto:${content.email}`}
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-accent hover:bg-accent-hover transition-all w-full sm:w-auto shadow-sm hover:shadow-accent/25 hover:shadow-lg"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Me
              </motion.a>
              <motion.a
                whileHover={shouldReduceMotion ? {} : { scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 dark:border-slate-700 text-base font-medium rounded-xl text-slate-700 dark:text-slate-300 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-all w-full sm:w-auto shadow-sm hover:shadow-md"
              >
                Download Resume
              </motion.a>
              <motion.a
                whileHover={shouldReduceMotion ? {} : { scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 dark:border-slate-700 text-base font-medium rounded-xl text-slate-700 dark:text-slate-300 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-all w-full sm:w-auto shadow-sm hover:shadow-md group"
              >
                View Projects
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>

            <div className="pt-8 flex items-center justify-center space-x-6">
              <motion.a whileHover={{ scale: 1.1 }} href={content.links.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-accent transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="w-6 h-6" />
              </motion.a>
              <motion.a whileHover={{ scale: 1.1 }} href={content.links.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-accent transition-colors">
                <span className="sr-only">GitHub</span>
                <Github className="w-6 h-6" />
              </motion.a>
            </div>

            <div className="pt-12">
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                {content.hero.openToLine}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400"
        animate={shouldReduceMotion ? {} : { y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="w-6 h-6 opacity-50" />
      </motion.div>
    </section>
  );
}
