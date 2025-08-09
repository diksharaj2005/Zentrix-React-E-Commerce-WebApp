import React from 'react'
import { getData } from '../context/Data';
import { option } from 'framer-motion/client';

const Filter = ({ search, setSearch, brand, priceRange, setPriceRange, category, handleBranChange, handleCatChange, setBrand, setCategory }) => {
    const { categoryData, BrandData } = getData();
    return (
        <div className='bg-gray-200 mt-5 p-3 rounded-md h-max hidden md:block'>
            <input type="text" placeholder='Search..' className='bg-white p-2 rounded-md border-gray-400 border-2' value={search} onChange={(e) => setSearch(e.target.value)} />

            <h1 className='mt-3 font-semibold text-xl'>Category</h1>
            <div className='flex flex-col gap-2 mt-2'>
                {
                    categoryData?.map((item, index) => {
                        return <div key={index} className='flex gap-2'>
                            <input type="checkbox" name={item} checked={category === item} value={item} onChange={handleCatChange} />
                            <button className='cursor-pointer uppercase'>{item}</button>
                        </div>
                    })
                }
            </div>





            <h1 className='mt-3 font-semibold text-xl'>Brand</h1>
            <select name="" id="" className='bg-white w-full border-gray-200 border-2 rounded-b-md' value={brand} onChange={handleBranChange}>
                {
                    BrandData?.map((item, index) => {
                        return <option key={index} value={item}>
                            {item.toUpperCase()}
                        </option>
                    })
                }
            </select>


            <h1 className='mt-3 font-semibold text-xl'>Price Range</h1>
            <div className='flex flex-col gap-1'>
                <label htmlFor="">Price Range:${priceRange[0]}-${priceRange[1]}</label>
                <input type="range" name='' id='' min="0"
                    max="5000" value={priceRange[1]} onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])} />
            </div>
            <button className='bg-pink-700 text-white rounded-md px-3 py-1 mt-5 cursor-pointer' onClick={() => { setSearch(''); setCategory('All'); setBrand('All'); setPriceRange([0, 5000]) }}>Reset Filters</button>

        </div >
    )
}

export default Filter