import React from 'react'
import Preloader from '../Components/Home/Preloader'
import Menu from '../Components/Home/Menu'
import Section from '../Components/Home/Section'
import CheckoutBreadcrumb from '../Components/Checkout/CheckoutBreadcrumb'
import CheckoutSection from '../Components/Checkout/CheckoutSection'
import Footer from '../Components/Home/Footer'
import Search from '../Components/Home/Search'
import withPreloader from '../Components/withPreloader'

const checkout = () => {
  return (
    <div>
        {/* <Preloader/> */}
        <Menu/>
        <Section/>
        <CheckoutBreadcrumb/>
        <CheckoutSection />
        <Footer />
        <Search />
    </div>
  )
}

export default withPreloader(checkout)