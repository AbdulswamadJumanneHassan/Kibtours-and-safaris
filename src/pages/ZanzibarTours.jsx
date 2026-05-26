import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Waves, Palmtree, Anchor, Camera, ArrowUp, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ZanzibarTours = () => {
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

    const tours = [
        {
            title: "Safari Blue",
            description: "A full day sea adventure experience a dhow sailing and range of activities.",
            image: "src/assets/safari blue 3.jpg",
            tag: "Water"
        },
        {
            title: "Sunset Cruise",
            description: "Experience magical sunsets from the Indian Ocean on a romantic sailing adventure.",
            image: "src/assets/sunset cruise.jpg",
            tag: "Romance"
        },
        {
            title: "Mnemba Island",
            description: "Snorkel in crystal clear waters with vibrant coral reefs and tropical marine life.",
            image: "src/assets/mnemba.jpg",
            tag: "Snorkeling"
        },
        {
            title: "Quad Bike",
            description: "Thrilling off-road adventure through Zanzibar's scenic landscapes and coastal villages.",
            image: "src/assets/quad bike.png",
            tag: "Adventure"
        },
        {
            title: "Spice Tour",
            description: "A sensory journey through the spice farms of Zanzibar. See, smell and taste the island's spices.",
            image: "src/assets/spice tour.jfif",
            tag: "Cultural"
        },
        {
            title: "The Rock Restaurant",
            description: "Dine at the iconic restaurant built on a rock in the sea with spectacular ocean views.",
            image: "src/assets/the rock.jpg",
            tag: "Dining"
        },
        {
            title: "Nakupenda Island",
            description: "Visit the pristine sandbar island known for its crystal clear waters and pristine beaches.",
            image: "src/assets/nakupenda1.jpg",
            tag: "Beach"
        },
        {
            title: "Prison Island",
            description: "Explore the historic island home to giant tortoises and colorful coral gardens.",
            image: "src/assets/prison.jpg",
            tag: "History"
        },
        {
            title: "Stone Town Tour",
            description: "Walk through the historic winding alleys of Stone Town, a UNESCO World Heritage site.",
            image: "src/assets/stone town.jpg",
            tag: "Heritage"
        },
        {
            title: "Jozani Forest",
            description: "Trek through the lush mangrove forests and encounter endemic red colobus monkeys.",
            image: "src/assets/jozani forest.jpg",
            tag: "Wildlife"
        },
        {
            title: "Baraka Natural Aquarium",
            description: "Swim with tropical fish and explore the natural rock pools teeming with marine life.",
            image: "src/assets/aquarium.jpg",
            tag: "Marine"
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
                <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold italic text-primary">Zanzibar Beach & Tours</h1>
                <p className="text-slate-300 max-w-2xl mx-auto text-xs md:text-base lg:text-lg">
                    From the historic streets of Stone Town to the turquoise waters of the Indian Ocean, experience the spice island like never before.
                </p>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
                {tours.map((tour, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="glass-card flex flex-col group h-full"
                    >
                        <div className="relative h-32 md:h-48 overflow-hidden">
                            <img
                                src={tour.image}
                                alt={tour.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute top-2 md:top-3 left-2 md:left-3 bg-accent text-white text-[8px] md:text-[10px] uppercase font-bold px-2 py-1 rounded">
                                {tour.tag}
                            </div>
                        </div>
                        <div className="p-4 md:p-6 flex-grow flex flex-col justify-between">
                            <div>
                                <h3 className="text-sm md:text-lg font-bold mb-1 md:mb-2 group-hover:text-primary transition-colors">{tour.title}</h3>
                                <p className="text-slate-400 text-[10px] md:text-xs leading-relaxed line-clamp-3">
                                    {tour.description}
                                </p>
                            </div>
                            <button 
                                    onClick={() => window.open('https://wa.me/255672559426', '_blank')}
                                    className="btn-primary py-1.5 md:py-2 px-4 md:px-6 text-xs md:text-sm cursor-pointer"
                                >
                                    Book This Tour
                                </button>
                        </div>
                    </motion.div>
                ))}
            </section>

            {/* Feature Grid */}
            <section className="py-12 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                    <div className="glass p-6 md:p-10 rounded-2xl md:rounded-3xl space-y-2 md:space-y-4">
                        <Sun className="h-8 w-8 md:h-10 md:w-10 text-accent" />
                        <h3 className="text-lg md:text-2xl font-bold">Beach Holidays</h3>
                        <p className="text-slate-400 text-xs md:text-sm">Pristine white sands and turquoise waters of Nungwi and Kendwa.</p>
                    </div>
                    <div className="glass p-6 md:p-10 rounded-2xl md:rounded-3xl space-y-2 md:space-y-4 border-t-4 border-primary">
                        <Waves className="h-8 w-8 md:h-10 md:w-10 text-primary" />
                        <h3 className="text-lg md:text-2xl font-bold">Water Sports</h3>
                        <p className="text-slate-400 text-xs md:text-sm">Exhilarating snorkeling, diving, and sailing excursions.</p>
                    </div>
                    <div className="glass p-6 md:p-10 rounded-2xl md:rounded-3xl space-y-2 md:space-y-4">
                        <Palmtree className="h-8 w-8 md:h-10 md:w-10 text-accent" />
                        <h3 className="text-lg md:text-2xl font-bold">Luxury Resorts</h3>
                        <p className="text-slate-400 text-xs md:text-sm">Handpicked luxury beachfront accommodations for the ultimate comfort.</p>
                    </div>
                </div>
            </section>

            {/* Visual Quote */}
            <section className="relative h-64 md:h-[400px] rounded-2xl md:rounded-3xl overflow-hidden flex items-center justify-center">
                <img
                    src="src/assets/sunset.jfif"
                    className="absolute inset-0 w-full h-full object-cover grayscale opacity-30"
                    alt="Quote background"
                />
                <div className="relative z-10 text-center max-w-2xl px-4 md:px-6">
                    <Camera className="h-8 md:h-12 w-8 md:w-12 text-primary mx-auto mb-4 md:mb-6 opacity-50" />
                    <p className="text-base md:text-3xl font-display italic leading-snug">
                        "Zanzibar is not just a destination; it's a sensory symphony of spices, sea breeze, and centuries of history."
                    </p>
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

export default ZanzibarTours;
