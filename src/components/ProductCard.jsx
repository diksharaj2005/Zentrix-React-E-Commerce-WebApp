import React from 'react';
import { IoCartOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/Cartget';
import { motion } from 'framer-motion';

const ProductCard = ({ product }) => {
    const navigate = useNavigate();
    const { addToCart } = useCart();

    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            onClick={() => navigate(`/product/${product.id}`)}
            className='border relative border-gray-200 rounded-2xl cursor-pointer shadow-md hover:shadow-2xl transition-all p-3  h-max bg-white'
        >
            <img
                src={product.image}
                alt={product.title}
                className='bg-gray-100 rounded-xl aspect-square object-contain w-full'

            />
            <h1 className='line-clamp-2 p-1 font-semibold'>{product.title}</h1>
            <p className='my-1 md:text-lg text-sm text-gray-900 font-extrabold'>${product.price}</p>

            <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className='md:px-3 md:py-2 py-1.5 px-2 text-lg w-full cursor-pointer flex gap-2 items-center justify-center font-semibold bg-gradient-to-r from-yellow-300 to-pink-500 text-black rounded-full shadow-md mt-2'
                onClick={() => addToCart(product)}
            >
                <IoCartOutline className='h-6 w-6' />
                Add to Cart
            </motion.button>
        </motion.div>
    );
};

export default ProductCard;
