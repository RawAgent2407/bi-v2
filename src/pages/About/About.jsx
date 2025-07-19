import React from 'react'
import Nav from '../../components/Nav/Nav'
import ProjectHero from '../../components/ProjectHero/ProjectHero'
import ImpactSection from '../../components/ImpactSection/ImpactSection'
import VisionSection from '../../components/VisionSection/VisionSection'
import ExploreSlider from '../../components/ExploreSlider/ExploreSlider'
import ContactSection from '../../components/ContactSection/ContactSection'
import FooterSection from '../../components/FooterSection/FooterSection'
import AboutImgs from '../../components/AboutImgs/AboutImgs'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'

const About = () => {
  return (
    <>
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
      <ProjectHero />
      <ImpactSection />
      <VisionSection />
      <AboutImgs />
      <ExploreSlider />
      <section className="footer-wrapper lg:pt-20   lg:p-20" id="contact">
        <ContactSection />
        <FooterSection />
      </section>
    </>
  )
}

export default About
