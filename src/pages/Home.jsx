import React from 'react'
import Carousel from '../components/Carousel'
import Banner from '../components/Banner'
import FeatureSection from '../components/FeatureSection'

const Home = () => {
    return (
        <div className='overflow-x-hidden'>
            <Carousel />
            <Banner />
            <FeatureSection />

        </div>
    )
}

export default Home
