import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const sectionVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.15,
            duration: 0.6,
            ease: "easeOut",
        },
    }),
};

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="min-h-screen bg-gradient-to-b from-yellow-50 via-pink-50 to-purple-100 py-10 px-4 sm:px-6 lg:px-20"
        >
            <motion.div
                className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-10 space-y-10"
                initial="hidden"
                animate="visible"
                variants={sectionVariant}
            >
                <motion.h1
                    className="text-4xl font-extrabold text-center text-purple-700"
                    variants={sectionVariant}
                >
                    About Zentrix
                </motion.h1>

                <motion.p
                    className="text-gray-800 text-lg leading-relaxed text-center"
                    variants={sectionVariant}
                    custom={1}
                >
                    Welcome to{" "}
                    <span className="font-bold text-red-500">Zentrix</span> — your vibrant hub for
                    cutting-edge electronics, bold innovation, and colorful tech solutions. Whether
                    you're looking for the newest gadgets or sleek accessories, we've got you
                    covered.
                </motion.p>

                <motion.div className="space-y-4" variants={sectionVariant} custom={2}>
                    <h2 className="text-2xl font-bold text-pink-600">Our Mission</h2>
                    <p className="text-gray-700 text-base leading-relaxed">
                        At Zentrix, our mission is simple: make futuristic technology feel fun,
                        friendly, and accessible. We blend innovation with joy — delivering powerful
                        tech that fits every lifestyle.
                    </p>
                </motion.div>

                <motion.div className="space-y-4" variants={sectionVariant} custom={3}>
                    <h2 className="text-2xl font-bold text-yellow-500">Why Choose Zentrix?</h2>
                    <ul className="list-disc pl-6 text-gray-800 space-y-2">
                        <li>Premium electronics curated from the best global brands</li>
                        <li>Express delivery with secure packaging and real-time tracking</li>
                        <li>Friendly support — real humans, real help</li>
                        <li>Simple returns, secure checkout, and a no-stress experience</li>
                    </ul>
                </motion.div>

                <motion.div className="space-y-4" variants={sectionVariant} custom={4}>
                    <h2 className="text-2xl font-bold text-purple-600">Our Vision</h2>
                    <p className="text-gray-700 text-base leading-relaxed">
                        We imagine a world where tech is playful yet powerful. At Zentrix, we’re
                        always exploring bold solutions that spark excitement, convenience, and
                        creativity in everyday life.
                    </p>
                </motion.div>

                <motion.div
                    className="text-center mt-10"
                    variants={sectionVariant}
                    custom={5}
                >
                    <h3 className="text-xl font-semibold text-pink-600 mb-2">
                        Be Part of the Zentrix Vibe
                    </h3>
                    <p className="text-gray-700 mb-4">
                        Tech is better when it’s bright, bold, and made for you. Whether you're a
                        gamer, creator, trendsetter, or just tech-curious — Zentrix welcomes you.
                    </p>
                    <Link to="/product">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 text-white px-6 py-2 rounded-full font-semibold transition duration-300"
                        >
                            Start Shopping
                        </motion.button>
                    </Link>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default About;
