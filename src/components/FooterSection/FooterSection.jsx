import React from 'react'
import { FaInstagram, FaXTwitter, FaLinkedinIn } from 'react-icons/fa6'
import { Link } from 'react-router-dom' // Import Link

const FooterSection = () => {
  return (
    <footer className="lg:pt-20  text-sm text-gray-500 font-sans  sm:px-10 sm:py-5 sm:pb-20 mob:px-5 mob:pt-0 mob:pb-10">
      <div className="flex flex-col gap-14">
        {/* Top Row: Logo and Socials */}
        <div className="flex justify-between  items-start flex-col sm:flex-row gap-4">
          <div className="flex items-center space-x-2">
            <span className="text-gray-900 font-heading font-regular text-3xl">
              BI Reality
            </span>
            <span className="text-gray-400 font-bold">|</span>
            <span className="text-gray-600 text-sm">
              Immersive. Intelligent. Real.
            </span>
          </div>

          <div className="flex gap-4 text-gray-800 text-xl mt-4 sm:mt-0">
            <FaInstagram />
            <FaXTwitter />
            <FaLinkedinIn />
          </div>
        </div>

        {/* Links Grid */}
        {/* Mobile: custom stacked layout */}
        <div className="block sm:hidden">
          <div className="flex gap-8">
            {/* Left: Helpful Links */}
            <div className="w-1/2">
              <h4 className="uppercase text-sm font-semibold text-gray-600 mb-5 tracking-wider">
                Helpful Links
              </h4>
              <ul className="space-y-1 text-gray-700">
                <li>
                  <Link to="/projects">Projects</Link>
                </li>
                <li>Properties</li>
                <li>Services</li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>Contact Us</li>
              </ul>
            </div>

            {/* Right: Stack Top Properties + Quick Links */}
            <div className="w-1/2 flex flex-col gap-8">
              <div>
                <h4 className="uppercase text-sm font-semibold text-gray-600 mb-5 tracking-wider">
                  Top Properties
                </h4>
                <ul className="space-y-1 text-gray-700">
                  <li>Dholera SIR</li>
                  <li>Rajpath Enclave</li>
                </ul>
              </div>

              <div>
                <h4 className="uppercase text-sm font-semibold text-gray-600 mb-5 tracking-wider">
                  Quick Links
                </h4>
                <ul className="space-y-1 text-gray-700">
                  <li>Career</li>
                  <li>Join as a Vendor</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Laptop/Tablet: original layout preserved */}
        <div className="hidden sm:flex sm:flex-row justify-start gap-x-32 text-sm w-full">
          {/* Helpful Links */}
          <div>
            <h4 className="uppercase text-sm font-semibold text-gray-600 mb-5 tracking-wider">
              Helpful Links
            </h4>
            <ul className="space-y-1 text-gray-700">
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>Properties</li>
              <li>Services</li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Top Properties */}
          <div>
            <h4 className="uppercase text-sm font-semibold text-gray-600 mb-5 tracking-wider">
              Top Properties
            </h4>
            <ul className="space-y-1 text-gray-700">
              <li>Dholera SIR</li>
              <li>Rajpath Enclave</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="uppercase text-sm font-semibold text-gray-600 mb-5 tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-1 text-gray-700">
              <li>Career</li>
              <li>Join as a Vendor</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-row flex-wrap justify-between items-center  text-xs text-gray-800 gap-y-2">
          <p className="mob:text-center mob:w-full">
            © Build India Reality 2025
          </p>
          <div className="flex gap-4 flex-wrap mob:justify-between mob:w-full mob:pt-4">
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection
