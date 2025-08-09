import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/Cartget'

const ProductView = ({ product }) => {
    const navigate = useNavigate()
    const { addToCart } = useCart()
    return (
        <div className='space-y-4 mt-2 rounded-md md:mx-15'>
            <div className='bg-gray-200 flex gap-7 items-center p-2 rounded-md'>
                <img src={product.image} alt={product.title} className='md:h-50- md:w-50 h-25 w-25 rounded-full cursor-pointer' onClick={() => navigate(`/product/${product.id}`)} />
                <div className='md:space-y-2 space-y-1'>
                    <h1 className='font-bold md:text-xl text-lg line-clamp-3 hover:text-red-400 md:w-full w-[200px] md:py-0 py-1.5'>{product.title}</h1>
                    <p className='font-semibold flex items-center md:text-lg text-sm'>$<span className='md:text-4xl text-2xl mr-0.5'>{product.price}</span> ({product.discount}% off)</p>
                    <p className='text-sm'>FREE delivery <span className='font-semibold'>Fri, 18 Apr</span> <br />
                        Or fastest delivery <span className='font-semibold'>Tomorrow, 17 Apr</span></p>
                    <button onClick={() => addToCart(product)} className='bg-red-500 text-white px-3 py-1 rounded-md'>Add to Cart</button>
                </div>
            </div>
        </div>



    )
}

export default ProductView