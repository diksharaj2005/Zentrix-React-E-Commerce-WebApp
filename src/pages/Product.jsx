import React, { useEffect, useState } from 'react';
import { getData } from '../context/Data';
import Filter from '../components/Filter';
import Loading from "../assets/loader.gif";
import ProductCard from '../components/ProductCard';
import Pagination from '../components/Pagination';
import Lottie from 'lottie-react';
import lottie from '../assets/lottie.json';
import { motion } from 'framer-motion';
import MobileResponseFilter from '../components/MobileResponseFilter';

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

const Product = () => {
    const { data, fetchProducts } = getData();
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('All');
    const [brand, setBrand] = useState('All');
    const [priceRange, setPriceRange] = useState([0, 5000]);
    const [page, setPage] = useState(1);
    const [openFilter, setOpenFilter] = useState(false)

    useEffect(() => {
        fetchProducts();
        window.scrollTo(0, 0);
    }, []);

    const handleCatChange = (e) => {
        setCategory(e.target.value);
        setPage(1);
        setOpenFilter(false)
    };

    const handleBranChange = (e) => {
        setBrand(e.target.value);
        setPage(1);
        setOpenFilter(false)
    };

    const filterData = data?.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase()) &&
        (category === 'All' || item.category === category) &&
        (brand === 'All' || item.brand === brand) &&
        (item.price >= priceRange[0] && item.price <= priceRange[1])
    );

    const handlePages = (selectedPage) => {
        setPage(selectedPage);
        window.scrollTo(0, 0)
    };

    const dynamicPage = Math.ceil(filterData?.length / 8);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <div className="max-w-6xl mx-auto px-4 mb-10">
                <MobileResponseFilter openFilter={openFilter} setOpenFilter={setOpenFilter} search={search}
                    setSearch={setSearch}
                    brand={brand}
                    setBrand={setBrand}
                    priceRange={priceRange}
                    setPriceRange={setPriceRange}
                    category={category}
                    setCategory={setCategory}
                    handleBranChange={handleBranChange}
                    handleCatChange={handleCatChange} />
                {
                    data?.length > 0 ? (
                        <>
                            <div className="flex gap-8">
                                <Filter
                                    search={search}
                                    setSearch={setSearch}
                                    brand={brand}
                                    setBrand={setBrand}
                                    priceRange={priceRange}
                                    setPriceRange={setPriceRange}
                                    category={category}
                                    setCategory={setCategory}
                                    handleBranChange={handleBranChange}
                                    handleCatChange={handleCatChange}
                                />
                                {
                                    filterData?.length > 0 ? (
                                        <motion.div
                                            className='flex flex-col justify-center items-center'
                                            initial="hidden"
                                            animate="visible"
                                            variants={fadeIn}
                                            custom={0.5}
                                        >
                                            <motion.div
                                                className="grid grid-cols-2 md:grid-cols-4 md:gap-7 gap-3 mt-10"
                                                initial="hidden"
                                                animate="visible"
                                                variants={fadeIn}
                                                custom={1}
                                            >
                                                {
                                                    filterData?.slice(page * 8 - 8, page * 8).map((product, index) => (
                                                        <motion.div
                                                            key={index}
                                                            initial={{ opacity: 0, scale: 0.9 }}
                                                            animate={{ opacity: 1, scale: 1 }}
                                                            transition={{ delay: index * 0.05 }}
                                                        >
                                                            <ProductCard product={product} />
                                                        </motion.div>
                                                    ))
                                                }
                                            </motion.div>

                                            <motion.div
                                                initial="hidden"
                                                animate="visible"
                                                variants={fadeIn}
                                                custom={1.5}
                                            >
                                                <Pagination handlePages={handlePages} page={page} dynamicPage={dynamicPage} />
                                            </motion.div>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            className='flex justify-center items-center md:h-[600px] md:w-[900px]'
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            <Lottie animationData={lottie} className='w-[400px]' />
                                        </motion.div>
                                    )
                                }
                            </div>
                        </>
                    ) : (
                        <div className="flex items-center justify-center h-[400px]">
                            <img src={Loading} alt="Loading..." className="w-24 h-24" />
                        </div>
                    )
                }
            </div>
        </motion.div>
    );
};

export default Product;
