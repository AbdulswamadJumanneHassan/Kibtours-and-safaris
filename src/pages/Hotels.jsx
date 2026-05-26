import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, MapPin, Coffee, Wifi, Waves, ArrowUp } from 'lucide-react';

const Hotels = () => {
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

    const beachHotels = [
        {
            name: "Gold Zanzibar",
            location: "Zanzibar Beach",
            rating: 5,
            description: "Premier beachfront luxury resort with breathtaking ocean views.",
            image: "src/assets/gold.jpg"
        },
        {
            name: "Amaan Bungalows",
            location: "Zanzibar Coast",
            rating: 5,
            description: "Intimate beachside bungalows offering private paradise getaways.",
            image: "src/assets/amaan.jpg"
        },
        {
            name: "The Palm",
            location: "Zanzibar Beach",
            rating: 4,
            description: "Tropical beachfront retreat with world-class amenities.",
            image: "src/assets/palm.jpg"
        },
        {
            name: "Flame Tree Cottage",
            location: "Zanzibar Coast",
            rating: 5,
            description: "Boutique beachside cottages surrounded by lush tropical gardens.",
            image: "src/assets/flame.jpg"
        },
        {
            name: "Azanzi Hotel",
            location: "Zanzibar Beach",
            rating: 4,
            description: "Contemporary beachfront hotel with modern comforts.",
            image: "src/assets/azanzi.webp"
        },
        {
            name: "Kendwa Rocks",
            location: "Kendwa, Zanzibar",
            rating: 5,
            description: "Beachfront rock resort with stunning sunset views.",
            image: "src/assets/kendwa.jpg"
        },
        {
            name: "Baraza Beach & Spa",
            location: "Zanzibar Beach",
            rating: 5,
            description: "Luxurious beach resort with world-class spa facilities.",
            image: "src/assets/baraza.jpg"
        },
        {
            name: "Breezez Beach Club",
            location: "Zanzibar Beach",
            rating: 4,
            description: "Vibrant beach club resort with activities and relaxation.",
            image: "src/assets/brees.jpg"
        },
        {
            name: "The Residence",
            location: "Zanzibar Beach",
            rating: 5,
            description: "Ultra-luxury beachfront residence with exclusive amenities.",
            image: "src/assets/residence.jpg"
        }
    ];

    const townHotels = [
        {
            name: "Golden Tulip",
            location: "Stone Town",
            rating: 4,
            description: "Historic hotel in the heart of Stone Town's cultural district.",
            image: "src/assets/golden tulip.jfif"
        },
        {
            name: "Maru Maru",
            location: "Stone Town",
            rating: 5,
            description: "Boutique hotel capturing the essence of traditional Zanzibar.",
            image: "src/assets/maru maru.jfif"
        },
        {
            name: "Africa House",
            location: "Stone Town",
            rating: 5,
            description: "Iconic heritage hotel with panoramic views of the harbor.",
            image: "src/assets/africa house.jpg"
        },
        {
            name: "Beyt al Salaam",
            location: "Stone Town",
            rating: 4,
            description: "Charming traditional boutique hotel with contemporary comfort.",
            image: "src/assets/salaam.jpg"
        },
        {
            name: "Park Hyatt",
            location: "Stone Town",
            rating: 5,
            description: "Luxury international hotel in the historic city center.",
            image: "src/assets/Park Hyatt.jpg"
        },
        {
            name: "Serena Hotel",
            location: "Stone Town",
            rating: 5,
            description: "Premium heritage hotel with authentic Swahili architecture.",
            image: "src/assets/serena.jpg"
        },
        {
            name: "Tembo Hotel",
            location: "Stone Town",
            rating: 4,
            description: "Traditional hotel overlooking the bustling waterfront.",
            image: "src/assets/tembo.jpg"
        },
        {
            name: "Dhow Palace",
            location: "Stone Town",
            rating: 5,
            description: "Historic palace-hotel with stunning architectural details.",
            image: "src/assets/dhow palace.jpg"
        },
        {
            name: "Double Tree",
            location: "Stone Town",
            rating: 4,
            description: "Modern upscale hotel in the heart of Stone Town.",
            image: "src/assets/double tree.jpg"
        },
        {
            name: "Zanzibar Coffee House",
            location: "Stone Town",
            rating: 4,
            description: "Charming heritage property combining tradition and comfort.",
            image: "src/assets/coffee.jpg"
        }
    ];

    const HotelCard = ({ hotel }) => (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="glass-card group"
        >
            <div className="relative h-40 md:h-72 overflow-hidden">
                <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-2 md:top-4 right-2 md:right-4 flex space-x-0.5 md:space-x-1">
                    {[...Array(hotel.rating)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 md:h-4 md:w-4 text-accent fill-accent" />
                    ))}
                </div>
            </div>
            <div className="p-4 md:p-8">
                <div className="flex items-center text-[10px] md:text-xs text-primary mb-2 md:mb-3 font-semibold uppercase tracking-widest">
                    <MapPin className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
                    {hotel.location}
                </div>
                <h3 className="text-base md:text-2xl font-bold mb-2 md:mb-4">{hotel.name}</h3>
                <p className="text-slate-400 text-xs md:text-sm mb-4 md:mb-8 leading-relaxed">
                    {hotel.description}
                </p>

                <div className="flex items-center justify-between">
                    <div className="flex space-x-2 md:space-x-4">
                        <div className="flex flex-col items-center">
                            <Wifi className="h-3 w-3 md:h-4 md:w-4 text-slate-500 mb-0.5 md:mb-1" />
                            <span className="text-[7px] md:text-[10px] uppercase text-slate-500">Free Wifi</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <Coffee className="h-3 w-3 md:h-4 md:w-4 text-slate-500 mb-0.5 md:mb-1" />
                            <span className="text-[7px] md:text-[10px] uppercase text-slate-500">Breakfast</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <Waves className="h-3 w-3 md:h-4 md:w-4 text-slate-500 mb-0.5 md:mb-1" />
                            <span className="text-[7px] md:text-[10px] uppercase text-slate-500">Pool</span>
                        </div>
                    </div>
                    <button 
                        onClick={() => window.open('https://wa.me/255672559426', '_blank')}
                        className="btn-primary py-1.5 md:py-2 px-4 md:px-8 text-xs md:text-sm cursor-pointer"
                    >
                        Book Now
                    </button>
                </div>
            </div>
        </motion.div>
    );

    return (
        <div className="space-y-10 md:space-y-16 px-2 md:px-0">
            <section className="text-center space-y-2 md:space-y-4 pt-8 md:pt-12">
                <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold italic text-primary">Zanzibar Luxury Hotels</h1>
                <p className="text-slate-300 max-w-2xl mx-auto text-xs md:text-base lg:text-lg">
                    Discover our handpicked collection of the finest hotels in Zanzibar - from breezy beachfront retreats to charming historic town properties.
                </p>
            </section>

            {/* Beach Hotels Section */}
            <section className="space-y-4 md:space-y-6">
                <div>
                    <h2 className="text-xl md:text-4xl font-bold text-primary mb-4 md:mb-8 flex items-center">
                        <span className="w-1 h-8 md:h-10 bg-primary rounded-full mr-3"></span>
                        Beach Hotels
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                    {beachHotels.map((hotel, index) => (
                        <HotelCard key={index} hotel={hotel} />
                    ))}
                </div>
            </section>

            {/* Town Hotels Section */}
            <section className="space-y-4 md:space-y-6 mt-12 md:mt-16">
                <div>
                    <h2 className="text-xl md:text-4xl font-bold text-primary mb-4 md:mb-8 flex items-center">
                        <span className="w-1 h-8 md:h-10 bg-primary rounded-full mr-3"></span>
                        Town Hotels
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                    {townHotels.map((hotel, index) => (
                        <HotelCard key={index} hotel={hotel} />
                    ))}
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

export default Hotels;
