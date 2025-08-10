import { useUser } from '@clerk/clerk-react';
import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import { SignedIn, SignInButton, SignedOut, UserButton } from '@clerk/clerk-react';

const menuVariants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 80, damping: 15 } },
    exit: { x: "-100%", opacity: 0, transition: { duration: 0.3 } }
};

const ResponsiveMenu = ({ openNavbar, setOpenNavbar }) => {
    const { user } = useUser();

    return (
        <AnimatePresence>
            {openNavbar && (
                <motion.div
                    key="mobileMenu"
                    variants={menuVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="fixed bottom-0 top-0 left-0 z-20 h-screen w-[75%] 
                               flex flex-col justify-between 
                               bg-gradient-to-b from-pink-300 to-yellow-100
                               px-8 pt-16 text-black md:hidden 
                               rounded-r-2xl shadow-2xl"
                >

                    <div>
                        <div className="flex items-center justify-start gap-3">
                            {user ? (
                                <UserButton
                                    appearance={{
                                        elements: {
                                            rootBox: "transform scale-[1.5]",
                                            avatarBox: "w-16 h-16"
                                        }
                                    }}
                                />
                            ) : (
                                <FaUserCircle size={50} className="text-pink-500" />
                            )}
                            <div>
                                <h1 className="text-xl font-bold px-2">
                                    Hello, {user?.firstName || "Guest"}
                                </h1>
                                <h1 className="text-sm text-slate-600 px-2">
                                    {user ? "Premium User" : "Visitor"}
                                </h1>
                            </div>
                        </div>

                        <nav className="mt-12">
                            <ul className="flex flex-col gap-7 text-2xl font-semibold font-mono">
                                {['/', '/product', '/about', '/contact'].map((path, index) => {
                                    const labels = ['Home', 'Products', 'About', 'Contact'];
                                    return (
                                        <motion.li
                                            key={path}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.1 * (index + 1) }}
                                            className="relative group cursor-pointer"
                                        >
                                            <Link
                                                to={path}
                                                onClick={() => setOpenNavbar(false)}
                                                className="transition-all duration-300 text-gray-800 
               group-hover:bg-gradient-to-r group-hover:from-red-700 
               group-hover:to-yellow-600 group-hover:text-transparent 
               group-hover:bg-clip-text"
                                            >
                                                {labels[index]}
                                                <span className="absolute left-0 bottom-0 w-0 h-0.5 
                     bg-gradient-to-r from-pink-500 to-yellow-400 
                     md:group-hover:w-full transition-all duration-300">
                                                </span>
                                            </Link>

                                        </motion.li>
                                    );
                                })}
                            </ul>
                            <div className="mt-10">
                                <SignedOut>
                                    <Link
                                        to="/sign-in"
                                        className="bg-red-600 text-white py-1 px-3 rounded-md cursor-pointer font-serif w-full text-center block"
                                    >
                                        Sign In
                                    </Link>
                                </SignedOut>

                                <SignedIn>
                                    {/* <UserButton
                                        appearance={{
                                            elements: {
                                                avatarBox: "w-10 h-10",
                                            },
                                        }}
                                    /> */}
                                </SignedIn>
                            </div>

                        </nav>

                    </div>

                    <button
                        onClick={() => setOpenNavbar(false)}
                        className="mb-6 p-3 rounded-full bg-white/40 hover:bg-white/90 transition-colors text-black font-extrabold"
                    >
                        ✕
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ResponsiveMenu;
