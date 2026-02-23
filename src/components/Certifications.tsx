import { motion } from 'motion/react';
import { Award, ExternalLink, ArrowRight } from 'lucide-react';
import { content } from '../content';
import { fadeUp, hoverLift } from '../lib/motion';

export function Certifications() {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-display font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Certifications
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Professional credentials and continuous learning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={hoverLift.whileHover}
              className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm transition-all flex flex-col h-full group hover:border-accent/30"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center border border-slate-200 dark:border-slate-700 overflow-hidden shrink-0 group-hover:scale-110 transition-transform">
                  {cert.logo ? (
                    <img 
                      src={cert.logo} 
                      alt={`${cert.issuer} logo`} 
                      className="w-full h-full object-contain p-1" 
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                        (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                  ) : null}
                  <div className={cert.logo ? "hidden w-full h-full flex items-center justify-center" : "w-full h-full flex items-center justify-center"}>
                    <Award className="w-6 h-6 text-slate-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight group-hover:text-accent transition-colors">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                    {cert.issuer}
                  </p>
                </div>
              </div>

              <div className="space-y-3 flex-1">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500 dark:text-slate-400">Issued</span>
                  <span className="font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">{cert.issued}</span>
                </div>
                {cert.credentialId && (
                  <div className="flex justify-between text-sm items-center">
                    <span className="text-slate-500 dark:text-slate-400">Credential ID</span>
                    <span className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">{cert.credentialId}</span>
                  </div>
                )}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                    Skills
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 rounded bg-slate-50 dark:bg-slate-950 text-xs font-medium text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {cert.credentialUrl && cert.credentialUrl !== '#' && (
                <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800">
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-accent hover:text-accent-hover transition-colors group/link"
                  >
                    Show credential
                    <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
