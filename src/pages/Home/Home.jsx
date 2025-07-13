import React from 'react'
import Nav from '../../components/Nav/Nav'
import HeroSlider from '../../components/HeroSlider/HeroSlider'
import ExploreSlider from '../../components/ExploreSlider/ExploreSlider'
import FutureHomeSection from '../../components/FutureHomeSection/FutureHomeSection'
import LocationSection from '../../components/LocationSection/LocationSection'
import ContactSection from '../../components/ContactSection/ContactSection'
import InvestingCardsSection from '../../components/InvestingCardsSection/InvestingCardsSection'
import FooterSection from '../../components/FooterSection/FooterSection'
import './Home.css'
const Home = () => {
  return (
    <div className="bg-white font-sans text-gray-900">
      {/* Navbar */}
      <Nav />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <HeroSlider />
      </section>

      {/* Explore Section */}
      <section className="">
        <ExploreSlider />
      </section>

      {/* Future Home */}
      <section className="">
        <FutureHomeSection />
      </section>

      {/* Location */}
      <section className="">
        <LocationSection />
      </section>

      {/* Investing Cards */}
      <section className="">
        <InvestingCardsSection />
      </section>
      {/* Contact */}
      <section className="footer-wrapper lg:pt-20   lg:p-20">
        <ContactSection />

        {/* Footer */}
        <FooterSection />
      </section>
    </div>
  )
}

export default Home
