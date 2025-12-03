import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const Security = () => {
    return (
        <>
            <Helmet>
                <title>Security & Privacy - AxionChat | End-to-End Encryption</title>
                <meta name="description" content="Learn about AxionChat's military-grade security. End-to-end encryption, zero-knowledge architecture, and strict privacy policies ensure your data remains yours." />
                <link rel="canonical" href="https://axionchat.online/security" />
            </Helmet>

            <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
                        Your Privacy is Our
                        <span className="block bg-gradient-to-r from-axionchat-primary to-axionchat-accent bg-clip-text text-transparent">
                            Top Priority
                        </span>
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-300">
                        We built AxionChat with a security-first approach. No compromises.
                    </p>
                </motion.div>

                <div className="space-y-12">
                    <motion.section
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-200 dark:border-white/10"
                    >
                        <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white flex items-center gap-3">
                            <span className="text-3xl">🔒</span> End-to-End Encryption
                        </h2>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                            AxionChat uses the state-of-the-art Signal Protocol to keep your conversations secure.
                            We can't read your messages or listen to your calls, and no one else can either.
                            Privacy isn't an optional mode — it's just the way that AxionChat works. Every message,
                            every call, every time.
                        </p>
                        <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-2 ml-4">
                            <li>Messages are encrypted on your device.</li>
                            <li>Only the recipient has the key to decrypt them.</li>
                            <li>Keys are changed for every message (Forward Secrecy).</li>
                        </ul>
                    </motion.section>

                    <motion.section
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-200 dark:border-white/10"
                    >
                        <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white flex items-center gap-3">
                            <span className="text-3xl">🛡️</span> Zero-Knowledge Architecture
                        </h2>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                            We don't know who you are, who you're talking to, or what you're saying.
                            Our servers only act as a relay to pass encrypted data between users.
                            Once delivered, messages are deleted from our servers. We don't store your
                            contact list or metadata.
                        </p>
                    </motion.section>

                    <motion.section
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-200 dark:border-white/10"
                    >
                        <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white flex items-center gap-3">
                            <span className="text-3xl">👁️</span> No Tracking, No Ads
                        </h2>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                            AxionChat is ad-free and tracker-free. We don't collect data to sell to advertisers.
                            Your attention is yours, and your data belongs to you. We are funded by... well,
                            currently we are a free service committed to privacy!
                        </p>
                    </motion.section>
                </div>
            </div>
        </>
    );
};

export default Security;
