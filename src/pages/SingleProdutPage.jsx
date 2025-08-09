import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';
import { IoCartOutline } from 'react-icons/io5';

import Loading from "../assets/loader.gif";
import Breadcrums from '../components/Breadcrums';
import { useCart } from '../context/Cartget';

const SingleProductPage = ({ product }) => {
    const { id } = useParams();
    const [singleProduct, setSingleProduct] = useState(null);
    const { addToCart } = useCart();

    const getSingleProduct = async () => {
        try {
            const res = await axios.get(`https://fakestoreapi.in/api/products/${id}`);
            const product = res.data.product || res.data;
            setSingleProduct(product);
            console.log(product);
        } catch (error) {
            console.error("Error fetching product:", error);
        }
    };

    useEffect(() => {
        getSingleProduct();
    }, [id]);

    const getOriginalCost = () => {
        if (!singleProduct) return null;
        return Math.round(singleProduct.price + (singleProduct.price * singleProduct.discount / 100));
    };

    return (
        <>
            {singleProduct ? (
                <motion.div
                    className='px-4 pb-4 md:px-0 md:mx-20 md:my-10'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <Breadcrums title={singleProduct.title} />
                    <motion.div
                        className='max-w-5xl mx-auto md:p-7 grid grid-cols-1 md:grid-cols-2 gap-10'
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        <motion.div
                            className='w-full'
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.4 }}

                        >
                            <img
                                src={singleProduct.image}
                                alt={singleProduct.title}
                                className='rounded-md md:w-full w-[350px] object-cover shadow-xl'
                            />
                        </motion.div>

                        <motion.div
                            className='flex flex-col gap-4'
                            initial={{ x: 30, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                        >
                            <h1 className='text-xl md:text-3.5xl font-bold text-gray-800'>{singleProduct.title}</h1>

                            <div className='text-yellow-500 text-sm md:text-lg font-medium'>
                                {singleProduct.brand?.toUpperCase()} / {singleProduct.category?.toUpperCase()} / {singleProduct.model}
                            </div>

                            <p className='text-xl md:text-2xl text-red-500 font-bold'>
                                ${singleProduct.price}
                                {" "}
                                <span className='line-through text-gray-500 text-base'>
                                    ${getOriginalCost()}
                                </span>
                                {" "}
                                <span className='bg-amber-500 text-black text-sm md:text-base rounded px-2 py-1 ml-2'>
                                    {singleProduct.discount}% OFF
                                </span>
                            </p>

                            <p className='text-gray-600 leading-relaxed'>{singleProduct.description}</p>

                            <div className='flex items-center gap-4'>
                                <label className='text-sm font-medium text-gray-600'>Quantity:</label>
                                <input
                                    type="number"
                                    min={1}
                                    value={1}
                                    className='w-20 border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-pink-500'
                                />
                            </div>

                            <motion.button
                                onClick={() => addToCart(singleProduct)}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0px 0px 12px rgba(255, 105, 180, 0.4)"
                                }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 300, damping: 15, mass: 1 }}
                                className='flex items-center justify-center gap-2 mt-4 px-6 py-2 text-lg font-semibold bg-gradient-to-r from-yellow-300 to-pink-500 text-black rounded-full shadow-md transition-all cursor-pointer'
                            >
                                <IoCartOutline className='h-6 w-6' />
                                Add to Cart
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </motion.div>
            ) : (
                <div className="flex items-center justify-center h-screen">
                    <img src={Loading} alt="Loading..." className="w-24 h-24" />
                </div>
            )}
        </>
    );
};

export default SingleProductPage;
