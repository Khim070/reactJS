import React from 'react'
import Menu from '../Components/Home/Menu'
import Section from '../Components/Home/Section'
import AboutUsSection from '../Components/AboutUs/AboutUsSection'
import AboutUs from '../Components/AboutUs/AboutUs'
import AboutUsTestimonial from '../Components/AboutUs/AboutUsTestimonial'
import AboutUsClient from '../Components/AboutUs/AboutUsClient'
import AboutUsTeam from '../Components/AboutUs/AboutUsTeam'
import AboutUsPartnerClient from '../Components/AboutUs/AboutUsPartnerClient'
import Footer from '../Components/Home/Footer'
import Search from '../Components/Home/Search'
import withPreloader from '../Components/withPreloader'

const about = () => {
  return (
    <div>
      <Menu />
      <Section />
      <AboutUsSection />
      <AboutUs />
      <AboutUsTestimonial />
      <AboutUsClient />
      <AboutUsTeam />
      <AboutUsPartnerClient />
      <Footer />
      <Search />
    </div>
  )
}

export default withPreloader(about)