import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, Clock, MapPin, ChevronLeft, ChevronRight, Activity, ArrowUp, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const TripAdvisorLogo = () => (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm3.5 7c1.933 0 3.5 1.567 3.5 3.5S17.433 16 15.5 16 12 14.433 12 12.5 13.567 9 15.5 9zm0 1c-1.378 0-2.5 1.122-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.122 2.5-2.5-1.122-2.5-2.5-2.5zM8.5 9c1.933 0 3.5 1.567 3.5 3.5S10.433 16 8.5 16 5 14.433 5 12.5 6.567 9 8.5 9zm0 1c-1.378 0-2.5 1.122-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.122 2.5-2.5-1.122-2.5-2.5-2.5z"/>
    </svg>
);

const Home = () => {
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

    const categories = [
        {
            id: 'zanzibar',
            title: "Zanzibar Tours",
            description: "Immerse yourself in the turquoise waters and rich culture of the Spice Island. From historical Stone Town tours to serene snorkeling at Mnemba Atoll.",
            linkTo: "/zanzibar-tours",
            featured: {
                title: "Zanzibar Tour",
                location: "Zanzibar",
                image: "src/assets/nakupenda.jpg",
                duration: "Full Experience"
            }
        },
        {
            id: 'safaris',
            title: "Tanzania Safaris",
            description: "Witness the majestic wildlife of Serengeti, Ngorongoro, and beyond. Experience the Great Migration and the Big Five in their natural habitat.",
            linkTo: "/safaris",
            featured: {
                title: "Safaris",
                location: "Tanzania Safaris",
                image: "src/assets/safari.jpg",
                duration: "Full Experience"
            }
        },
        {
            id: 'adventures',
            title: "Adventures",
            description: "Push your limits with our curated adventure experiences across Tanzania. From Kilimanjaro treks to hot air balloon escapes.",
            linkTo: "/adventures",
            featured: {
                title: "Adventures",
                location: "Tanzania",
                image: "src/assets/Adventure.jpeg",
                duration: "Full Experience",
                activity: "Hiking"
            }
        }
    ];

    const reviews = [
        {
            name: "Sarah & James Miller",
            country: "United Kingdom",
            text: "Kibtours made our dream safari come true. The Serengeti was breathtaking, and the service was absolutely world-class!",
            rating: 5
        },
        {
            name: "Michael Chen",
            country: "Canada",
            text: "The Zanzibar Spice Tour was a highlight of our trip. Knowledgeable guides and amazing atmosphere. Highly recommend!",
            rating: 5
        },
        {
            name: "Elena Rodriguez",
            country: "Spain",
            text: "Unforgettable experience at Ngorongoro. Kibtours handled every detail perfectly. We'll be back for sure!",
            rating: 5
        }
    ];

    const [currentReview, setCurrentReview] = useState(0);

    const nextReview = () => {
        setCurrentReview((prev) => (prev + 1) % reviews.length);
    };

    const prevReview = () => {
        setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
    };

    useEffect(() => {
        const timer = setInterval(nextReview, 5000);
        return () => clearInterval(timer);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
    };

    const FocusSection = ({ category }) => (
        <section className="py-12 md:py-20 px-2 md:px-0">
            <div className="max-w-4xl mx-auto mb-8 md:mb-12 text-center">
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">{category.title}</h2>
                <p className="text-slate-400 text-sm md:text-base lg:text-lg">{category.description}</p>
            </div>

            <motion.div
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="max-w-6xl mx-auto"
            >
                <Link to={category.linkTo} className="group block relative overflow-hidden rounded-xl md:rounded-[2rem] glass aspect-[16/10] md:aspect-[21/9]">
                    <img
                        src={category.featured.image}
                        alt={category.featured.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 md:p-8 lg:p-12 flex flex-col justify-end">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 md:gap-6">
                            <div className="space-y-2 md:space-y-4">
                                <div className="flex items-center space-x-2 text-primary font-bold tracking-wider uppercase text-xs md:text-sm">
                                    <MapPin className="h-3 w-3 md:h-4 md:w-4" />
                                    <span>{category.featured.location}</span>
                                </div>
                                <h3 className="text-lg md:text-3xl lg:text-5xl font-bold text-white group-hover:text-primary transition-colors">
                                    {category.featured.title}
                                </h3>
                                <div className="flex items-center space-x-4 text-slate-300 flex-wrap">
                                    <div className="flex items-center text-xs md:text-sm">
                                        <Clock className="h-3 w-3 md:h-5 md:w-5 mr-1 md:mr-2 text-primary" />
                                        {category.featured.duration}
                                    </div>
                                </div>
                            </div>
                            <div className="shrink-0">
                                <span className="inline-flex items-center justify-center bg-primary text-white px-4 md:px-8 py-2 md:py-4 rounded-full font-bold text-xs md:text-lg group-hover:bg-primary/90 transition-all hover:scale-105">
                                    View Now
                                    <ArrowRight className="ml-1 md:ml-2 h-3 w-3 md:h-6 md:w-6 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </div>
                        </div>
                    </div>
                </Link>
            </motion.div>
        </section>
    );

    return (
        <div className="space-y-8 md:space-y-12 pb-12 md:pb-20">
            {/* Hero Section */}
            <section className="min-h-[70vh] md:min-h-[90vh] flex flex-col items-center justify-center text-center px-3 md:px-4 relative overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl z-10"
                >
                    <h1 className="text-3xl md:text-6xl lg:text-8xl font-bold mb-4 md:mb-8 leading-tight">
                        Explore Zanzibar Tanzania with <br />
                        <span className="text-primary italic">Kib tours and Safaris</span>
                    </h1>
                    <p className="text-sm md:text-lg lg:text-2xl text-slate-200 mb-6 md:mb-12 max-w-2xl mx-auto leading-relaxed">
                        Experience the raw beauty of African wildlife and the serene beaches of Zanzibar. Unforgettable adventures tailored just for you.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-6 justify-center">
                        <Link to="/safaris" className="bg-primary hover:bg-primary/90 text-white px-6 md:px-10 py-3 md:py-5 rounded-full font-bold text-sm md:text-xl flex items-center justify-center group transition-all">
                            Start Your Safari
                            <ArrowRight className="ml-2 h-4 w-4 md:h-6 md:w-6 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link to="/zanzibar-tours" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-6 md:px-10 py-3 md:py-5 rounded-full font-bold text-sm md:text-xl border border-white/20 transition-all">
                            Zanzibar Escape
                        </Link>
                    </div>
                </motion.div>

                {/* Decorative background blur */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] -z-10" />
            </section>

            {/* Category Focus Sections */}
            {categories.map((cat) => (
                <FocusSection key={cat.id} category={cat} />
            ))}

            {/* Reviews Slider */}
            <section className="relative overflow-hidden py-16 md:py-32 bg-black/40">
                <div className="max-w-7xl mx-auto px-3 md:px-4">
                    <div className="text-center mb-8 md:mb-16">
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4">Guest Reviews</h2>
                        <p className="text-slate-400 text-xs md:text-base lg:text-lg">Hear from our travelers about their unforgettable journeys.</p>
                    </div>

                    <div className="max-w-4xl mx-auto relative px-2 md:px-0">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentReview}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="glass rounded-2xl md:rounded-[3rem] p-6 md:p-12 lg:p-24 text-center border border-white/5"
                            >
                                <div className="flex justify-center mb-4 md:mb-8 gap-1">
                                    {[...Array(reviews[currentReview].rating)].map((_, i) => (
                                        <Star key={i} className="h-5 w-5 md:h-8 md:w-8 text-accent fill-accent" />
                                    ))}
                                </div>
                                <p className="text-base md:text-2xl lg:text-4xl font-medium italic mb-6 md:mb-12 leading-relaxed text-slate-100">
                                    "{reviews[currentReview].text}"
                                </p>
                                <div>
                                    <div className="font-bold text-base md:text-xl lg:text-2xl text-white mb-1">{reviews[currentReview].name}</div>
                                    <div className="text-primary font-medium text-xs md:text-sm">{reviews[currentReview].country}</div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation Buttons */}
                        <div className="flex justify-center mt-6 md:mt-12 space-x-4 md:space-x-6">
                            <button
                                onClick={prevReview}
                                className="p-2 md:p-4 rounded-full bg-white/5 hover:bg-primary transition-all border border-white/10 hover:scale-110 active:scale-95"
                            >
                                <ChevronLeft className="h-5 w-5 md:h-8 md:w-8 text-white" />
                            </button>
                            <button
                                onClick={nextReview}
                                className="p-2 md:p-4 rounded-full bg-white/5 hover:bg-primary transition-all border border-white/10 hover:scale-110 active:scale-95"
                            >
                                <ChevronRight className="h-5 w-5 md:h-8 md:w-8 text-white" />
                            </button>
                        </div>

                        {/* Indicators */}
                        <div className="flex justify-center mt-6 md:mt-12 space-x-2 md:space-x-3">
                            {reviews.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentReview(i)}
                                    className={`h-2 md:h-3 rounded-full transition-all duration-500 ${currentReview === i ? 'bg-primary w-8 md:w-12' : 'bg-white/10 w-2 md:w-3 hover:bg-white/20'}`}
                                />
                            ))}
                        </div>

                        {/* TripAdvisor Reviews Link */}
                        <div className="flex justify-center mt-8 md:mt-12">
                            <a
                                href="https://www.tripadvisor.co.uk/Attraction_Review-g488129-d26524660-Reviews-KIB_tours_and_safaris-Stone_Town_Zanzibar_City_Zanzibar_Island_Zanzibar_Archipel.html"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md border border-primary text-primary hover:bg-primary/5 transition-colors"
                                aria-label="View our reviews on TripAdvisor"
                            >
                                <TripAdvisorLogo />
                                <span>View Our Reviews</span>
                                <ExternalLink className="h-4 w-4" />
                            </a>
                        </div>
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

export default Home;
