import banner from '../assets/banner.png'
import { motion } from 'framer-motion';
import React from 'react';
import { useNavigate } from 'react-router-dom';
const Banner = () => {
    const navigate = useNavigate()
    return (
        <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className='bg-gray-50 md:py-24'
        >
            <div
                className="relative max-w-6xl mx-auto md:rounded-2xl pt-18 bg-cover bg-center h-[550px] md:h-[600px]"
                style={{
                    backgroundImage: `url(${banner})`,
                    backgroundAttachment: 'fixed',
                    backgroundPosition: 'center',
                }}
            >
                <div className='text-center text-white px-4 flex flex-col justify-center items-center h-full'>
                    <motion.h1
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
                        className='text-2xl md:text-4xl lg:text-6xl font-bold py-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]'
                    >
                        Revolutionize Your Tech Life with{' '}
                        <strong className='bg-gradient-to-r from-pink-400 to-yellow-300 text-transparent bg-clip-text drop-shadow-[0_0_15px_rgba(255,192,203,0.5)]'>
                            Zentrix
                        </strong>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className='text-lg font-medium md:text-2xl mb-5 -mt-2 drop-shadow-[0_0_8px_rgba(255,255,255,0.9)]'
                    >
                        Explore cutting-edge gadgets, unbeatable deals, and free doorstep delivery—all in one place.
                    </motion.p>

                    <motion.button
                        onClick={() => navigate('/product')}
                        initial={{ opacity: 0, y: 30, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
                        className='bg-red-500 hover:bg-[#002fff] text-white font-semibold py-2 px-4 md:py-3 md:px-6 rounded-lg transition duration-300 drop-shadow-[0_0_12px_rgba(255,0,0,0.6)] cursor-pointer'
                    >
                        Shop Now
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
};

export default Banner;
