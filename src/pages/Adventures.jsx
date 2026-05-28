import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Activity, Clock, MapPin, CheckCircle2, Mountain, Waves, ArrowUp, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Adventures = () => {
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
    const adventures = [
        {
            title: "Magoroto Forest",
            location: "Southwestern Tanzania",
            description: "Magoroto Forest is a lush, privately protected rainforest nestled in the East Usambara Mountains of Tanzania. Known for its rich biodiversity, scenic hiking trails, and a tranquil freshwater lake, it offers visitors a peaceful escape into nature. The forest is home to unique plant and animal species, making it an ideal destination for eco-tourism, birdwatching, and outdoor adventures.",
            image: "src/assets/magotoro.jpeg",
            duration: "Full Day",
            category: "Trekking",
            icon: <Mountain className="h-5 w-5" />
        },
        {
            title: "Lake Ngozi",
            location: "Mbeya Region",
            description: "Lake Ngozi is the largest crater lake in Tanzania, formed within an ancient volcanic caldera in the Southern Highlands. Surrounded by dense montane forest, the lake is known for its deep emerald waters, cool climate, and scenic hiking trails, offering a peaceful and dramatic natural setting.",
            image: "src/assets/lake njozi.jpeg",
            duration: "Full Day",
            category: "Nature",
            icon: <Waves className="h-5 w-5" />
        },
        {
            title: "Kitulo National Park",
            location: "Southwestern Tanzania",
            description: "Kitulo National Park is a high-altitude plateau in southern Tanzania, famously known as the “Serengeti of Flowers” for its vibrant seasonal wildflower displays. The park features rolling grasslands, rare plant species including orchids, and a cool, scenic landscape ideal for hiking, nature photography, and birdwatching.",
            image: "src/assets/kitulo.jpeg",            duration: "Full Day",            category: "Hiking",
            icon: <Activity className="h-5 w-5" />
        },
        {
            title: "Materuni Waterfall",
            location: "Northern Tanzania",
            description: "Materuni Waterfall is a stunning cascade located in the Kilimanjaro region of northern Tanzania. Known for its breathtaking natural beauty and pristine swimming pool at the base, it offers visitors a refreshing retreat into nature. The waterfall is surrounded by lush vegetation and provides excellent opportunities for hiking, photography, and experiencing authentic Tanzanian culture.",
            image: "src/assets/Materuni waterfall.jpeg",
            duration: "Half Day",
            category: "Hiking",
            icon: <Activity className="h-5 w-5" />
        }
    ];

    return (
        <div className="space-y-12 md:space-y-20 pb-12 md:pb-20">
            {/* Header section */}
            <section className="text-center space-y-3 md:space-y-4 pt-8 md:pt-12 px-3 md:px-0 flex flex-col items-center">
                <button
                    onClick={() => navigate('/')}
                    className="mb-4 md:mb-6 flex items-center space-x-2 text-primary hover:text-accent transition-colors hover:scale-110"
                >
                    <Home className="h-5 w-5" />
                    <span className="text-sm md:text-base">Back to Home</span>
                </button>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold italic text-primary mb-3 md:mb-6">Adventure Awaits</h1>
                    <p className="text-slate-300 max-w-3xl mx-auto text-xs md:text-base lg:text-lg leading-relaxed">
                        From the snowy peak of Kilimanjaro to the deep blue waters of the Indian Ocean,
                        Tanzania offers some of the world's most exhilarating adventure experiences.
                    </p>
                </motion.div>
            </section>

            {/* Adventure Grid */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 px-2 md:px-0">
                {adventures.map((adventure, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="glass-card group flex flex-col h-full border border-white/5 hover:border-primary/30 transition-all duration-500"
                    >
                        <div className="relative h-40 md:h-64 overflow-hidden rounded-t-2xl md:rounded-t-3xl">
                            <img
                                src={adventure.image}
                                alt={adventure.title}
                                loading="lazy"
                                decoding="async"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-4 py-2 rounded-full backdrop-blur-md shadow-lg">
                                {adventure.price}
                            </div>
                            <div className="absolute top-4 left-4 flex items-center bg-black/40 text-white text-[10px] uppercase font-bold px-3 py-1.5 rounded-full backdrop-blur-md border border-white/10">
                                <span className="mr-2">{adventure.icon}</span>
                                {adventure.category}
                            </div>
                        </div>
                        <div className="p-8 flex-grow flex flex-col justify-between">
                            <div>
                                <div className="flex items-center text-xs text-primary font-bold tracking-widest uppercase mb-3">
                                    <MapPin className="h-3 w-3 mr-2" />
                                    {adventure.location}
                                </div>
                                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{adventure.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                    {adventure.description}
                                </p>
                            </div>
                            <div className="flex items-center justify-between pt-6 border-t border-white/5">
                                <div className="flex items-center text-slate-300 text-sm">
                                    <Clock className="h-4 w-4 mr-2 text-primary" />
                                    {adventure.duration}
                                </div>
                                <button 
                                    onClick={() => window.open('https://wa.me/255672559426', '_blank')}
                                    className="btn-primary py-2.5 px-6 text-sm font-bold rounded-full hover:scale-105 transition-transform cursor-pointer"
                                >
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </section>

            {/* Why Adventure section */}
            <section className="py-20 relative px-4">
                <div className="glass p-12 md:p-20 rounded-[3rem] relative overflow-hidden flex flex-col md:flex-row items-center gap-12">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
                    <div className="md:w-1/2 space-y-8">
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight">Safety First, <br /><span className="text-primary italic">Adventure Always</span></h2>
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="bg-primary/20 p-3 rounded-2xl">
                                    <CheckCircle2 className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-1">Certified Guides</h4>
                                    <p className="text-slate-400 text-sm">Experienced professionals with specialized training for each activity.</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="bg-primary/20 p-3 rounded-2xl">
                                    <CheckCircle2 className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-1">Top-Tier Equipment</h4>
                                    <p className="text-slate-400 text-sm">We use only the highest quality, regularly inspected gear for your safety.</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="bg-primary/20 p-3 rounded-2xl">
                                    <CheckCircle2 className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-1">Tailored Experiences</h4>
                                    <p className="text-slate-400 text-sm">Adventures scaled to your experience level and comfort.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 relative">
                        <img
                            src=""
                            alt="Adventure team"
                            loading="lazy"
                            decoding="async"
                            className="rounded-[2rem] shadow-2xl relative z-10"
                        />
                        <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-primary/30 rounded-[2rem] -z-10" />
                    </div>
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

export default Adventures;
