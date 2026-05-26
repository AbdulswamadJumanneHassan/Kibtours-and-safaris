import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Footer = () => {
    const informationLinks = [
        { name: 'About Us', path: '/about' },
        { name: 'Adventures', path: '/adventures' },
        { name: 'Our Services', path: '/services' },
        { name: 'Terms & Conditions', path: '/terms' },
        { name: 'Privacy Policy', path: '/privacy' },
        { name: 'Support', path: '/support' },
        { name: 'Payment Options', path: '/payment' },
        { name: 'Booking Tips', path: '/booking-tips' },
        { name: 'Contact Us', path: '/contact' },
    ];

    return (
        <footer className="relative z-10 bg-black/80 backdrop-blur-md text-white pt-16 pb-8 border-t border-white/10 mt-20">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* Brand */}
                <div className="space-y-6">
                    <div className="flex flex-col space-y-4">
                        <div className="flex items-center space-x-3">
                            <img src={logo} alt="Kib Tour & Safaris Logo" className="h-16 w-16 object-contain" />
                            <div>
                                <h3 className="text-xl font-bold font-display leading-tight">Kib Tour & Safaris</h3>
                                <p className="text-primary font-medium text-sm">Explore Zanzibar Tanzania</p>
                            </div>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                            Choose Kib Tour & Safaris for an extraordinary journey that leaves a lasting impression. We create authentic safari experiences in Zanzibar Tanzania.
                        </p>
                    </div>
                </div>

                {/* Information */}
                <div>
                    <h4 className="text-lg font-semibold mb-6">Information</h4>
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm text-slate-400">
                        {informationLinks.map((link) => (
                            <li key={link.name}>
                                <Link to={link.path} className="hover:text-primary transition-colors">{link.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Get In Touch */}
                <div>
                    <h4 className="text-lg font-semibold mb-6">Get In Touch</h4>
                    <ul className="space-y-4 text-sm text-slate-400">
                        <li className="flex items-start space-x-3">
                            <MapPin className="h-5 w-5 text-primary shrink-0" />
                            <span>Stone Town, Zanzibar</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <Phone className="h-5 w-5 text-primary shrink-0" />
                            <a href="tel:+255672559426" className="hover:text-white transition-colors">Mr. Rakib +255 672 559 426</a>
                        </li>
                        <li className="flex items-center space-x-3">
                            <Mail className="h-5 w-5 text-primary shrink-0" />
                            <a href="mailto:kibtoursandsafaris@gmail.com" className="hover:text-white transition-colors">kibtoursandsafaris@gmail.com</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 border-t border-white/5 mt-16 pt-8 text-center text-sm text-slate-500">
                <p>© {new Date().getFullYear()} Kib Tour & Safaris. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
