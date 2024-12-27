import React from 'react'
import Menu from '../Components/Home/Menu'
import Section from '../Components/Home/Section'
import Hero from '../Components/Home/Hero'
import Banner from '../Components/Home/Banner'
import Product from '../Components/Home/Product'
import Categories from '../Components/Home/Categories'
import Instagram from '../Components/Home/Instagram'
import Blog from '../Components/Home/Blog'
import Footer from '../Components/Home/Footer'
import Search from '../Components/Home/Search'
import withPreloader from '../Components/withPreloader'

const home = () => {
  return (
    <div>
        <Menu />
        <Section />
        <Hero />
        <Banner />
        <Product />
        <Categories />
        <Instagram />
        <Blog />
        <Footer />
        <Search />
    </div>
  )
}

export default withPreloader(home)