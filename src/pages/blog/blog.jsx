import React from 'react'
import Nav from '../../components/Nav/Nav'
import ContactSection from '../../components/ContactSection/ContactSection'
import FooterSection from '../../components/FooterSection/FooterSection'
import BlogHero from '../../components/blogHero/blogHero'
import BlogGrid from '../../components/blogGrid/blogGrid'

function Blog() {
  return (
    <div>
      <Nav />
      <BlogHero />
      <BlogGrid />
      <section className="footer-wrapper lg:pt-20   lg:p-20">
        <ContactSection />
        <FooterSection />
      </section>
    </div>
  )
}

export default Blog
