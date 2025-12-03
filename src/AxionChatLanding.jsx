// AxionChatLanding.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { FAQSection, TrustIndicators, SEOTextContent } from "./SEOContent";

const screenshots = [
  "/assets/screenshot3.jpg",
  "/assets/screenshot1.jpg",
  "/assets/screenshot2.jpg",
];

const fadeInUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: "easeOut" },
  },
});

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const featureCard = {
  hidden: { opacity: 0, y: 30, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const AxionChatLanding = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate phone screenshots
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % screenshots.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Helmet>
        <title>AxionChat - Best Secure Messaging App 2025 | Free Encrypted Chat & Video Calls</title>
        <meta name="description" content="Download AxionChat for free - #1 secure messaging app with military-grade end-to-end encryption, HD video calls, voice chat, and AI-powered social features. Private, fast, and secure communication for Android." />
        <link rel="canonical" href="https://axionchat.online/" />
      </Helmet>

      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="hero-content text-center md:text-left"
          >
            <motion.span
              variants={fadeInUp(0)}
              className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-axionchat-accent bg-axionchat-accent/10 border border-axionchat-accent/30 rounded-full mb-5"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Now Available on Android
            </motion.span>

            <motion.h1
              variants={fadeInUp(0.05)}
              className="text-5xl sm:text-6xl md:text-7xl font-black leading-tight mb-6 text-slate-900 dark:text-white"
            >
              <span className="block bg-gradient-to-r from-slate-800 to-slate-600 dark:from-white dark:to-slate-200 bg-clip-text text-transparent">
                Connect Beyond
              </span>
              <span className="block bg-gradient-to-r from-axionchat-primary via-axionchat-secondary to-axionchat-accent bg-clip-text text-transparent">
                Boundaries
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp(0.1)}
              className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed"
            >
              Experience next-generation messaging with <span className="font-semibold text-axionchat-accent">AxionChat</span>.
              Military-grade encryption, crystal-clear HD calls, and an intelligent social
              ecosystem—all engineered for the modern communicator.
            </motion.p>

            {/* CTA + QR */}
            <motion.div
              variants={fadeInUp(0.15)}
              className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-5"
            >
              <motion.a
                href="https://play.google.com/store/apps/details?id=com.sachin.axionchat"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center px-8 py-4 text-base md:text-lg font-bold text-white bg-gradient-to-r from-axionchat-primary to-axionchat-secondary rounded-2xl shadow-2xl shadow-axionchat-primary/50 hover:shadow-axionchat-primary/70 transition-all duration-300 group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.96 }}
              >
                <img
                  src="/assets/playstore.png"
                  alt="Google Play"
                  className="w-7 h-7 mr-3 group-hover:scale-110 transition-transform"
                />
                Get on Google Play
              </motion.a>

              <motion.div
                className="p-3 bg-white/70 dark:bg-slate-900/70 rounded-2xl shadow-xl border border-slate-200 dark:border-white/10 backdrop-blur-sm"
                whileHover={{ scale: 1.03, rotate: 1 }}
              >
                <img
                  src="/assets/chatloop-qr.png"
                  alt="AxionChat QR Code"
                  className="w-28 h-28 rounded-xl"
                />
                <p className="text-xs text-center text-slate-500 dark:text-slate-400 mt-2 font-medium">
                  Scan to download
                </p>
              </motion.div>
            </motion.div>

            {/* Features badges */}
            <motion.div
              variants={fadeInUp(0.2)}
              className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start"
            >
              <span className="text-xs px-3 py-1.5 bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50 rounded-full text-slate-600 dark:text-slate-300">
                🔒 End-to-End Encrypted
              </span>
              <span className="text-xs px-3 py-1.5 bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50 rounded-full text-slate-600 dark:text-slate-300">
                ⚡ Lightning Fast
              </span>
              <span className="text-xs px-3 py-1.5 bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50 rounded-full text-slate-600 dark:text-slate-300">
                🎨 Flutter-Powered UI
              </span>
            </motion.div>
          </motion.div>

          {/* Phone mockup */}
          <motion.div
            className="hero-mockup-section flex justify-center md:justify-end mt-8 md:mt-0"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            <motion.div
              className="relative w-[280px] h-[560px] sm:w-[300px] sm:h-[600px] border-[12px] border-slate-900 rounded-[42px] bg-black shadow-[0_35px_80px_rgba(99,102,241,0.4)] overflow-hidden p-1"
              animate={{
                y: [0, -12, 0],
                rotateX: [0, 5, 0],
                rotateZ: [0, -2, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
            >
              {/* Dynamic Island */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-slate-900 rounded-full z-20" />

              {/* Inner gradient glow */}
              <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-axionchat-primary/20 via-slate-950 to-axionchat-secondary/20" />

              {/* Screens */}
              <div className="relative z-10 w-full h-full rounded-[32px] overflow-hidden border border-white/5">
                <div
                  className="flex w-full h-full transition-transform duration-700 ease-in-out"
                  style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                  }}
                >
                  {screenshots.map((src, index) => (
                    <div
                      key={index}
                      className="w-full h-full flex-shrink-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${src})` }}
                    />
                  ))}
                </div>
              </div>

              {/* Glass reflection overlay */}
              <div className="pointer-events-none absolute inset-0 rounded-[42px] bg-gradient-to-t from-transparent via-white/5 to-white/20 mix-blend-soft-light" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white/50 dark:bg-slate-950/60 border-y border-slate-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-axionchat-primary to-axionchat-accent bg-clip-text text-transparent">
                AxionChat
              </span>
              ?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Built with cutting-edge technology to deliver an unparalleled messaging experience
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {/* Privacy */}
            <motion.div
              variants={featureCard}
              className="group p-8 bg-white dark:bg-gradient-to-br dark:from-slate-900/90 dark:to-slate-900/50 rounded-3xl shadow-xl dark:shadow-2xl border border-slate-100 dark:border-white/5 hover:border-axionchat-primary/50 hover:shadow-axionchat-primary/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-axionchat-primary/20 to-axionchat-primary/5 flex items-center justify-center mb-5 mx-auto group-hover:scale-110 transition-transform">
                <svg
                  className="w-8 h-8 text-axionchat-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-center text-slate-900 dark:text-white">
                Military-Grade Security
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-center leading-relaxed">
                End-to-end encryption protects every message, call, and file.
                Your privacy is our foundation—no data mining, no tracking, no compromises.
              </p>
            </motion.div>

            {/* Calling */}
            <motion.div
              variants={featureCard}
              className="group p-8 bg-white dark:bg-gradient-to-br dark:from-slate-900/90 dark:to-slate-900/50 rounded-3xl shadow-xl dark:shadow-2xl border border-slate-100 dark:border-white/5 hover:border-axionchat-accent/50 hover:shadow-axionchat-accent/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-axionchat-accent/20 to-axionchat-accent/5 flex items-center justify-center mb-5 mx-auto group-hover:scale-110 transition-transform">
                <svg
                  className="w-8 h-8 text-axionchat-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-center text-slate-900 dark:text-white">
                HD Voice & Video
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-center leading-relaxed">
                Crystal-clear calls with adaptive quality optimization.
                Ultra-low latency ensures seamless conversations even on slower networks.
              </p>
            </motion.div>

            {/* Friends */}
            <motion.div
              variants={featureCard}
              className="group p-8 bg-white dark:bg-gradient-to-br dark:from-slate-900/90 dark:to-slate-900/50 rounded-3xl shadow-xl dark:shadow-2xl border border-slate-100 dark:border-white/5 hover:border-axionchat-secondary/50 hover:shadow-axionchat-secondary/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-axionchat-secondary/20 to-axionchat-secondary/5 flex items-center justify-center mb-5 mx-auto group-hover:scale-110 transition-transform">
                <svg
                  className="w-8 h-8 text-axionchat-secondary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-center text-slate-900 dark:text-white">
                Smart Social Network
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-center leading-relaxed">
                AI-powered friend discovery connects you with people who share your interests.
                Build meaningful communities, not just contact lists.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Additional Features Highlight */}
      <section className="py-20 bg-slate-50 dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-white">
                Engineered for
                <span className="block bg-gradient-to-r from-axionchat-primary to-axionchat-accent bg-clip-text text-transparent">
                  Performance & Reliability
                </span>
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-axionchat-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-axionchat-primary text-xl">⚡</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1 text-slate-900 dark:text-white">Lightning-Fast Sync</h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      Messages sync instantly across all your devices with our optimized cloud infrastructure
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-axionchat-accent/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-axionchat-accent text-xl">📱</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1 text-slate-900 dark:text-white">Cross-Platform Ready</h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      Built with Flutter for a native experience that feels perfect on any Android device
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-axionchat-secondary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-axionchat-secondary text-xl">🎨</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1 text-slate-900 dark:text-white">Beautiful Design</h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      Modern, intuitive interface with smooth animations and thoughtful interactions
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl bg-white dark:bg-gradient-to-br dark:from-axionchat-primary/20 dark:to-axionchat-secondary/20 backdrop-blur-sm border border-slate-200 dark:border-white/10 p-8 flex items-center justify-center shadow-2xl">
                <div className="text-center">
                  <div className="text-6xl mb-4">🚀</div>
                  <h4 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">Join the Revolution</h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    Experience the future of messaging today
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <TrustIndicators />

      {/* SEO Content */}
      <SEOTextContent />

      {/* FAQ Section */}
      <FAQSection />

      {/* Contact */}
      <section id="contact" className="py-20 bg-slate-900 dark:bg-slate-950">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h3
            variants={fadeInUp(0)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="text-3xl md:text-4xl font-bold mb-5 text-white"
          >
            Let&apos;s Connect
          </motion.h3>
          <motion.p
            variants={fadeInUp(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="text-lg text-slate-300 mb-10 leading-relaxed"
          >
            Have questions, feedback, or partnership inquiries?
            Our dedicated team is here to help you get the most out of AxionChat.
          </motion.p>
          <motion.a
            variants={fadeInUp(0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            href="mailto:axionchat.online@gmail.com"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-axionchat-primary to-axionchat-secondary rounded-2xl shadow-2xl shadow-axionchat-primary/40 hover:shadow-axionchat-primary/60 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.96 }}
          >
            <svg
              className="w-6 h-6 mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            axionchat.online@gmail.com
          </motion.a>
        </div>
      </section>
    </>
  );
};

export default AxionChatLanding;
