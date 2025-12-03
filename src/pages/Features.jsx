import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const Features = () => {
    const features = [
        {
            title: "End-to-End Encryption",
            description: "Your messages, calls, and media are encrypted by default. Only you and the recipient can see them.",
            icon: "🔒",
        },
        {
            title: "HD Video Calls",
            description: "Experience crystal-clear video calls with low latency, even on slower networks.",
            icon: "📹",
        },
        {
            title: "Voice Messages",
            description: "Send high-quality voice notes instantly when typing isn't convenient.",
            icon: "🎙️",
        },
        {
            title: "Group Chats",
            description: "Create groups with up to 1000 members. Share files, media, and more seamlessly.",
            icon: "👥",
        },
        {
            title: "File Sharing",
            description: "Share documents, photos, and videos of any size without compression.",
            icon: "📁",
        },
        {
            title: "Self-Destructing Messages",
            description: "Set a timer for messages to disappear automatically after they are read.",
            icon: "⏱️",
        },
        {
            title: "Custom Themes",
            description: "Personalize your chat experience with a wide range of themes and colors.",
            icon: "🎨",
        },
        {
            title: "No Ads, No Trackers",
            description: "We respect your privacy. No advertisements, no affiliate marketing, no tracking.",
            icon: "🛡️",
        },
        {
            title: "Cross-Platform Sync",
            description: "Access your chats from any Android device. Web and iOS support coming soon.",
            icon: "🔄",
        },
    ];

    return (
        <>
            <Helmet>
                <title>Features - AxionChat | Secure Messaging, HD Calls & More</title>
                <meta name="description" content="Explore AxionChat's powerful features: End-to-end encryption, HD video calls, group chats, file sharing, and self-destructing messages. The ultimate secure messaging app." />
                <link rel="canonical" href="https://axionchat.online/features" />
            </Helmet>

            <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
                        Powerful Features for
                        <span className="block bg-gradient-to-r from-axionchat-primary to-axionchat-accent bg-clip-text text-transparent">
                            Modern Communication
                        </span>
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                        Everything you need to stay connected, secure, and productive.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-200 dark:border-white/10 hover:border-axionchat-primary/50 hover:shadow-lg hover:shadow-axionchat-primary/10 transition-all duration-300"
                        >
                            <div className="text-4xl mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{feature.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Features;
