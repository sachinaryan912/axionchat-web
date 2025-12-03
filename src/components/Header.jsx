import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <header className="border-b border-slate-200 dark:border-white/5 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl sticky top-0 z-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link to="/">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <img
              src="/assets/chatloop_logo.png"
              alt="AxionChat logo"
              className="w-9 h-9 rounded-xl"
            />
            <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
              Axion
              <span className="bg-gradient-to-r from-axionchat-primary to-axionchat-accent bg-clip-text text-transparent">
                Chat
              </span>
            </span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/features" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-axionchat-primary dark:hover:text-white transition duration-200">Features</Link>
          <Link to="/security" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-axionchat-primary dark:hover:text-white transition duration-200">Security</Link>
          <Link to="/blog" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-axionchat-primary dark:hover:text-white transition duration-200">Blog</Link>
        </div>

        <div className="flex items-center gap-4">
          {/* Older versions link */}
          <Link
            to="/downloads/old-versions"
            className="hidden sm:inline-flex text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-axionchat-primary dark:hover:text-white transition duration-200"
          >
            Older versions
          </Link>

          <motion.a
            href="https://play.google.com/store/apps/details?id=com.sachin.axionchat"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex text-sm font-semibold text-white bg-gradient-to-r from-axionchat-primary to-axionchat-secondary px-5 py-2.5 rounded-full shadow-lg shadow-axionchat-primary/40 hover:shadow-axionchat-primary/60 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -1 }}
            whileTap={{ scale: 0.96 }}
          >
            Download Now
          </motion.a>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800/50 text-slate-600 dark:text-slate-300 hover:text-axionchat-primary dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700/50 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-white/5 overflow-hidden"
        >
          <div className="px-4 py-6 space-y-4 flex flex-col">
            <Link
              to="/features"
              className="text-base font-medium text-slate-600 dark:text-slate-300 hover:text-axionchat-primary dark:hover:text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              to="/security"
              className="text-base font-medium text-slate-600 dark:text-slate-300 hover:text-axionchat-primary dark:hover:text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Security
            </Link>
            <Link
              to="/blog"
              className="text-base font-medium text-slate-600 dark:text-slate-300 hover:text-axionchat-primary dark:hover:text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/downloads/old-versions"
              className="text-base font-medium text-slate-600 dark:text-slate-300 hover:text-axionchat-primary dark:hover:text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Older Versions
            </Link>
            <a
              href="https://play.google.com/store/apps/details?id=com.sachin.axionchat"
              target="_blank"
              rel="noreferrer"
              className="inline-flex justify-center items-center px-5 py-3 text-base font-bold text-white bg-gradient-to-r from-axionchat-primary to-axionchat-secondary rounded-xl shadow-lg shadow-axionchat-primary/30"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Download App
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
