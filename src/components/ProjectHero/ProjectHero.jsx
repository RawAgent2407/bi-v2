import React from 'react'
import bgImg from '../../assets/hero-slide-1.png' // Replace with your image
import { FiUsers } from 'react-icons/fi'
import { FaGlobe } from 'react-icons/fa'
import { FaHouseUser } from 'react-icons/fa6'

const ProjectHero = () => {
  return (
    <section
      className="relative w-full lg:h-[100dvh] mob:h-[100dvh] sm:h-[100dvh] bg-cover bg-center text-white flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Content: Title & Subtitle */}
      <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4 w-full">
        <h1
          className="
       text-center align-middle text-white
    text-[2.75rem] leading-[3rem] tracking-[0em]
    font-[Archivo] font-normal
    mb-4 
    mob:text-[2.5rem]
        "
        >
          Rajpath Enclave
        </h1>
        <p
          className=" text-center capitalize font-[Onest] font-normal
    text-[0.875rem] leading-[1.25rem] tracking-[0.02em]
    text-white  mb-6

  mob:text-[0.9rem]"
        >
          Where Luxury Living Meets a Greener Tomorrow
        </p>
      </div>

      {/* Stats: Bottom Centered */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 w-full  px-4 z-10 mob:bottom-10 lg:w-[50%] mob:w-full mob:px-0">
        <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center">
          <div className="flex flex-col items-center gap-1">
            {/* <FiUsers className="text-white text-2xl sm:text-3xl" /> */}
            <p className="text-white text-xl sm:text-3xl font-bold mob:text-2xl ">
              100+
            </p>
            <span
              className="lg:text-center capitalize font-[Onest] font-normal
    text-[0.875rem] leading-[1.25rem] tracking-[0.02em]
    text-white max-w-2xl mb-6

  mob:text-[0.9rem]"
            >
              Skilled <br /> Professionals
            </span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="mb-2">
              <FaGlobe className="text-white text-xl sm:text-3xl mob:text-2xl" />
            </p>
            <span
              className="lg:text-center capitalize font-[Onest] font-normal
    text-[0.875rem] leading-[1.25rem] tracking-[0.02em]
    text-white max-w-2xl mb-6

  mob:text-[0.9rem]"
            >
              {' '}
              Unified <br /> Vision & Mission
            </span>
          </div>
          <div className="flex flex-col items-center gap-1">
            {/* <FaHouseUser className="text-white text-2xl sm:text-3xl" /> */}
            <p className="text-white text-xl sm:text-3xl font-bold mob:text-2xl">
              200+
            </p>
            <span
              className="lg:text-center capitalize font-[Onest] font-normal
    text-[0.875rem] leading-[1.25rem] tracking-[0.02em]
    text-white max-w-2xl mb-6

  mob:text-[0.9rem]"
            >
              {' '}
              Families <br /> Registered
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectHero
