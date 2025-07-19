import React from 'react'
import Nav from '../../components/Nav/Nav'
import ProjectHero from '../../components/ProjectHero/ProjectHero'
import ImpactSection from '../../components/ImpactSection/ImpactSection'
import VisionSection from '../../components/VisionSection/VisionSection'
import TabsSection from '../../components/TabsSection/TabsSection'
import BigImgSection from '../../components/BigImgSection/BigImgSection'
import FutureHomeSection from '../../components/FutureHomeSection/FutureHomeSection'
import BigVideoSection from '../../components/BigVideoSection/BigVideoSection'
import DarkFooterSection from '../../components/DarkFooterSection/DarkFooterSection'
import FooterSection from '../../components/FooterSection/FooterSection'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'

function Projects() {
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
      <TabsSection />
      <BigImgSection />
      <FutureHomeSection />
      <BigVideoSection />
      <section
        className="footer-wrapper lg:pt-20 dark-footer-wrapper   "
        id="contact"
      >
        <DarkFooterSection />
      </section>
    </>
  )
}

export default Projects
