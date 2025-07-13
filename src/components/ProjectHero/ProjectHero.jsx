import React from 'react'
import bgImg from '../../assets/hero-slide-1.png' // Replace with your image
import { FiUsers } from 'react-icons/fi'
import { FaGlobe } from 'react-icons/fa'
import { FaHouseUser } from 'react-icons/fa6'

const ProjectHero = () => {
  return (
    <section
      className="relative w-full h-[60vh] sm:h-[70vh] md:h-[90vh] bg-cover bg-center text-white flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Content: Title & Subtitle */}
      <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4 w-full">
        <h1 className="text-white font-heading font-bold text-3xl sm:text-5xl md:text-6xl text-center leading-tight">
          Rajpath Enclave
        </h1>
        <p className="mt-2 text-white text-sm sm:text-base font-sans px-4">
          Where Luxury Living Meets a Greener Tomorrow
        </p>
      </div>

      {/* Stats: Bottom Centered */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 w-full max-w-xs sm:max-w-md px-4 z-10">
        <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center">
          <div className="flex flex-col items-center gap-1">
            {/* <FiUsers className="text-white text-2xl sm:text-3xl" /> */}
            <p className="text-white text-xl sm:text-3xl font-bold">100+</p>
            <span className="text-xs font-sans text-white opacity-80 leading-tight">
              Skilled Professionals
            </span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="mb-1">
              <FaGlobe className="text-white text-xl sm:text-3xl" />
            </p>
            <span className="text-xs font-sans text-white opacity-80 leading-tight">
              Unified Vision & Mission
            </span>
          </div>
          <div className="flex flex-col items-center gap-1">
            {/* <FaHouseUser className="text-white text-2xl sm:text-3xl" /> */}
            <p className="text-white text-xl sm:text-3xl font-bold">200+</p>
            <span className="text-xs font-sans text-white opacity-80 leading-tight">
              Families Registered
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectHero
