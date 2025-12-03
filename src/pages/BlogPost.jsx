import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { blogPosts } from "../data/blogPosts";

const BlogPost = () => {
    const { slug } = useParams();
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return <Navigate to="/blog" replace />;
    }

    return (
        <>
            <Helmet>
                <title>{post.title} - AxionChat Blog</title>
                <meta name="description" content={post.excerpt} />
                <link rel="canonical" href={`https://axionchat.online/blog/${slug}`} />
            </Helmet>

            <article className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <Link
                        to="/blog"
                        className="inline-flex items-center text-slate-500 dark:text-slate-400 hover:text-axionchat-primary mb-8 transition-colors"
                    >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Blog
                    </Link>

                    <header className="mb-10">
                        <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-4">
                            <span className="bg-axionchat-primary/10 text-axionchat-primary px-3 py-1 rounded-full font-medium">
                                Article
                            </span>
                            <span>{post.date}</span>
                            <span>•</span>
                            <span>{post.author}</span>
                        </div>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
                            {post.title}
                        </h1>
                        {post.image && (
                            <div className="rounded-3xl overflow-hidden mb-8 shadow-xl">
                                <img src={post.image} alt={post.title} className="w-full h-auto" />
                            </div>
                        )}
                    </header>

                    <div
                        className="prose prose-lg prose-slate dark:prose-invert max-w-none 
            prose-headings:text-slate-900 dark:prose-headings:text-white
            prose-p:text-slate-600 dark:prose-p:text-slate-300
            prose-strong:text-slate-900 dark:prose-strong:text-white
            prose-a:text-axionchat-primary hover:prose-a:text-axionchat-secondary"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    <div className="mt-12 pt-8 border-t border-slate-200 dark:border-white/10">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Share this article</h3>
                        <div className="flex gap-4">
                            {/* Add share buttons here if needed */}
                            <button className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                                Copy Link
                            </button>
                        </div>
                    </div>
                </motion.div>
            </article>
        </>
    );
};

export default BlogPost;
