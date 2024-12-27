import React from 'react'
import Preloader from '../Components/Home/Preloader'
import Menu from '../Components/Home/Menu'
import Section from '../Components/Home/Section'
import BlogDetailHero from '../Components/BlogDetail/BlogDetailHero'
import BlogDetailSection from '../Components/BlogDetail/BlogDetailSection'
import Footer from '../Components/Home/Footer'
import Search from '../Components/Home/Search'
import withPreloader from '../Components/withPreloader'

const blogDetail = () => {
  return (
    <div>
        {/* <Preloader /> */}
        <Menu />
        <Section />
        <BlogDetailHero />
        <BlogDetailSection />
        <Footer />
        <Search />
    </div>
  )
}

export default withPreloader(blogDetail)