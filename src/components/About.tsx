import { motion } from 'motion/react';
import { CheckCircle2, User } from 'lucide-react';
import { content } from '../content';
import { fadeUp, slideInRight, scaleIn } from '../lib/motion';

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="lg:col-span-5 mb-12 lg:mb-0"
          >
            <h2 className="text-3xl font-display font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl mb-6">
              About Me
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              {content.about.paragraph}
            </p>

            {/* Photo on mobile (hidden on desktop) */}
            <div className="lg:hidden mb-8 flex justify-center">
              <div className="relative w-48 h-64 rounded-2xl overflow-hidden border-2 border-slate-200 dark:border-slate-800 shadow-lg">
                <img
                  src="/images/headshot.png"
                  alt={content.name}
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="hidden absolute inset-0 bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                  <User className="w-16 h-16 text-slate-400" />
                </div>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-7 flex flex-col lg:flex-row gap-8 items-center">
            {/* Photo on desktop */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={scaleIn}
              className="hidden lg:block relative w-64 h-80 shrink-0 rounded-2xl overflow-hidden border-2 border-slate-200 dark:border-slate-800 shadow-xl group"
            >
              <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay" />
              <img
                src="/images/headshot.png"
                alt={content.name}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden absolute inset-0 bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                <User className="w-20 h-20 text-slate-400" />
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInRight}
              className="flex-1"
            >
              <div className="bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-800 hover:border-accent/50 transition-colors">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
                  Key Highlights
                </h3>
                <ul className="space-y-4">
                  {content.about.bullets.map((bullet, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start"
                    >
                      <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mr-3" />
                      <span className="text-slate-700 dark:text-slate-300 leading-relaxed">
                        {bullet}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
