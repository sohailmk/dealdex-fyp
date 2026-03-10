import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'
import RelatedProducts from '../components/RelatedProducts'

const Home = () => {
  return (
    <div>
      <Hero />
      <BestSeller/>
      <LatestCollection/>
      <RelatedProducts/>
    </div>
  )
}

export default Home
