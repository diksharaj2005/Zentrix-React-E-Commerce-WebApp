import React, { useContext, useEffect } from 'react';
import { Data } from '../context/Data';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import Category from './Category';

const Carousel = () => {
    const { data, fetchProducts } = useContext(Data);
    console.log(data);

    useEffect(() => {
        fetchProducts();
    }, []);

    const SamplePrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div onClick={onClick} className={`arrow ${className}`} style={{ zIndex: 3 }}>
                <AiOutlineArrowLeft className='arrows' style={{ ...style, display: "block", borderRadius: "50px", background: "yellow", color: "#0909ff", position: "absolute", padding: "2px", left: "50px" }} />
            </div>
        );
    };

    const SampleNextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div onClick={onClick} className={`arrow ${className}`}>
                <AiOutlineArrowRight className='arrows' style={{ ...style, display: "block", borderRadius: "50px", background: "yellow", color: "#0909ff", position: "absolute", padding: "2px", right: "50px" }} />
            </div>
        );
    };

    var settings = {
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        nextArrow: <SampleNextArrow to="next" />,
        prevArrow: <SamplePrevArrow to="prev" />,
    };

    return (
        <div className='relative '>
            {(!data || data.length === 0) ? (
                <div className="flex justify-center items-center h-[550px] bg-white">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
                </div>
            ) : (
                <Slider {...settings}>
                    {
                        data?.slice(0, 7)?.map((item, index) => {
                            return (
                                <div key={index} className='bg-gradient-to-r from-[#fb73d7] via-[#f634a5] to-[#f90760] -z-10'>
                                    <div className="flex flex-col md:flex-row gap-10 justify-center  h-[600px] md:h-[500px] my-30 md:my-0 p-4">
                                        <div className="md:space-y-7 space-y-3">
                                            <motion.h3
                                                initial={{ opacity: 0, y: -50 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.6, delay: 0.2 }}
                                                className='text-[#fffb00] font-extrabold text-sm font-sans'
                                            >
                                                Experience Smart Living with Zentrix Electronics
                                            </motion.h3>

                                            <motion.h1
                                                initial={{ opacity: 0, x: -90 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.8, delay: 0.3 }}
                                                className='md:text-3xl text-xl font-bold uppercase md:line-clamp-3 line-clamp-2 text-white md:w-[500px]'
                                            >
                                                {item.title}
                                            </motion.h1>

                                            <motion.p
                                                initial={{ opacity: 0, x: 90 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.8, delay: 0.4 }}
                                                className='md:w-[500px] line-clamp-3 text-gray-900 pr-7 text-sm'
                                            >
                                                {item.description}
                                            </motion.p>

                                            <motion.button
                                                whileHover={{ scale: 1.3 }}
                                                whileTap={{ scale: 1 }}
                                                className="bg-gradient-to-r from-[#15b6cf] to-[#2c1dff] text-white rounded-md px-3 py-1 mt-2 cursor-pointer transform"
                                            >
                                                Shop Now
                                            </motion.button>

                                        </div>

                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.8, delay: 0.5 }}
                                            className='self-start mt-25 md:mt-0 py-2'
                                        >
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className='rounded-full w-[350px] hover:scale-105 transition-all shadow-2xl shadow-[#fefa28]'
                                            />
                                        </motion.div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </Slider>)}
            <Category />
        </div>
    );
};

export default Carousel;
