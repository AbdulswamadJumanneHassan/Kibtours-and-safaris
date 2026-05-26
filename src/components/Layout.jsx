import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
    const { pathname } = useLocation();

    // Background images based on routes
    const bgImages = {
        '/': '',
        '/about': '',
        '/hotels': '',
        '/safaris': '',
        '/zanzibar-tours': '',
        '/contact': '',
    };

    const currentBg = bgImages[pathname] || '';

    return (
        <div className="relative min-h-screen">
            {/* Fullscreen Background */}
            <div
                className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
                style={{ backgroundImage: `url(${currentBg})` }}
            >
                <div className="absolute inset-0 bg-black/45" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow pt-16 md:pt-24 px-3 md:px-4 pb-8 md:pb-12 w-full max-w-7xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={pathname}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="w-full h-full"
                        >
                            {children}
                        </motion.div>
                    </AnimatePresence>
                </main>
                <Footer />
                <WhatsAppButton />
            </div>
        </div>
    );
};

export default Layout;
