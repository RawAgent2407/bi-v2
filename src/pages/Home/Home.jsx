import React from 'react'
import Nav from '../../components/Nav/Nav'
import HeroSlider from '../../components/HeroSlider/HeroSlider'
import ExploreSlider from '../../components/ExploreSlider/ExploreSlider'
import FutureHomeSection from '../../components/FutureHomeSection/FutureHomeSection'
import LocationSection from '../../components/LocationSection/LocationSection'
import ContactSection from '../../components/ContactSection/ContactSection'
import InvestingCardsSection from '../../components/InvestingCardsSection/InvestingCardsSection'
import FooterSection from '../../components/FooterSection/FooterSection'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import './Home.css'
const Home = () => {
  return (
    <div className="bg-white font-sans text-gray-900">
      {/* Navbar */}
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/+919898339903"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon sx={{ fontSize: 28 }} />
      </a>

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
      <section className="footer-wrapper lg:pt-20   lg:p-20" id="contact">
        <ContactSection />

        {/* Footer */}
        <FooterSection />
      </section>
    </div>
  )
}

export default Home
