import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 flex flex-col transition-colors duration-300">
            <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
                <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-axionchat-primary/20 blur-3xl animate-pulse" />
                <div className="absolute top-60 right-0 h-[500px] w-[500px] rounded-full bg-axionchat-secondary/20 blur-3xl" />
                <div className="absolute bottom-20 left-1/2 h-80 w-80 rounded-full bg-axionchat-accent/10 blur-3xl" />
            </div>
            <Header />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
