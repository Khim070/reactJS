import React from 'react'
import Menu from '../Components/Home/Menu'
import Section from '../Components/Home/Section'
import withPreloader from '../Components/withPreloader'
import ShoppingCartBreadcrumb from '../Components/ShoppingCart/ShoppingCartBreadcrumb'
import ShoppingCartSection from '../Components/ShoppingCart/ShoppingCartSection'
import Footer from '../Components/Home/Footer'
import Search from '../Components/Home/Search'

const shoppingCart = () => {
  return (
    <div>
        <Menu/>
        <Section/>
        <ShoppingCartBreadcrumb/>
        <ShoppingCartSection/>
        <Footer/>
        <Search/>
    </div>
  )
}

export default withPreloader(shoppingCart)