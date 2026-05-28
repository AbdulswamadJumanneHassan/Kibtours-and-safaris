import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle, ArrowUp } from 'lucide-react';

const Contact = () => {
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

    return (
        <div className="space-y-10 md:space-y-16 px-2 md:px-0">
            <section className="text-center space-y-2 md:space-y-4 pt-8 md:pt-12">
                <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold italic text-primary">Get In Touch</h1>
                <p className="text-slate-300 max-w-2xl mx-auto text-xs md:text-base lg:text-lg">
                    Planning your dream trip? We are here to help you every step of the way. Contact us today for a personalized itinerary.
                </p>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12">
                {/* Contact Info */}
                <div className="space-y-6 md:space-y-8">
                    <div className="glass p-6 md:p-10 rounded-2xl md:rounded-3xl space-y-6 md:space-y-8">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Contact Information</h2>

                        <div className="flex items-start space-x-4 md:space-x-6">
                            <div className="p-3 md:p-4 bg-primary/20 rounded-2xl text-primary flex-shrink-0">
                                <Phone className="h-5 w-5 md:h-6 md:w-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-base md:text-lg">Call Us</h4>
                                <p className="text-slate-400 text-xs md:text-sm">+255 672 559 426</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4 md:space-x-6">
                            <div className="p-3 md:p-4 bg-accent/20 rounded-2xl text-accent flex-shrink-0">
                                <Mail className="h-5 w-5 md:h-6 md:w-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-base md:text-lg">Email Us</h4>
                                <p className="text-slate-400 text-xs md:text-sm">kibtoursandsafaris@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4 md:space-x-6">
                            <div className="p-3 md:p-4 bg-primary/20 rounded-2xl text-primary flex-shrink-0">
                                <MapPin className="h-5 w-5 md:h-6 md:w-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-base md:text-lg">Visit Us</h4>
                                <p className="text-slate-400 text-xs md:text-sm">Stone Town, Zanzibar</p>
                            </div>
                        </div>

                        <div className="pt-6 md:pt-8 border-t border-white/10">
                            <h4 className="font-bold mb-3 md:mb-4 text-sm md:text-base">Chat on WhatsApp</h4>
                            <a
                                href="https://wa.me/+255 672 559 426"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center space-x-3 text-[#25D366] hover:underline text-xs md:text-sm"
                            >
                                <MessageCircle className="h-4 w-4 md:h-5 md:w-5" />
                                <span>Quick WhatsApp Contact</span>
                            </a>
                        </div>
                    </div>

                    {/* Map */}
                    <div className="glass h-48 md:h-64 rounded-2xl md:rounded-3xl overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3176.5199721998115!2d39.18625907385683!3d-6.160726060377851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185cd1bf2138daed%3A0x3c451ef58a9a29dc!2sKIB%20tours%20and%20safaris!5e1!3m2!1sen!2stz!4v1776243944993!5m2!1sen!2stz"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="KIB tours and safaris - Stone Town, Zanzibar"
                        ></iframe>
                    </div>
                </div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="glass p-6 md:p-10 rounded-2xl md:rounded-3xl"
                >
                    <h2 className="text-xl md:text-3xl font-bold mb-4 md:mb-8">Send Message</h2>
                    <form className="space-y-4 md:space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
                            <div className="space-y-1 md:space-y-2">
                                <label className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-500">Name</label>
                                <input
                                    type="text"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg md:rounded-xl px-3 md:px-4 py-2 md:py-3 text-xs md:text-sm focus:outline-none focus:border-primary transition-colors"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div className="space-y-1 md:space-y-2">
                                <label className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-500">Email</label>
                                <input
                                    type="email"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg md:rounded-xl px-3 md:px-4 py-2 md:py-3 text-xs md:text-sm focus:outline-none focus:border-primary transition-colors"
                                    placeholder="Your Email"
                                />
                            </div>
                        </div>
                        <div className="space-y-1 md:space-y-2">
                            <label className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-500">Subject</label>
                            <select className="w-full bg-white/5 border border-white/10 rounded-lg md:rounded-xl px-3 md:px-4 py-2 md:py-3 text-xs md:text-sm focus:outline-none focus:border-primary transition-colors">
                                <option className="bg-slate-900">General Inquiries</option>
                                <option className="bg-slate-900">Safari Bookings</option>
                                <option className="bg-slate-900">Zanzibar Tours</option>
                                <option className="bg-slate-900">Adventures</option>
                                <option className="bg-slate-900">Hotel Reservations</option>
                            </select>
                        </div>
                        <div className="space-y-1 md:space-y-2">
                            <label className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-500">Message</label>
                            <textarea
                                rows="4"
                                className="w-full bg-white/5 border border-white/10 rounded-lg md:rounded-xl px-3 md:px-4 py-2 md:py-3 text-xs md:text-sm focus:outline-none focus:border-primary transition-colors"
                                placeholder="How can we help you?"
                            ></textarea>
                        </div>
                        <button className="btn-primary w-full flex items-center justify-center py-2.5 md:py-4 text-xs md:text-sm">
                            Send Message <Send className="ml-2 h-3 w-3 md:h-4 md:w-4" />
                        </button>
                    </form>
                </motion.div>
            </div>

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

export default Contact;
