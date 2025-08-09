import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { FaCaretDown } from 'react-icons/fa';
import { IoCartOutline } from 'react-icons/io5';
import { SignedIn, SignInButton, SignedOut, UserButton } from '@clerk/clerk-react';
import { div } from 'framer-motion/client';
import { CgClose } from 'react-icons/cg';
import { useCart } from '../context/Cartget';
import { AlignCenter, AlignLeft } from 'lucide-react';
import ResponsiveMenu from './ResponsiveMenu';


const Navbar = ({ location, forLocation, openDetect, setOpenDetect }) => {

    const { cartItem } = useCart()
    const [openNavbar, setOpenNavbar] = useState(false)

    const toggleDropDown = () => {
        setOpenDetect(!openDetect)
    }
    return (
        <div className='bg-white py-3 shadow-black-200 shadow-2xl px-4 md:px-0 '>
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <div className="flex gap-3 items-center">
                    <Link to="/" className="flex items-center mx-3">
                        <motion.img
                            src={logo}
                            alt="Entrix Logo"
                            className="w-12 h-12 object-contain"
                            initial={{ scale: 0, y: -30 }}
                            animate={{ scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                        />
                        <motion.h1
                            className="text-3xl font-extrabold bg-gradient-to-r from-pink-500 to-yellow-400 text-transparent bg-clip-text"
                            initial={{ rotate: 0 }}
                            animate={{ rotate: 360 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: 'easeInOut' }}
                        >
                            entrix
                        </motion.h1>
                    </Link >

                    <div className="md:flex gap-2 cursor-pointer text-gray-800 items-center hidden">
                        <MapPin className='text-red-600 ml-7' />
                        <span className='font-semibold text-[12px]'>
                            {location ? <div className='-space-y-1.3'><p>{location.county}</p>
                                <p>{location.state},{location.postcode}</p></div> : "Add Address"}
                        </span>
                        <FaCaretDown onClick={toggleDropDown} />
                    </div>
                    {
                        openDetect ? <div className='w-[250px] h-max shadow-2xl z-50 bg-white fixed top-16 left-60 border-2 p-5  border-gray-100 rounded-md'>
                            <h1 className='font-semibold mb-4  flex justify-between'>Change Location <span onClick={toggleDropDown}><CgClose /></span></h1>
                            <button onClick={forLocation} className='bg-red-600 text-white px-3 py-1 rounded-md cursor-pointer hover:bg-red-400'>Detect My Location</button>
                        </div> : null
                    }
                </div >

                {/* menu : home , product,about,contact*/}
                <nav className='flex items-center gap-7' >
                    <ul className='md:flex gap-7 text-[16px] font-semibold font-serif hidden'>
                        {['/', '/product', '/about', '/contact'].map((path, index) => {
                            const labels = ['Home', 'Products', 'About', 'Contact'];
                            return (
                                <motion.li
                                    key={path}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 * (index + 1) }}
                                    className="relative group cursor-pointer"
                                >
                                    <NavLink to={path} className="group relative">
                                        {({ isActive }) => (
                                            <>
                                                <span
                                                    className={`transition-all duration-300 ${isActive
                                                        ? 'bg-gradient-to-r from-pink-500 to-yellow-400 text-transparent bg-clip-text font-bold'
                                                        : 'text-gray-800'
                                                        } group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-yellow-400 group-hover:text-transparent group-hover:bg-clip-text`}
                                                >
                                                    {labels[index]}
                                                </span>
                                                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-yellow-400 group-hover:w-full transition-all duration-300"></span>
                                            </>
                                        )}
                                    </NavLink>
                                </motion.li>
                            );
                        })}
                    </ul>

                    <Link to={'/cart'} className='relative'>
                        <IoCartOutline className='h-7 w-7 ' />
                        <span className='bg-red-500 px-2 rounded-full absolute -top-3 -right-3 text-white'>{cartItem.length}</span>
                    </Link>
                    <div className='hidden md:block'>
                        <SignedOut>
                            <SignInButton className='bg-red-600 text-white py-1 px-3 rounded-md cursor-pointer font-serif' />
                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </div>
                    {
                        openNavbar ? <AlignLeft onClick={() => setOpenNavbar(false)} className='h-7 w-7 md:hidden' /> : <AlignCenter onClick={() => setOpenNavbar(true)} className='h-7 w-7 md:hidden' />
                    }

                </nav >
            </div >
            <ResponsiveMenu openNavbar={openNavbar} setOpenNavbar={setOpenNavbar} />
        </div >
    );
};

export default Navbar;
