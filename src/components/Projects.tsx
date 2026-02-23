import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, ExternalLink, Filter, Folder, Code, Database, LineChart, Cpu } from 'lucide-react';
import { content } from '../content';
import { fadeUp, hoverLift } from '../lib/motion';

export function Projects() {
  const [filter, setFilter] = useState('All');
  const allTags = ['All', ...Array.from(new Set(content.projects.flatMap(p => p.tags)))];

  const filteredProjects = filter === 'All'
    ? content.projects
    : content.projects.filter(p => p.tags.includes(filter));

  const getCategoryIcon = (tags: string[]) => {
    if (tags.includes('Computer Vision')) return <Cpu className="w-5 h-5" />;
    if (tags.includes('Data Science')) return <Database className="w-5 h-5" />;
    if (tags.includes('Analytics/BI')) return <LineChart className="w-5 h-5" />;
    if (tags.includes('Systems/SDE')) return <Code className="w-5 h-5" />;
    return <Folder className="w-5 h-5" />;
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-display font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl inline-flex flex-col items-center">
            Featured Projects
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-1 bg-accent mt-2 rounded-full"
            />
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            A selection of my recent work and technical achievements.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
        >
          <Filter className="w-5 h-5 text-slate-400 mr-2" />
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className="relative px-4 py-2 rounded-full text-sm font-medium transition-colors outline-none"
            >
              {filter === tag && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute inset-0 bg-accent rounded-full shadow-sm"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className={`relative z-10 ${filter === tag ? 'text-white' : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'}`}>
                {tag}
              </span>
            </button>
          ))}
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={hoverLift.whileHover}
                className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm transition-all flex flex-col h-full group hover:border-accent/50 hover:shadow-lg hover:shadow-accent/20"
              >
                {/* Project Thumbnail Area */}
                <div className="h-40 bg-slate-100 dark:bg-slate-800 relative overflow-hidden border-b border-slate-200 dark:border-slate-800">
                  <img
                    src={project.thumbnail || `/projects/thumbnails/${project.id}.jpg`}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                      (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden absolute inset-0 flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-400">
                    {getCategoryIcon(project.tags)}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-mono text-accent font-medium bg-accent/10 px-2 py-1 rounded">
                      {project.year}
                    </span>
                    <div className="flex items-center space-x-3">
                      {project.links.github && (
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-accent transition-colors"
                        >
                          <Github className="w-5 h-5" />
                        </motion.a>
                      )}
                      {project.links.live && (
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-accent transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </motion.a>
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>

                  <div className="space-y-4 flex-1">
                    <div>
                      <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Problem</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">{project.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Approach</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">{project.approach}</p>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800">
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-2.5 py-1 rounded-md bg-slate-50 dark:bg-slate-950 text-xs font-medium text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 shadow-sm transition-colors group-hover:border-accent/20"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          className="mt-24"
        >
          <h3 className="text-2xl font-display font-bold text-center text-slate-900 dark:text-white mb-8">
            More Projects
          </h3>
          <div className="max-w-4xl mx-auto bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
            <ul className="divide-y divide-slate-100 dark:divide-slate-800/50">
              {content.moreProjects.map((project, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group p-4 sm:px-6 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors relative overflow-hidden"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent transform -translate-x-full group-hover:translate-x-0 transition-transform" />
                  <div className="flex items-center gap-4">
                    <Folder className="w-4 h-4 text-slate-400 group-hover:text-accent transition-colors" />
                    <span className="text-slate-700 dark:text-slate-300 font-medium group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                      {project.title}
                    </span>
                  </div>
                  <span className="text-sm font-mono text-slate-500 dark:text-slate-400 ml-4 shrink-0 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
                    {project.year}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="mt-10 text-center">
            <motion.a
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href={content.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 dark:border-slate-700 text-base font-medium rounded-xl text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all shadow-sm hover:shadow-md"
            >
              <Github className="w-5 h-5 mr-2" />
              View Full GitHub
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
