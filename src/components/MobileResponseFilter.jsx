import React from 'react';
import { FaFilter } from 'react-icons/fa';
import { getData } from '../context/Data';
import { motion, AnimatePresence } from 'framer-motion';

const MobileResponseFilter = ({
    openFilter,
    setOpenFilter,
    search,
    setSearch,
    brand,
    setBrand,
    priceRange,
    setPriceRange,
    category,
    setCategory,
    handleBranChange,
    handleCatChange,
}) => {
    const { categoryData, BrandData } = getData();

    const panelVariants = {
        hidden: { x: '100%', opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { type: 'spring', stiffness: 80, damping: 15 },
        },
        exit: { x: '100%', opacity: 0, transition: { duration: 0.3 } },
    };

    return (
        <>
            {/* Header */}
            <div className="bg-gray-200 flex justify-between items-center md:hidden px-4 p-2 mt-5">
                <h1 className="font-semibold text-xl flex items-center gap-2">
                    Filters
                </h1>
                <FaFilter
                    onClick={() => setOpenFilter(true)}
                    className="text-gray-950 cursor-pointer"
                />
            </div>

            {/* Animated Filter Panel */}
            <AnimatePresence>
                {openFilter ? (
                    <motion.div
                        key="filterPanel"
                        variants={panelVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="fixed top-0 right-0 w-[80%] h-full bg-gradient-to-r from-yellow-100 to-pink-300 p-4 md:hidden shadow-lg z-50 overflow-y-auto"
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setOpenFilter(false)}
                            className="mb-4 text-xl font-bold text-gray-700"
                        >
                            ✕
                        </button>

                        {/* Search */}
                        <input
                            type="text"
                            placeholder="Search.."
                            className="bg-white p-2 rounded-md border-gray-400 border-2 w-full"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />

                        {/* Category */}
                        <h1 className="mt-3 font-semibold text-xl">Category</h1>
                        <div className="flex flex-col gap-2 mt-2">
                            {categoryData?.map((item, index) => (
                                <div key={index} className="flex gap-2 items-center">
                                    <input
                                        type="checkbox"
                                        name={item}
                                        checked={category === item}
                                        value={item}
                                        onChange={handleCatChange}
                                    />
                                    <button className="cursor-pointer uppercase">
                                        {item}
                                    </button>
                                </div>
                            ))}
                        </div>

                        {/* Brand */}
                        <h1 className="mt-3 font-semibold text-xl">Brand</h1>
                        <select
                            className="bg-white w-full max-w-xs border-gray-200 border-2 rounded-md p-2 truncate
             max-h-48 overflow-y-auto"
                            value={brand}
                            onChange={handleBranChange}
                            size={Math.min(BrandData?.length, 6)} // Show at most 6 at once
                        >
                            {BrandData?.map((item, index) => (
                                <option
                                    key={index}
                                    value={item}
                                    className="truncate"
                                >
                                    {item.toUpperCase()}
                                </option>
                            ))}
                        </select>


                        {/* Price Range */}
                        <h1 className="mt-3 font-semibold text-xl">Price Range</h1>
                        <div className="flex flex-col gap-1">
                            <label>
                                Price Range: ${priceRange[0]} - ${priceRange[1]}
                            </label>
                            <input
                                type="range"
                                min="0"
                                max="5000"
                                value={priceRange[1]}
                                onChange={(e) =>
                                    setPriceRange([priceRange[0], Number(e.target.value)])
                                }
                            />
                        </div>

                        {/* Reset Button */}
                        <button
                            className="bg-pink-700 text-white rounded-md px-3 py-1 mt-5 cursor-pointer"
                            onClick={() => {
                                setSearch('');
                                setCategory('All');
                                setBrand('All');
                                setPriceRange([0, 5000]);
                                setOpenFilter(false)
                            }}
                        >
                            Reset Filters
                        </button>
                    </motion.div>
                ) : null}
            </AnimatePresence>
        </>
    );
};

export default MobileResponseFilter;
