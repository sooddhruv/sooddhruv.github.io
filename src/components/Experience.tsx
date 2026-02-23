import { motion } from 'motion/react';
import { Briefcase } from 'lucide-react';
import { content } from '../content';
import { fadeUp } from '../lib/motion';

export function Experience() {


  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-display font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Experience
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Professional journey and impact.
          </p>
        </motion.div>

        <div className="relative ml-4 sm:ml-8">
          {/* Animated Timeline Line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-0 top-2 bottom-0 w-0.5 bg-gradient-to-b from-accent via-slate-200 to-transparent dark:via-slate-800"
          />

          {content.experience.map((exp, index) => {
            const logo = exp.logo;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-12 relative pl-8 sm:pl-12 last:mb-0 group"
              >
                {/* Timeline Node */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, type: "spring" }}
                  className="absolute -left-[9px] top-2 w-5 h-5 rounded-full bg-white dark:bg-slate-950 border-2 border-accent flex items-center justify-center shadow-sm z-10"
                >
                  <motion.div
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-2 h-2 rounded-full bg-accent"
                  />
                </motion.div>

                <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all hover:border-accent/30">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-6 gap-4">
                    <div className="flex items-start gap-4">
                      {/* Company Logo */}
                      <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center border border-slate-200 dark:border-slate-700 overflow-hidden shrink-0 p-1.5">
                        {logo ? (
                          <img
                            src={logo}
                            alt={`${exp.company} logo`}
                            className="w-full h-full object-contain"
                            onError={(e) => {
                              (e.target as HTMLImageElement).style.display = 'none';
                              (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                            }}
                          />
                        ) : null}
                        <div className={logo ? "hidden w-full h-full flex items-center justify-center" : "w-full h-full flex items-center justify-center"}>
                          <Briefcase className="w-6 h-6 text-slate-400" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-accent transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-lg text-slate-700 dark:text-slate-300 font-medium">
                          {exp.company}
                        </p>
                      </div>
                    </div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-sm font-medium text-slate-600 dark:text-slate-400 whitespace-nowrap border border-slate-200 dark:border-slate-700">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start text-slate-600 dark:text-slate-300 leading-relaxed">
                        <span className="mr-3 mt-2 w-1.5 h-1.5 rounded-full bg-accent/50 shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-slate-800/50">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-slate-50 dark:bg-slate-950 text-xs font-medium text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 shadow-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
