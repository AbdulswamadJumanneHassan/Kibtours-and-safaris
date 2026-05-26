import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Users, Award, ArrowUp } from 'lucide-react';

const About = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const highlights = [
        { icon: <Target className="h-6 w-6" />, title: "Our Mission", text: "To provide authentic and sustainable travel experiences that connect people with the natural wonders of Tanzania." },
        { icon: <Eye className="h-6 w-6" />, title: "Our Vision", text: "To be the leading premium safari agency in East Africa, known for excellence, safety, and cultural preservation." },
        { icon: <Users className="h-6 w-6" />, title: "Expert Team", text: "Our guides and staff are professionals with decades of combined experience in the hospitality and tourism industry." },
        { icon: <Award className="h-6 w-6" />, title: "Safety First", text: "We adhere to the highest international safety standards to ensure your peace of mind throughout your journey." }
    ];

    return (
        <div className="space-y-12 md:space-y-24 px-3 md:px-0">
            {/* Story Section */}
            <section className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8 pt-8 md:pt-12">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-2xl md:text-4xl lg:text-6xl font-bold"
                >
                    Our Story
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-xs md:text-base lg:text-lg text-slate-300 leading-relaxed"
                > 
                    Founded in the heart of Zanzibar, Kibtours & Safaris began with a simple passion: to show the world the true soul of Tanzania. From the majestic elephants of Tarangire to the vibrant culture of Stone Town, we believe every traveler deserves a story worth telling.
                </motion.p>
            </section>

            {/* Corporate Info */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                {highlights.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="glass-card p-6 md:p-8 text-center"
                    >
                        <div className="w-10 md:w-12 h-10 md:h-12 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4 md:mb-6 text-primary">
                            {item.icon}
                        </div>
                        <h3 className="text-base md:text-xl font-bold mb-2 md:mb-4">{item.title}</h3>
                        <p className="text-slate-400 text-xs md:text-sm leading-relaxed">{item.text}</p>
                    </motion.div>
                ))}
            </section>

            {/* Safari Experience */}
            <section className="glass rounded-2xl md:rounded-3xl overflow-hidden flex flex-col md:flex-row">
                <div className="md:w-1/2 h-48 md:h-auto">
                    <img
                        src="src/assets/about.jpg"
                        alt="Safari Experience"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="md:w-1/2 p-6 md:p-12 space-y-4 md:space-y-6 flex flex-col justify-center">
                    <h2 className="text-xl md:text-3xl font-bold">The Kibtours Difference</h2>
                    <p className="text-slate-300 italic text-xs md:text-base">
                        "It's not just about seeing animals; it's about understanding the ecosystem, respecting the wild, and creating a bond with nature that lasts a lifetime."
                    </p>
                    <ul className="space-y-3 md:space-y-4">
                        <li className="flex items-start">
                            <div className="h-4 w-4 md:h-5 md:w-5 bg-primary/20 rounded-full flex items-center justify-center mr-3 mt-0.5 md:mt-1">
                                <div className="h-1.5 md:h-2 w-1.5 md:w-2 bg-primary rounded-full"></div>
                            </div>
                            <span className="text-slate-300 text-xs md:text-sm">Customized itineraries based on migration patterns</span>
                        </li>
                        <li className="flex items-start">
                            <div className="h-4 w-4 md:h-5 md:w-5 bg-primary/20 rounded-full flex items-center justify-center mr-3 mt-0.5 md:mt-1">
                                <div className="h-1.5 md:h-2 w-1.5 md:w-2 bg-primary rounded-full"></div>
                            </div>
                            <span className="text-slate-300 text-xs md:text-sm">Luxurious accommodations in handpicked lodges</span>
                        </li>
                        <li className="flex items-start">
                            <div className="h-4 w-4 md:h-5 md:w-5 bg-primary/20 rounded-full flex items-center justify-center mr-3 mt-0.5 md:mt-1">
                                <div className="h-1.5 md:h-2 w-1.5 md:w-2 bg-primary rounded-full"></div>
                            </div>
                            <span className="text-slate-300 text-xs md:text-sm">Top-of-the-line 4x4 land cruisers with pop-up roofs</span>
                        </li>
                    </ul>
                </div>
            </section>

            {/* Scroll to Top Button */}
            {showScrollTop && (
                <motion.button
                    onClick={scrollToTop}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="fixed bottom-24 right-8 bg-primary hover:bg-primary/90 text-white p-3 md:p-4 rounded-full shadow-lg z-40 transition-all hover:scale-110 flex items-center justify-center"
                    aria-label="Scroll to top"
                >
                    <ArrowUp className="h-5 w-5 md:h-6 md:w-6" />
                </motion.button>
            )}
        </div>
    );
};

export default About;
