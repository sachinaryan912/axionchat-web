// SEOContent.jsx - Additional SEO-optimized content sections
import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const FAQSection = () => {
  const faqs = [
    {
      question: "Is AxionChat really secure and private?",
      answer: "Yes, AxionChat uses military-grade end-to-end encryption for all messages, calls, and media. This means only you and the recipient can read your messages - not even AxionChat servers can access your conversations. We don't store or mine your data.",
    },
    {
      question: "Is AxionChat free to download and use?",
      answer: "Absolutely! AxionChat is completely free to download and use. There are no hidden charges, subscriptions, or premium tiers. All features including HD video calls, voice messaging, and group chats are available to all users at no cost.",
    },
    {
      question: "What devices support AxionChat?",
      answer: "AxionChat is currently available for Android devices running Android 6.0 and above. You can download it from the Google Play Store. We're built with Flutter for optimal performance across all Android devices.",
    },
    {
      question: "How does AxionChat compare to WhatsApp, Telegram, or Signal?",
      answer: "AxionChat offers the same level of security as Signal with end-to-end encryption, combines it with modern AI-powered social features for friend discovery, and delivers crystal-clear HD calls. It's faster, more private, and more feature-rich than traditional messaging apps.",
    },
    {
      question: "Can I make video and voice calls on AxionChat?",
      answer: "Yes! AxionChat supports both HD video calls and crystal-clear voice calls. Our adaptive quality technology ensures excellent call quality even on slower internet connections. Both one-on-one and group calls are supported.",
    },
    {
      question: "How do I download and install AxionChat?",
      answer: "Simply visit the Google Play Store and search for 'AxionChat' or click the download button on our website. The app is lightweight (under 30MB) and installs quickly. No phone number verification required for basic features.",
    },
    {
      question: "Does AxionChat work without internet?",
      answer: "AxionChat requires an internet connection (WiFi or mobile data) to send messages and make calls. However, you can view your message history offline. Messages are automatically sent when you reconnect.",
    },
    {
      question: "Is my data backed up on AxionChat?",
      answer: "Yes, AxionChat offers secure cloud backup with end-to-end encryption. Your messages sync instantly across all your devices, and you can restore your chat history if you switch phones.",
    },
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/50" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Everything you need to know about AxionChat secure messaging
          </p>
        </motion.div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.details
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              className="group bg-white dark:bg-slate-900/80 rounded-2xl border border-slate-200 dark:border-white/5 hover:border-axionchat-primary/30 transition-all duration-300 shadow-sm dark:shadow-none"
            >
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-lg text-slate-900 dark:text-white">
                <h3 className="pr-8">{faq.question}</h3>
                <svg
                  className="w-6 h-6 text-axionchat-primary transform group-open:rotate-180 transition-transform flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-slate-600 dark:text-slate-300 leading-relaxed">
                {faq.answer}
              </div>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
};

export const TrustIndicators = () => {
  const stats = [
    { number: "500K+", label: "Active Users" },
    { number: "4.8/5", label: "App Rating" },
    { number: "1M+", label: "Messages Daily" },
    { number: "99.9%", label: "Uptime" },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-axionchat-primary/10 to-axionchat-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-axionchat-primary to-axionchat-accent bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-slate-600 dark:text-slate-400 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const SEOTextContent = () => {
  return (
    <section className="py-16 bg-white dark:bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="prose prose-lg max-w-none prose-slate dark:prose-invert">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-slate-900 dark:text-white">
              Why AxionChat is the Best Secure Messaging App in 2025
            </h2>

            <div className="text-slate-600 dark:text-slate-300 space-y-4 leading-relaxed">
              <p>
                <strong>AxionChat</strong> is revolutionizing private communication with its cutting-edge
                <strong> end-to-end encrypted messaging platform</strong>. In an era where digital privacy
                is paramount, AxionChat stands out as the most secure messaging app for Android users who
                value their privacy and demand professional-grade security features.
              </p>

              <h3 className="text-xl font-bold mt-8 mb-4 text-slate-900 dark:text-white">
                Military-Grade Security You Can Trust
              </h3>
              <p>
                Unlike other messaging apps, AxionChat implements <strong>military-grade encryption</strong>
                for every conversation, call, and file transfer. Our proprietary encryption protocol ensures
                that your <strong>private messages</strong> remain completely confidential. Whether you're
                discussing sensitive business matters or sharing personal moments, AxionChat's
                <strong> secure chat technology</strong> keeps your conversations protected from hackers,
                government surveillance, and unauthorized access.
              </p>

              <h3 className="text-xl font-bold mt-8 mb-4 text-slate-900 dark:text-white">
                Crystal-Clear HD Video and Voice Calls
              </h3>
              <p>
                Experience professional-quality <strong>HD video calling</strong> and
                <strong> voice chat</strong> that adapts to your network conditions. AxionChat's advanced
                compression technology delivers crystal-clear audio and video even on slower connections,
                making it the perfect <strong>video calling app</strong> for both personal and business use.
              </p>

              <h3 className="text-xl font-bold mt-8 mb-4 text-slate-900 dark:text-white">
                AI-Powered Social Discovery
              </h3>
              <p>
                AxionChat isn't just a <strong>messaging app</strong>—it's a smart social platform. Our
                AI-powered friend discovery helps you connect with people who share your interests, building
                meaningful relationships beyond just exchanging messages. Join communities, discover new
                friends, and expand your social network securely.
              </p>

              <h3 className="text-xl font-bold mt-8 mb-4 text-slate-900 dark:text-white">
                Free, Fast, and Feature-Rich
              </h3>
              <p>
                Download <strong>AxionChat for free</strong> and enjoy unlimited messaging, voice calls,
                video calls, and media sharing with no hidden costs. Built with Flutter technology, AxionChat
                offers blazing-fast performance and a beautiful, intuitive interface that makes
                <strong> secure communication</strong> effortless.
              </p>

              <h3 className="text-xl font-bold mt-8 mb-4 text-slate-900 dark:text-white">
                Perfect for Business and Personal Use
              </h3>
              <p>
                Whether you need a <strong>secure business messaging app</strong> or a
                <strong> private chat platform</strong> for personal conversations, AxionChat delivers.
                Features like group chats, file sharing, voice notes, and video conferencing make it ideal
                for teams, families, and friends who demand both functionality and security.
              </p>

              <div className="bg-axionchat-primary/10 border border-axionchat-primary/30 rounded-2xl p-6 mt-8">
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
                  Download AxionChat Today - 100% Free
                </h3>
                <p className="mb-0 text-slate-700 dark:text-slate-300">
                  Join over 500,000 users who trust AxionChat for their daily communication. Available now
                  on Google Play Store for Android devices. No subscription required, no hidden fees—just
                  secure, private messaging the way it should be.
                </p>
              </div>
            </div>
          </motion.div>
        </article>
      </div>
    </section>
  );
};
