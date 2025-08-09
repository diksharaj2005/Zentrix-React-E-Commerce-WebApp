import React, { useEffect } from 'react';
import { getData } from '../context/Data';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'

const Category = () => {
    // const { categoryData } = getData();
    const navigate = useNavigate()
    const { data } = getData()
    const getCategory = (data, property) => {
        let newVal = data?.map((currEle) => { return currEle[property] });
        newVal = [...new Set(newVal)];
        return newVal;
    };
    const categoryData = getCategory(data, "category");

    // useEffect(() => {
    //     fetchProducts();
    // }, []);

    return (
        <div className='bg-[#fcfcf4]'>
            <div className="max-w-7xl mx-auto flex gap-4 items-center justify-center md:justify-around py-7 px-4 flex-wrap">
                {categoryData.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <button className='uppercase bg-gradient-to-r from-pink-700 to-yellow-500 text-white px-3 py-1 rounded-b-md cursor-pointer border-black-2' onClick={() => navigate(`/category/${item}`)}>
                            {item}
                        </button>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Category;
