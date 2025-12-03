import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { blogPosts } from "../data/blogPosts";

const Blog = () => {
    return (
        <>
            <Helmet>
                <title>Blog - AxionChat | Security Tips & Updates</title>
                <meta name="description" content="Read the latest updates, security tips, and news from the AxionChat team. Stay informed about digital privacy and secure communication." />
                <link rel="canonical" href="https://axionchat.online/blog" />
            </Helmet>

            <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
                        AxionChat
                        <span className="bg-gradient-to-r from-axionchat-primary to-axionchat-accent bg-clip-text text-transparent ml-2">
                            Blog
                        </span>
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                        Insights on security, privacy, and the future of communication.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <motion.article
                            key={post.slug}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white dark:bg-slate-900/50 rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 hover:border-axionchat-primary/50 hover:shadow-xl hover:shadow-axionchat-primary/10 transition-all duration-300 flex flex-col h-full"
                        >
                            {post.image && (
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                    />
                                </div>
                            )}
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-3">
                                    <span>{post.date}</span>
                                    <span>•</span>
                                    <span>{post.author}</span>
                                </div>
                                <h2 className="text-xl font-bold mb-3 text-slate-900 dark:text-white line-clamp-2">
                                    <Link to={`/blog/${post.slug}`} className="hover:text-axionchat-primary transition-colors">
                                        {post.title}
                                    </Link>
                                </h2>
                                <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3 flex-grow">
                                    {post.excerpt}
                                </p>
                                <Link
                                    to={`/blog/${post.slug}`}
                                    className="inline-flex items-center text-axionchat-primary font-semibold hover:text-axionchat-secondary transition-colors mt-auto"
                                >
                                    Read Article
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Blog;
