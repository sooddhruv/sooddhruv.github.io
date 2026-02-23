import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Heart } from 'lucide-react';
import { content } from '../content';
import { fadeUp } from '../lib/motion';

export function Footer() {
  return (
    <footer id="contact" className="relative bg-slate-950 py-24 text-slate-300 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center opacity-20">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="w-[800px] h-[400px] bg-accent/30 rounded-full blur-[120px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-3xl font-display font-bold tracking-tight text-white sm:text-4xl mb-6">
              Let's Connect
            </h2>
            <p className="text-lg text-slate-400 mb-8 max-w-md">
              Want to talk data, product, or engineering? Let's connect.
            </p>
            <div className="flex items-center space-x-6">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href={`mailto:${content.email}`}
                className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-accent hover:text-white transition-colors shadow-sm border border-slate-800 hover:border-accent"
              >
                <span className="sr-only">Email</span>
                <Mail className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href={content.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-accent hover:text-white transition-colors shadow-sm border border-slate-800 hover:border-accent"
              >
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href={content.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-accent hover:text-white transition-colors shadow-sm border border-slate-800 hover:border-accent"
              >
                <span className="sr-only">GitHub</span>
                <Github className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="bg-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-800 flex flex-col items-center justify-center text-center relative group hover:border-accent/50 transition-colors"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
            <h3 className="text-xl font-display font-bold text-white mb-4 relative z-10">
              {content.footer.title}
            </h3>
            <div className="w-full max-w-[300px] aspect-video bg-slate-800 rounded-xl overflow-hidden mb-4 border border-slate-700 relative z-10 group-hover:border-accent/30 transition-colors">
              <img
                src={content.footer.image}
                alt="Comic"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden w-full h-full flex items-center justify-center bg-slate-800 text-slate-500 text-xs">
                Comic Image
              </div>
            </div>
            <p className="text-sm font-mono text-slate-500 relative z-10">
              {content.footer.source}
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="mt-24 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 origin-left"
        >
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} {content.name}. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 text-sm text-slate-500">
            <span className="flex items-center">Built with React & Tailwind <Heart className="w-4 h-4 text-accent mx-1" /></span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
