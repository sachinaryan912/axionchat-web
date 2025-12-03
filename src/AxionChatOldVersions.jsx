// AxionChatOldVersions.jsx
import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const releases = [
  {
    version: "v1.2.0",
    code: 12,
    date: "November 28, 2025",
    size: "28 MB",
    changes: [
      "Improved call quality and stability",
      "New typing indicators in group chats",
      "Bug fixes and performance improvements",
    ],
    apkUrl: "https://your-cdn-or-drive-link/axionchat-v1.2.0.apk",
  },
  {
    version: "v1.1.3",
    code: 11,
    date: "November 10, 2025",
    size: "27.4 MB",
    changes: [
      "Added message reactions",
      "Optimized media upload speed",
      "Minor UI polish for chat screen",
    ],
    apkUrl: "https://your-cdn-or-drive-link/axionchat-v1.1.3.apk",
  },
  {
    version: "v1.1.0",
    code: 10,
    date: "October 21, 2025",
    size: "27 MB",
    changes: [
      "Introduced posts home page",
      "Friend suggestions based on interests",
      "Security patches and crash fixes",
    ],
    apkUrl: "https://your-cdn-or-drive-link/axionchat-v1.1.0.apk",
  },
  {
    version: "v1.0.0",
    code: 1,
    date: "September 5, 2025",
    size: "25 MB",
    changes: [
      "Initial public release",
      "One-to-one chats and group chats",
      "Basic voice and video calling",
    ],
    apkUrl: "https://your-cdn-or-drive-link/axionchat-v1.0.0.apk",
  },
];

const fadeInUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  },
});

const AxionChatOldVersions = () => {
  return (
    <>
      <Helmet>
        <title>Download AxionChat APK - Previous Versions | Secure Messaging App</title>
        <meta name="description" content="Download older versions of AxionChat APK. Access previous stable releases of the secure messaging app with end-to-end encryption. Free APK downloads for Android devices." />
        <meta name="keywords" content="AxionChat APK, download AxionChat, AxionChat old versions, messaging app APK, encrypted chat APK, secure messaging download, AxionChat Android APK, previous versions, stable releases" />
        <link rel="canonical" href="https://axionchat.online/downloads/old-versions" />
      </Helmet>

      <div className="min-h-screen bg-gray-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 flex flex-col transition-colors duration-300">
        {/* Main content */}
        <main className="flex-grow">
          <section className="py-12 md:py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.h1
                variants={fadeInUp(0)}
                initial="hidden"
                animate="visible"
                className="text-3xl md:text-4xl font-bold mb-3 text-slate-900 dark:text-white"
              >
                Download Older Versions (APK)
              </motion.h1>

              <motion.p
                variants={fadeInUp(0.05)}
                initial="hidden"
                animate="visible"
                className="text-slate-600 dark:text-slate-300 mb-6"
              >
                Here you can download previous stable releases of AxionChat. We
                recommend always using the latest version from Google Play, but
                older builds are available if you need them for testing or
                compatibility.
              </motion.p>

              <motion.div
                variants={fadeInUp(0.1)}
                initial="hidden"
                animate="visible"
                className="inline-flex items-center gap-2 text-xs sm:text-sm text-amber-600 dark:text-amber-300 bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/40 px-3 py-2 rounded-full mb-10"
              >
                <span className="h-2 w-2 rounded-full bg-amber-500 dark:bg-amber-400 animate-pulse" />
                <span>
                  Note: Install APKs only from sources you trust. Enable &quot;
                  Install unknown apps&quot; if required.
                </span>
              </motion.div>

              {/* Vertical Timeline */}
              <div className="relative mt-4">
                {/* Vertical line */}
                <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800 pointer-events-none" />

                <div className="space-y-10">
                  {releases.map((release, index) => {
                    const isLeft = index % 2 === 0;

                    return (
                      <motion.div
                        key={release.version}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        className="relative flex flex-col md:grid md:grid-cols-2 md:gap-10"
                      >
                        {/* Timeline dot */}
                        <div className="absolute left-5 md:left-1/2 -translate-x-1/2 h-4 w-4 rounded-full bg-axionchat-primary border-2 border-white dark:border-slate-950 shadow-lg shadow-axionchat-primary/40" />

                        {/* Empty spacer column on desktop for alternating layout */}
                        <div
                          className={`hidden md:block ${isLeft ? "order-1" : "order-2"
                            }`}
                        />

                        {/* Card */}
                        <div
                          className={`mt-6 md:mt-0 ${isLeft ? "md:order-2 md:pl-8" : "md:order-1 md:pr-8"
                            }`}
                        >
                          <div className="bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 rounded-3xl p-5 sm:p-6 shadow-xl shadow-slate-200/50 dark:shadow-black/40 hover:border-axionchat-primary/40 hover:shadow-axionchat-primary/20 transition duration-300">
                            <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                              <div>
                                <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
                                  Version
                                </p>
                                <p className="text-lg font-semibold text-slate-900 dark:text-white">
                                  {release.version}
                                </p>
                              </div>
                              <div className="text-right">
                                <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
                                  Release date
                                </p>
                                <p className="text-sm text-slate-700 dark:text-slate-300">{release.date}</p>
                              </div>
                            </div>

                            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mb-4">
                              <span className="px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60">
                                Build code: {release.code}
                              </span>
                              <span className="px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60">
                                Size: {release.size}
                              </span>
                            </div>

                            <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-300 space-y-1 mb-4">
                              {release.changes.map((change, idx) => (
                                <li key={idx}>{change}</li>
                              ))}
                            </ul>

                            <div className="flex flex-wrap items-center justify-between gap-3">
                              <a
                                href={release.apkUrl}
                                className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-axionchat-primary to-axionchat-secondary rounded-2xl shadow shadow-axionchat-primary/40 hover:shadow-axionchat-primary/60 transition duration-300"
                                download
                              >
                                <svg
                                  className="w-4 h-4 mr-2"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M8 12l4 4m0 0l4-4m-4 4V4"
                                  />
                                </svg>
                                Download APK
                              </a>

                              <span className="text-[11px] text-slate-400 dark:text-slate-500">
                                SHA / checksum info can be added here.
                              </span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default AxionChatOldVersions;
