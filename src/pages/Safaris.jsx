import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Compass, Calendar, Users, MapPin, CheckCircle2, ArrowUp, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Safaris = () => {
    const navigate = useNavigate();
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
    const safaris = [
        {
            title: "Tarangire National Park",
            description: "Famous for its massive elephant herds and iconic ancient baobab trees that dot the landscape.",
            image: "src/assets/tarangire.jpg",
            highlights: ["Elephant Paradise", "Baobab Trees", "Bird Watching"],
        },
        {
            title: "Manyara National Park",
            description: "Discover tree-climbing lions, pink flamingos, and the breathtaking scenery of the Great Rift Valley.",
            image: "src/assets/manyara.jpg",
            highlights: ["Tree Lions", "Alkaline Lake", "Monkey Forest"],
        },
        {
            title: "Serengeti National Park",
            description: "Witness the legendary Great Migration and the highest concentration of large predators in the world.",
            image: "src/assets/serengeti.jfif",
            highlights: ["Big Five", "Great Migration", "Hot Air Balloon"],
        },
        {
            title: "Kilimanjaro National Park",
            description: "Trek to the summit of Africa's highest mountain with stunning views across multiple ecological zones.",
            image: "src/assets/kilimanjaro.jpg",
            highlights: ["Uhuru Peak", "Five Zones", "Mountain Views"],
        },
        {
            title: "Gombe National Park",
            description: "Track wild chimpanzees in their natural habitat and witness remarkable primate behavior.",
            image: "src/assets/gombe.jpg",
            highlights: ["Chimpanzees", "Primate Tracking", "Forest Walk"],
        },
        {
            title: "Mikumi National Park",
            description: "Experience diverse wildlife in Tanzania's fourth-largest national park with scenic water holes.",
            image: "src/assets/mikumi.jpg",
            highlights: ["Hippo Pools", "Wildlife", "Scenic Views"],
        },
        {
            title: "Ruaha National Park",
            description: "Explore one of Africa's largest national parks with pristine wilderness and abundant wildlife.",
            image: "src/assets/ruaha.jpg",
            highlights: ["Great Ruaha River", "Remote Wilderness", "Wildlife"],
        },
        {
            title: "Arusha National Park",
            description: "Discover diverse ecosystems from montane forests to volcanic peaks within a compact area.",
            image: "src/assets/arusha.jpg",
            highlights: ["Ngurdoto Crater", "Mount Meru", "Forest Trails"],
        },
        {
            title: "Ngorongoro Crater",
            description: "Explore the world's largest inactive volcanic caldera, a natural zoo with abundant wildlife in a small area.",
            image: "src/assets/crater.jpeg",
            highlights: ["Rare Black Rhino", "Flamingos", "Magical Views"],
        }
    ];

    return (
        <div className="space-y-10 md:space-y-16 px-2 md:px-0">
            <section className="text-center space-y-2 md:space-y-4 pt-8 md:pt-12 flex flex-col items-center">
                <button
                    onClick={() => navigate('/')}
                    className="mb-4 md:mb-6 flex items-center space-x-2 text-primary hover:text-accent transition-colors hover:scale-110"
                >
                    <Home className="h-5 w-5" />
                    <span className="text-sm md:text-base">Back to Home</span>
                </button>
                <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold italic text-primary">Tanzania Safaris</h1>
                <p className="text-slate-300 max-w-2xl mx-auto text-xs md:text-base lg:text-lg">
                    Embark on the adventure of a lifetime. Our curated safari experiences take you to the most iconic national parks in Tanzania.
                </p>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
                {safaris.map((safari, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card flex flex-col md:flex-row overflow-hidden group"
                    >
                        <div className="md:w-2/5 relative overflow-hidden h-40 md:h-auto">
                            <img
                                src={safari.image}
                                alt={safari.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4 md:hidden">
                                <h3 className="text-base md:text-2xl font-bold">{safari.title}</h3>
                            </div>
                        </div>
                        <div className="md:w-3/5 p-4 md:p-8 flex flex-col justify-between">
                            <div>
                                <h3 className="hidden md:block text-base md:text-2xl font-bold mb-2 md:mb-4">{safari.title}</h3>
                                <p className="text-slate-400 text-xs md:text-sm mb-4 md:mb-6 leading-relaxed">
                                    {safari.description}
                                </p>
                                <div className="space-y-2 md:space-y-3 mb-4 md:mb-8">
                                    {safari.highlights.map((h, i) => (
                                        <div key={i} className="flex items-center text-xs md:text-sm text-slate-300">
                                            <CheckCircle2 className="h-3 w-3 md:h-4 md:w-4 text-primary mr-2" />
                                            {h}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex items-center justify-between pt-4 md:pt-6 border-t border-white/10">
                                <span className="text-primary font-bold text-xs md:text-lg">{safari.price}</span>
                                <button 
                                    onClick={() => window.open('https://wa.me/255672559426', '_blank')}
                                    className="btn-primary py-1.5 md:py-2 px-4 md:px-6 text-xs md:text-sm cursor-pointer"
                                >
                                    Book This Safari
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </section>

            {/* Info Banner */}
            <section className="glass p-6 md:p-12 rounded-2xl md:rounded-3xl grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
                <div>
                    <Calendar className="h-6 w-6 md:h-8 md:w-8 text-accent mx-auto mb-2" />
                    <div className="text-base md:text-xl font-bold">365 Days</div>
                    <p className="text-[8px] md:text-xs text-slate-500 uppercase tracking-widest">Available</p>
                </div>
                <div>
                    <Users className="h-6 w-6 md:h-8 md:w-8 text-accent mx-auto mb-2" />
                    <div className="text-base md:text-xl font-bold">100% Private</div>
                    <p className="text-[8px] md:text-xs text-slate-500 uppercase tracking-widest">Small Groups</p>
                </div>
                <div>
                    <Compass className="h-6 w-6 md:h-8 md:w-8 text-accent mx-auto mb-2" />
                    <div className="text-base md:text-xl font-bold">All Inclusive</div>
                    <p className="text-[8px] md:text-xs text-slate-500 uppercase tracking-widest">Worry Free</p>
                </div>
                <div>
                    <MapPin className="h-6 w-6 md:h-8 md:w-8 text-accent mx-auto mb-2" />
                    <div className="text-base md:text-xl font-bold">Wild Access</div>
                    <p className="text-[8px] md:text-xs text-slate-500 uppercase tracking-widest">Deep Bush</p>
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

export default Safaris;
