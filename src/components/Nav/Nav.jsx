import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Button from '../Button'
import './NavCustom.css'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import ProjectDrawer from '../ProjectDrawer'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isProjectHovered, setIsProjectHovered] = useState(false)
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

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
              <span className="text-2xl font-bold color-[#323232] tracking-tightest font-heading">
                Build India
              </span>
            </div>

            {/* Center: Nav Links */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden lg:flex">
              <div className="flex space-x-4">
                <NavLink
                  text="Home"
                  to="/"
                  isActive={location.pathname === '/'}
                />
                <div
                  className="relative group hidden lg:block"
                  onMouseEnter={() => setIsProjectHovered(true)}
                >
                  <NavLink
                    text="Projects"
                    to="/projects"
                    isActive={location.pathname === '/projects'}
                  />
                </div>
                <NavLink
                  text="About"
                  to="/about"
                  isActive={location.pathname === '/about'}
                />
                <NavLink
                  text="Blogs"
                  to="/blog"
                  isActive={location.pathname === '/blog'}
                />
              </div>
            </div>

            {/* Right: CTA */}
            <div className="hidden lg:flex items-center">
              <a
                href="#"
                className="group inline-flex items-center justify-end text-[#353B3B] text-[1.125rem] leading-[1.75rem] tracking-[-0.02em] font-medium font-[Onest] capitalize relative transition duration-300 ease-in-out"
              >
                Take A Virtual Tour
                <span
                  className="absolute bottom-0 left-0 w-full h-[0.125rem] bg-[#353B3B]"
                  style={{
                    textDecoration: 'underline',
                    textDecorationStyle: 'solid',
                    textDecorationThickness: '8%',
                    textUnderlineOffset: '50%',
                  }}
                ></span>
              </a>
            </div>

            {/* Mobile: Hamburger */}
            <div className="lg:hidden flex items-center">
              <div
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md hover:bg-gray-100 cursor-pointer transition duration-200"
              >
                <span className="sr-only">Toggle menu</span>
                {!isOpen ? (
                  <MenuIcon className="text-[1.75rem] text-gray-700" />
                ) : (
                  <CloseIcon className="text-[1.75rem] text-gray-700" />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md lg:hidden z-50">
            <div className="pt-2 pb-3 space-y-2 sm:px-12">
              <MobileNavLink
                text="Home"
                to="/"
                isActive={location.pathname === '/'}
              />
              <MobileNavLink
                text="Projects"
                to="/projects"
                isActive={location.pathname === '/projects'}
              />
              <MobileNavLink
                text="About"
                to="/about"
                isActive={location.pathname === '/about'}
              />
              <MobileNavLink
                text="Blogs"
                to="/blog"
                isActive={location.pathname === '/blog'}
              />
              <MobileNavLink text="Take A Virtual Tour" to="#" />
            </div>
          </div>
        )}
      </nav>

      {/* 🔥 Renders full-width dropdown below nav only on hover */}
      {isProjectHovered && (
        <div
          onMouseEnter={() => setIsProjectHovered(true)}
          onMouseLeave={() => setIsProjectHovered(false)}
        >
          <ProjectDrawer />
        </div>
      )}
    </>
  )
}

const NavLink = ({ text, to, isActive }) => {
  return (
    <Link
      to={to}
      className={`
    inline-flex items-center w-fit h-[2.25rem] px-[0.875rem] py-[0.375rem]
    rounded-[0.25rem] text-base font-medium transition duration-300 ease-in-out
    ${
      isActive
        ? 'bg-white border border-[#00000014] text-gray-800'
        : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
    }
  `}
    >
      {text}
    </Link>
  )
}

const MobileNavLink = ({ text, to, isActive }) => {
  return (
    <Link
      to={to}
      className={`
        block px-4 py-2 border-l-4 text-base font-medium transition duration-300 ease-in-out
        ${
          isActive
            ? 'bg-white border-gray-200 text-gray-700'
            : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
        }
      `}
    >
      {text}
    </Link>
  )
}

export default Nav
