import React from 'react'
import Nav from '../../components/Nav/Nav'
import ProjectHero from '../../components/ProjectHero/ProjectHero'
import ImpactSection from '../../components/ImpactSection/ImpactSection'
import VisionSection from '../../components/VisionSection/VisionSection'
import ExploreSlider from '../../components/ExploreSlider/ExploreSlider'
import ContactSection from '../../components/ContactSection/ContactSection'
import FooterSection from '../../components/FooterSection/FooterSection'
import AboutImgs from '../../components/AboutImgs/AboutImgs'

const About = () => {
  return (
    <>
      <Nav />
      <ProjectHero />
      <ImpactSection />
      <VisionSection />
      <AboutImgs />
      <ExploreSlider />
      <section className="footer-wrapper lg:pt-20   lg:p-20">
        <ContactSection />
        <FooterSection />
      </section>
    </>
  )
}

export default About
