import { span } from 'framer-motion/client';
import React from 'react'

const getPage = (current, total) => {
    const pages = [];
    if (total <= 5) {
        for (let i = 1; i <= total; i++) {
            pages.push(i)
        }

    }
    else {
        if (current <= 3) {
            pages.push(1, 2, 3, '...', total)
        }
        else if (current >= total - 2) {
            pages.push(1, '...', total - 2, total - 1, total)
        }
        else {
            pages.push(1, '...', current - 1, current, current + 1, '...', total)
        }
    }
    return pages
}

const Pagination = ({ page, handlePages, dynamicPage }) => {
    return (
        <div className='mt-10 space-x-4'>
            <button onClick={() => handlePages(page - 1)}
                disabled={page === 1} className={`${page === 1 ? "bg-pink-400" : "bg-pink-600"} text-white px-3 py-1 rounded-md cursor-pointer`}>Prev</button>
            {
                getPage(page, dynamicPage)?.map((item, index) => {
                    return (
                        <span key={index}
                            onClick={() => typeof item === "number" && handlePages(item)}
                            className={`cursor-pointer ${item === page ? "text-pink-700 font-bold" : ""}`}>
                            {item}
                        </span>
                    )



                })
            }

            <button
                disabled={page === dynamicPage} className={`${page === dynamicPage ? "bg-pink-300" : 'bg-pink-600'} text-white px-3 py-1 rounded-md cursor-pointer`}
                onClick={() => handlePages(page + 1)}>Next</button>
        </div>
    )
}

export default Pagination