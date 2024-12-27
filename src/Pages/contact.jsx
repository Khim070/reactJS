import React from 'react'
import Preloader from '../Components/Home/Preloader'
import Menu from '../Components/Home/Menu'
import Section from '../Components/Home/Section'
import ContactMap from '../Components/Contact/ContactMap'
import ContactSection from '../Components/Contact/ContactSection'
import Footer from '../Components/Home/Footer'
import Search from '../Components/Home/Search'
import withPreloader from '../Components/withPreloader'

const contact = () => {
  return (
    <div>
        {/* <Preloader /> */}
        <Menu />
        <Section />
        <ContactMap />
        <ContactSection />
        <Footer />
        <Search />
    </div>
  )
}

export default withPreloader(contact)