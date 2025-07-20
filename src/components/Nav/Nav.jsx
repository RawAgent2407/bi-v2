import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Button from '../Button'
import './NavCustom.css'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import ProjectDrawer from '../ProjectDrawer'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown' // Added for mobile dropdown
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos' // Added for mobile sub-links

const Nav = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isProjectHovered, setIsProjectHovered] = useState(false)
  const [isMobileProjectOpen, setIsMobileProjectOpen] = useState(false) // State for mobile project dropdown
  const location = useLocation()

  const { logo, menuItems, ctaButton, mobileMenu, projects } = data || {}

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
    window.scrollTo(0, 0)
  }, [location])

  // Function to toggle the main mobile menu
  const toggleMobileMenu = () => {
    setIsOpen(!isOpen)
    // Always close the project sub-menu when toggling the main menu
    if (isOpen) {
      setIsMobileProjectOpen(false)
    }
  }

  return (
    <>
      <nav
        className="bg-white shadow-sm font-sans fixed w-full left-0 top-0 z-50"
        onMouseLeave={() => setIsProjectHovered(false)}
      >
        <div className="mx-auto lg:px-36 sm:px-10 mob:py-1 mob:px-4">
          <div className="relative flex items-center justify-between h-16">
            {/* Left: Logo */}
            <div className="flex-shrink-0">
              <Link
                to="/"
                className="text-2xl font-bold text-[#323232] tracking-tight font-heading"
              >
                {logo?.text || 'Build India'}
              </Link>
            </div>

            {/* Center: Nav Links (Desktop) */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden lg:flex">
              <div className="flex space-x-4">
                {menuItems?.map((item) => (
                  <div
                    key={item.id}
                    className="relative"
                    onMouseEnter={() =>
                      item.title === 'Projects'
                        ? setIsProjectHovered(true)
                        : null
                    }
                  >
                    <NavLink
                      text={item.title}
                      to={item.url}
                      isActive={location.pathname === item.url}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right: CTA (Desktop) */}
            <div className="hidden lg:flex items-center">
              <a
                href={ctaButton?.url || '#'}
                target="_blank"
                className="group inline-flex items-center justify-end text-[#353B3B] text-[1.125rem] leading-[1.75rem] tracking-[-0.02em] font-medium font-[Onest] capitalize relative transition duration-300 ease-in-out"
              >
                {ctaButton?.text || 'Take A Virtual Tour'}
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#353B3B] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
              </a>
            </div>

            {/* Mobile: Hamburger */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-md hover:bg-gray-100 cursor-pointer transition duration-200"
              >
                <span className="sr-only">
                  {mobileMenu?.toggleText || 'Toggle menu'}
                </span>
                {!isOpen ? (
                  <MenuIcon className="text-[1.75rem] text-gray-700" />
                ) : (
                  <CloseIcon className="text-[1.75rem] text-gray-700" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* ✅ START: UPDATED Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md lg:hidden z-50">
            <div className="pt-2 pb-4 space-y-1 px-4 sm:px-6">
              {menuItems?.map((item) => {
                // If menu item is "Projects", render a dropdown button
                if (item.title === 'Projects') {
                  return (
                    <div key={item.id}>
                      <button
                        onClick={() =>
                          setIsMobileProjectOpen(!isMobileProjectOpen)
                        }
                        className="flex justify-between items-center w-full px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-100 rounded-md focus:outline-none"
                      >
                        <span>Projects</span>
                        <KeyboardArrowDownIcon
                          className={`transition-transform duration-200 ${
                            isMobileProjectOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {/* Render sub-menu if open */}
                      {isMobileProjectOpen && (
                        <div className="pl-5 pt-2 space-y-2">
                          {projects?.map((project) => (
                            <Link
                              key={project.id}
                              to={'/projects'} // Modify this to link to a specific project page, e.g., `/projects/${project.slug}`
                              onClick={() => setIsOpen(false)}
                              className="flex justify-between items-center px-3 py-1 text-sm font-medium text-gray-600 hover:text-black rounded-md"
                            >
                              {project.title}
                              <ArrowForwardIosIcon
                                fontSize="inherit"
                                className="text-xs"
                              />
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )
                } else {
                  // Render a normal link for other menu items
                  return (
                    <MobileNavLink
                      key={item.id}
                      text={item.title}
                      to={item.url}
                      onClick={() => setIsOpen(false)}
                      isActive={location.pathname === item.url}
                    />
                  )
                }
              })}
              {/* CTA Button at the end */}
              <MobileNavLink
                text={ctaButton?.text || 'Take A Virtual Tour'}
                to={ctaButton?.url || '#'}
                onClick={() => setIsOpen(false)}
              />
            </div>
          </div>
        )}
        {/* ✅ END: UPDATED Mobile Menu */}
      </nav>

      {/* Renders full-width dropdown below nav only on hover */}
      {isProjectHovered && (
        <div
          onMouseEnter={() => setIsProjectHovered(true)}
          onMouseLeave={() => setIsProjectHovered(false)}
          className="hidden lg:block" // Ensure drawer only shows on desktop
        >
          <ProjectDrawer data={data} />
        </div>
      )}
    </>
  )
}

const NavLink = ({ text, to, isActive }) => (
  <Link
    to={to}
    className={`
      inline-flex items-center w-fit h-[2.25rem] px-[0.875rem] py-[0.375rem]
      rounded-[0.25rem] text-base font-medium transition duration-300 ease-in-out
      ${
        isActive
          ? 'bg-white border border-[#00000014] shadow-sm text-gray-800'
          : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
      }
    `}
  >
    {text}
  </Link>
)

const MobileNavLink = ({ text, to, isActive, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className={`
      block px-3 py-2 text-base font-medium transition duration-300 ease-in-out rounded-md
      ${
        isActive
          ? 'bg-gray-100 text-gray-800'
          : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
      }
    `}
  >
    {text}
  </Link>
)

export default Nav
