import React from 'react'
import Nav from '../../components/Nav/Nav'
import ContactSection from '../../components/ContactSection/ContactSection'
import FooterSection from '../../components/FooterSection/FooterSection'
import BlogHero from '../../components/blogHero/blogHero'
import BlogGrid from '../../components/blogGrid/blogGrid'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'

function Blog() {
  return (
    <div>
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
      <BlogHero />
      <BlogGrid />
      <section className="footer-wrapper lg:pt-20   lg:p-20" id="contact">
        <ContactSection />
        <FooterSection />
      </section>
    </div>
  )
}

export default Blog
