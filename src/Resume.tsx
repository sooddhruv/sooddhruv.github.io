import { ArrowLeft, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Resume() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center p-4 sm:p-8">
      <div className="max-w-4xl w-full bg-white dark:bg-slate-900 rounded-3xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-800">
        <div className="p-6 sm:p-10 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-500 hover:text-slate-900 dark:hover:text-white"
            >
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <h1 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white">
              Resume
            </h1>
          </div>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-accent hover:bg-accent-hover transition-colors shadow-sm"
          >
            <Download className="w-5 h-5 mr-2" />
            Download PDF
          </a>
        </div>
        <div className="p-6 sm:p-10 bg-slate-100 dark:bg-slate-950 min-h-[600px] flex items-center justify-center">
          <div className="text-center max-w-md">
            <div className="w-24 h-24 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-slate-200 dark:border-slate-700">
              <Download className="w-10 h-10 text-slate-400" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              Resume PDF Placeholder
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Replace the <code className="bg-slate-200 dark:bg-slate-800 px-1.5 py-0.5 rounded text-sm font-mono">public/resume.pdf</code> file with your actual resume to enable viewing and downloading.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
