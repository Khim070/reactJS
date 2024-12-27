import React from 'react'
import withPreloader from '../Components/withPreloader'
import Menu from '../Components/Home/Menu'
import Section from '../Components/Home/Section'
import ShopDetailSection from '../Components/ShopDetail/ShopDetailSection'
import ShopDetailRelated from '../Components/ShopDetail/ShopDetailRelated'
import Footer from '../Components/Home/Footer'
import Search from '../Components/Home/Search'

const shopDetail = () => {
  return (
    <div>
        <Menu/>
        <Section/>
        <ShopDetailSection/>
        <ShopDetailRelated />
        <Footer/>
        <Search/>
    </div>
  )
}

export default withPreloader(shopDetail)