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

function Projects() {
  return (
    <>
      <Nav />
      <ProjectHero />
      <ImpactSection />
      <VisionSection />
      <TabsSection />
      <BigImgSection />
      <FutureHomeSection />
      <BigVideoSection />
      <section className="footer-wrapper">
        <DarkFooterSection />
      </section>
    </>
  )
}

export default Projects
