import React from 'react';
import { useCart } from '../context/Cartget';
import { FaRegTrashAlt } from 'react-icons/fa';
import { LuNotebookText } from 'react-icons/lu';
import { MdDeliveryDining } from 'react-icons/md';
import { GiShoppingBag } from 'react-icons/gi';
import { useUser } from '@clerk/clerk-react';
import emptyCart from '../assets/emptyCart.gif';
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';

const Cart = ({ location, forLocation }) => {
    const { cartItem, updateQuantity, deleteItem } = useCart();
    const { user } = useUser();
    const navigate = useNavigate();

    const totalPrice = cartItem.reduce(
        (total, item) => total + Number(item.price || 0) * (item.quantity || 1),
        0
    );

    return (
        <div className='mt-10 max-w-6xl mx-auto mb-5 px-4 md:px-0'>
            <AnimatePresence mode="wait">
                {cartItem.length > 0 ? (
                    <motion.div
                        key="cart"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 0.4 }}
                        className="md:m-10"
                    >
                        <motion.h1
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                            className="font-extrabold text-3xl bg-gradient-to-t from-pink-500 to-black text-transparent bg-clip-text"
                        >
                            My Cart ({cartItem.length})
                        </motion.h1>

                        <div className="mt-10 space-y-4">
                            {cartItem.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 30 }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                    className="bg-gray-100 p-3 rounded-md flex items-center justify-between"
                                >
                                    <div className="flex items-center gap-4">
                                        <motion.img
                                            whileHover={{ scale: 1.05 }}
                                            src={item.image}
                                            alt={item.title}
                                            className="w-20 h-20 md:rounded-md cursor-pointer rounded-full"
                                            onClick={() => navigate(`/product/${item.id}`)}
                                        />
                                        <div>
                                            <h1 className="md:w-[300px] line-clamp-2 ">{item.title}</h1>
                                            <p className="text-purple-600 font-semibold text-lg">
                                                ${item.price}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="bg-gradient-to-t from-red-600 to-yellow-600 text-white flex gap-3 px-2.5 rounded-md font-bold py-1">
                                        <motion.button
                                            whileTap={{ scale: 0.85 }}
                                            onClick={() => updateQuantity(item.id, "decrease")}
                                        >
                                            -
                                        </motion.button>
                                        <span>{item.quantity || 1}</span>
                                        <motion.button
                                            whileTap={{ scale: 0.85 }}
                                            onClick={() => updateQuantity(item.id, "increase")}
                                        >
                                            +
                                        </motion.button>
                                    </div>
                                    <motion.span
                                        whileHover={{ scale: 1.2, rotate: 10 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="group hover:bg-white/60 transition-all rounded-full p-3 hover:shadow-2xl cursor-pointer"
                                        onClick={() => deleteItem(item.id)}
                                    >
                                        <FaRegTrashAlt className="text-red-600 group-hover:text-black text-2xl transition-colors duration-300" />
                                    </motion.span>
                                </motion.div>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:mt-10">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="bg-gray-200 rounded-md p-7 mt-4 space-y-2"
                            >
                                <h1 className="text-gray-800 font-bold text-xl">Delivery Info</h1>
                                <div className="flex flex-col space-y-1">
                                    <label>Full Name</label>
                                    <input type="text" value={user?.fullName || ''} readOnly className="p-2 rounded-md" />
                                </div>
                                <div className="flex flex-col space-y-1">
                                    <label>Address</label>
                                    <input type="text" value={location?.county || ''} className="p-2 rounded-md" />
                                </div>
                                <div className="flex w-full gap-5">
                                    <div className="flex flex-col space-y-1 w-full">
                                        <label>State</label>
                                        <input type="text" value={location?.state || ''} className="p-2 rounded-md w-full" />
                                    </div>
                                    <div className="flex flex-col space-y-1 w-full">
                                        <label>PostCode</label>
                                        <input type="text" value={location?.postcode || ''} className="p-2 rounded-md w-full" />
                                    </div>
                                </div>
                                <div className="flex gap-5 w-full">
                                    <div className="flex flex-col space-y-1 w-full">
                                        <label>Country</label>
                                        <input type="text" value={location?.country || ''} className="p-2 rounded-md w-full" />
                                    </div>
                                    <div className="flex flex-col space-y-1 w-full">
                                        <label>Phone Number</label>
                                        <input type="text" placeholder="Enter Your Phone Number.." className="p-2 rounded-md w-full" />
                                    </div>
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-gradient-to-t from-red-600 to-yellow-600 text-white px-4 py-2 rounded-full mt-3.5 md:ml-[40%] ml-[30%]"
                                >
                                    Submit
                                </motion.button>
                                <div className="flex justify-center text-gray-500 mt-8">
                                    --------------OR----------------
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={forLocation}
                                    className="bg-gradient-to-t from-red-600 to-yellow-600 text-white px-4 py-2 rounded-full mt-3  md:ml-[35%] ml-[20%]"
                                >
                                    Detect Location
                                </motion.button>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="bg-white border border-gray-200 shadow-xl rounded-md p-7 h-max space-y-2 md:mb-0 mb-8"
                            >
                                <h1 className="text-black font-bold text-xl">Bill Details</h1>
                                <div className="flex justify-between">
                                    <h1 className="flex gap-1 items-center text-gray-700">
                                        <LuNotebookText /> Items Total
                                    </h1>
                                    <p>${totalPrice.toFixed(2)}</p>
                                </div>
                                <div className="flex justify-between">
                                    <h1 className="flex gap-1 items-center text-gray-700">
                                        <MdDeliveryDining /> Delivery Charge
                                    </h1>
                                    <p className="text-pink-700 font-semibold">
                                        <span className="text-gray-500 line-through text-sm mr-1">$25</span> FREE
                                    </p>
                                </div>
                                <div className="flex justify-between">
                                    <h1 className="flex gap-1 items-center text-gray-700">
                                        <GiShoppingBag /> Handling Charge
                                    </h1>
                                    <p className="text-pink-700 font-semibold">$5</p>
                                </div>
                                <hr className="text-gray-300 mt-2" />
                                <div className="flex justify-between">
                                    <h1 className="text-pink-600 font-bold text-lg">Grand Total</h1>
                                    <p>${(totalPrice + 5).toFixed(2)}</p>
                                </div>
                                <h1 className="font-semibold text-gray-800 mt-7">Apply Promo Code</h1>
                                <div className="flex gap-3">
                                    <input type="text" placeholder="Enter code" className="p-2 rounded-md w-full" />
                                    <motion.button whileTap={{ scale: 0.9 }} className="border border-gray-300 px-4 rounded-full">
                                        Apply
                                    </motion.button>
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-gradient-to-t from-pink-600 to-yellow-600 text-white px-3 py-2 rounded-full w-full mt-3"
                                >
                                    Proceed to Checkout
                                </motion.button>
                            </motion.div>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="empty"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.4 }}
                        className="flex flex-col gap-3 justify-center items-center h-[500px]"
                    >
                        <h1 className="text-center font-bold text-4xl text-red-600">
                            Oh no! Your cart is empty
                        </h1>
                        <motion.img
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            src={emptyCart}
                            alt="Empty cart"
                            className="h-90 w-90"
                        />
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => navigate('/product')}
                            className="bg-gradient-to-b from-pink-500 to-red-400 text-white px-3 py-1 border-2 rounded-full"
                        >
                            Continue shopping
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Cart;
