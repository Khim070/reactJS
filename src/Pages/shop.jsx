import React from 'react'
import withPreloader from '../Components/withPreloader'
import Menu from '../Components/Home/Menu'
import Section from '../Components/Home/Section'
import ShopBreadcrumb from '../Components/Shop/ShopBreadcrumb'
import ShopSection from '../Components/Shop/ShopSection'
import Footer from '../Components/Home/Footer'
import Search from '../Components/Home/Search'

const shop = () => {
  return (
    <div>
        <Menu/>
        <Section/>
        <ShopBreadcrumb/>
        <ShopSection/>
        <Footer/>
        <Search/>
    </div>
  )
}

export default withPreloader(shop)