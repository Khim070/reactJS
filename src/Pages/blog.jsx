import React from 'react'
import Preloader from '../Components/Home/Preloader'
import Menu from '../Components/Home/Menu'
import Section from '../Components/Home/Section'
import BlogSection from '../Components/Blog/BlogSection'
import BlogDetails from '../Components/Blog/BlogDetails'
import Footer from '../Components/Home/Footer'
import Search from '../Components/Home/Search'
import withPreloader from '../Components/withPreloader'

const blog = () => {
  return (
    <div>
        {/* <Preloader/> */}
        <Menu />
        <Section />
        <BlogSection />
        <BlogDetails />
        <Footer />
        <Search />
    </div>
  )
}

export default withPreloader(blog)