import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, BookOpen } from 'lucide-react';
import { content } from '../content';
import { fadeUp } from '../lib/motion';

export function Research() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="research" className="py-24 relative overflow-hidden">
      {/* Animated Background Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center opacity-30 dark:opacity-20 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-80" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="w-[600px] h-[600px] bg-accent/20 rounded-full blur-[100px]"
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-display font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Research
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Publications and academic contributions.
          </p>
        </motion.div>

        <div className="space-y-4">
          {content.research.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                className={`bg-white/90 dark:bg-slate-950/90 backdrop-blur-sm rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen
                    ? 'border-accent/50 shadow-md dark:shadow-accent/5'
                    : 'border-slate-200 dark:border-slate-800 shadow-sm hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-accent text-white' : 'bg-accent/10 text-accent'
                      }`}>
                      <BookOpen size={20} />
                    </div>
                    <div>
                      <h3 className={`text-lg font-semibold pr-8 transition-colors ${isOpen ? 'text-accent' : 'text-slate-900 dark:text-white'
                        }`}>
                        {item.title}
                      </h3>
                      <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
                        {item.status && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 font-medium border border-amber-200 dark:border-amber-800/50">
                            {item.status}
                          </span>
                        )}
                        {item.publication && (
                          <span className="font-medium flex items-center">
                            <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600 mr-2" />
                            {item.publication}
                          </span>
                        )}
                        {item.journal && (
                          <span className="italic flex items-center">
                            <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600 mr-2" />
                            {item.journal}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 ml-4"
                  >
                    <ChevronDown className={`w-5 h-5 ${isOpen ? 'text-accent' : 'text-slate-400'}`} />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-2 text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/50 ml-20">
                        <motion.div
                          initial={{ y: -10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.1, duration: 0.3 }}
                        >
                          {item.details}
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
