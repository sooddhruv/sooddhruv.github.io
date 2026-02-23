import { motion } from 'motion/react';
import { GraduationCap } from 'lucide-react';
import { content } from '../content';
import { fadeUp, hoverLift } from '../lib/motion';

export function Education() {


  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-display font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Education
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            My academic journey and qualifications.
          </p>
        </motion.div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {content.education.map((edu, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              whileHover={hoverLift.whileHover}
              className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 border border-slate-200 dark:border-slate-800 shadow-sm transition-all group hover:border-accent/30"
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center border border-slate-200 dark:border-slate-700 overflow-hidden p-2 group-hover:scale-105 transition-transform">
                  <img
                    src={edu.logo}
                    alt={`${edu.institution} logo`}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                      (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden w-full h-full flex items-center justify-center">
                    <GraduationCap className="w-8 h-8 text-slate-400" />
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-accent transition-colors">
                  {edu.institution}
                </h3>
                <p className="text-lg text-slate-700 dark:text-slate-300 font-medium mb-3">
                  {edu.degree}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 font-medium border border-emerald-200 dark:border-emerald-800/50"
                  >
                    {edu.status}
                  </motion.span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
