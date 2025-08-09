import axios from 'axios'
import { div } from 'framer-motion/client'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import truck_loading from '../assets/truck_loading.webm'
import { ChevronLeft } from 'lucide-react'
import ProductView from '../components/ProductView'

const CategoryProd = () => {
    const params = useParams()
    const category = params.category
    console.log(category);
    const navigate = useNavigate()
    const [searchData, setSearchData] = useState([])
    const categoryFilterData = async () => {
        try {
            const res = await axios.get(`https://fakestoreapi.in/api/products/category?type=${category}`)
            const data = res.data.products
            setSearchData(data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        categoryFilterData()
        window.scrollTo(0,0)
    }, [])
    return (
        <div>
            {
                searchData.length > 0 ? (
                    <div className='max-w-6xl mx-auto mt-10 mb-10 px-4 '>
                        <button className='bg-gray-700 text-white px-3 py-1 rounded-full cursor-pointer flex gap-1 items-center' onClick={() => navigate('/')}><ChevronLeft /> Back</button>
                        {
                            searchData.map((product, index) => {
                                return <ProductView key={index} product={product} />
                            })
                        }

                    </div>
                ) : (
                    <div className="flex items-center justify-center h-[500px]">
                        <video
                            src={truck_loading}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="h-60 w-60"
                        />
                    </div>

                )
            }
        </div>
    )
}

export default CategoryProd