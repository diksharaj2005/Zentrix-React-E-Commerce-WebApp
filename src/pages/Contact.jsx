import React from 'react';
import { motion } from 'framer-motion';

const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2,
            duration: 0.6,
            ease: 'easeOut',
        },
    }),
};

const Contact = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="min-h-screen bg-gradient-to-r from-[#36013b] via-[#e468a0] to-[#3c003f] flex items-center justify-center px-4 py-10"
        >
            <motion.div
                className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-10 w-full max-w-5xl"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
            >
                <motion.h2
                    className="text-4xl font-bold text-white text-center mb-10"
                    variants={fadeIn}
                    custom={0.5}
                >
                    Get in Touch with{" "}
                    <motion.span
                        className="text-yellow-400 inline-block"
                        animate={{ scale: [0.9, 1, 0.9] }}
                        transition={{
                            repeat: Infinity,
                            duration: 1,
                            ease: 'easeInOut',
                        }}
                    >
                        Zentrix
                    </motion.span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Info Section */}
                    <motion.div
                        className="text-white space-y-6"
                        variants={fadeIn}
                        custom={1}
                    >
                        <div>
                            <h3 className="text-2xl font-semibold">Contact Info</h3>
                            <p className="text-gray-300">
                                Have a question or need support? We're always here to help with your tech needs.
                            </p>
                        </div>
                        <div>
                            <p><strong>📍 Address:</strong> 21 Innovation Street, Bistupur, Jamshedpur, India</p>
                            <p><strong>📧 Email:</strong> support@zentrix.in</p>
                            <p><strong>📞 Phone:</strong> +91 62000 12345</p>
                        </div>
                    </motion.div>

                    {/* Form Section */}
                    <motion.form
                        className="space-y-6"
                        variants={fadeIn}
                        custom={1.5}
                    >
                        <div>
                            <label className="block text-white mb-1">Your Name</label>
                            <input
                                type="text"
                                placeholder="John Doe"
                                className="w-full px-4 py-2 bg-white/20 border border-white/30 text-white rounded-xl placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
                            />
                        </div>
                        <div>
                            <label className="block text-white mb-1">Email Address</label>
                            <input
                                type="email"
                                placeholder="john@example.com"
                                className="w-full px-4 py-2 bg-white/20 border border-white/30 text-white rounded-xl placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
                            />
                        </div>
                        <div>
                            <label className="block text-white mb-1">Your Message</label>
                            <textarea
                                rows="4"
                                placeholder="Type your message..."
                                className="w-full px-4 py-2 bg-white/20 border border-white/30 text-white rounded-xl placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
                            />
                        </div>
                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-red-500 text-white font-semibold py-2 rounded-xl transition-all duration-300"
                        >
                            Send Message 🚀
                        </motion.button>
                    </motion.form>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Contact;
