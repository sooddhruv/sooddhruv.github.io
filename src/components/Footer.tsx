import { motion } from 'motion/react';
import { Mail, Linkedin, Github } from 'lucide-react';
import { content } from '../content';
import { fadeUp } from '../lib/motion';

export function Footer() {
  return (
    <footer id="contact" className="relative bg-[#0B0F19] pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-2xl"
        >
          <h2 className="text-4xl sm:text-5xl font-sans font-bold tracking-tight text-white mb-6">
            Let's Connect
          </h2>
          <p className="text-lg text-slate-400 mb-12">
            Want to talk data, product, or engineering? Let's connect.
          </p>
          <div className="flex items-center space-x-5 mb-24">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={`mailto:${content.email}`}
              className="w-14 h-14 rounded-full bg-transparent flex items-center justify-center text-slate-400 border border-slate-700/60 hover:border-slate-500 hover:text-slate-200 transition-colors"
            >
              <span className="sr-only">Email</span>
              <Mail className="w-5 h-5 stroke-[1.5]" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={content.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-transparent flex items-center justify-center text-slate-400 border border-slate-700/60 hover:border-slate-500 hover:text-slate-200 transition-colors"
            >
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="w-5 h-5 stroke-[1.5]" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={content.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-transparent flex items-center justify-center text-slate-400 border border-slate-700/60 hover:border-slate-500 hover:text-slate-200 transition-colors"
            >
              <span className="sr-only">GitHub</span>
              <Github className="w-5 h-5 stroke-[1.5]" />
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="pt-8 border-t border-slate-800/60"
        >
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} {content.name}. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
