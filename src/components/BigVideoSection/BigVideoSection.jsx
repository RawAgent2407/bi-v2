import React from 'react'
import { FaPlay } from 'react-icons/fa'
import { FiPhone, FiSend, FiMapPin } from 'react-icons/fi'
import Button from '../Button'

import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'

const BigVideoSection = ({ data }) => {
  const { title, description, videos, contactInfo } = data

  return (
    <section
      className="relative w-full bg-cover bg-center"
      style={{
        backgroundImage: `url(${
          videos[0]?.thumbnail ||
          'https://raw.githubusercontent.com/KHUNTPRIYANSH/site_photos/refs/heads/main/bi-reality/yt.png'
        })`,
      }}
    >
      {/* Overlay only on sm and up */}
      <div className="absolute inset-0 z-10 hidden sm:block bg-black/20 lg:bg-gradient-to-t lg:from-black/30 lg:via-transparent lg:to-transparent" />

      {/* Contact Form sits on same background */}
      <div className="relative z-20">
        <div className="flex lg:p-36 flex-col lg:flex-row sm:flex-col-reverse overflow-hidden sm:p-16 sm:py-10  mob:px-5 mob:pt-10 mob:pb-14 mob:flex-col-reverse">
          {/* Left Info */}
          <div className="sm:p-10 lg:p-12 lg:p-20 lg:space-y-8 border-b md:border-b-0 lg:border-r lg:w-[45%] sm:w-full sm:bg-white mob:bg-white sm:p-20 mob:p-8 sm:gap-8 sm:flex sm:flex-col sm:items-start sm:justify-start mob:p-5 mob:gap-6 mob:flex mob:flex-col mob:items-start">
            <div>
              <h2 className="text-xl sm:text-3xl mob:text-[1.25rem] font-bold text-gray-900 font-heading">
                {title}
              </h2>
              <p className="text-sm mob:text-[0.875rem] text-gray-600 font-sans mt-2 leading-relaxed">
                {description}
              </p>
            </div>

            <div className="space-y-4 text-sm mob:text-[0.875rem] text-gray-700">
              <div className="flex items-start gap-3 mob:gap-2">
                <FiPhone className="mt-1 text-gray-900 text-lg" />
                <span>{contactInfo?.phone || '+91 98983 39903'}</span>
              </div>

              <div className="flex items-start gap-3 mob:gap-2">
                <FiSend className="mt-1 text-gray-900 text-lg" />
                <span>
                  {contactInfo?.email || 'buildindiarealty@gmail.com'}
                </span>
              </div>

              <div className="flex items-start gap-3 mob:gap-2">
                <LocationOnOutlinedIcon className="mt-1 text-gray-900 text-xl" />
                <span className="leading-relaxed">
                  {contactInfo?.address ||
                    'Zion Z1, 907–908, nr. Maple County Road, off Sindhu Bhavan Marg, Bodakdev, Ahmedabad, Gujarat 380054'}
                </span>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-[#E7E5E2] sm:py-16 sm:px-10 lg:p-12 lg:p-16 lg:w-[55%] sm:w-full mob:p-8 mob:pt-10">
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:gap-4 sm:gap-2 mob:gap-3">
                <input
                  type="text"
                  placeholder="FIRST NAME"
                  className="w-full border text-sm mob:text-base px-4 py-3 rounded outline-none focus:ring-1 focus:ring-black bg-white"
                />
                <input
                  type="text"
                  placeholder="LAST NAME"
                  className="w-full border text-sm mob:text-base px-4 py-3 rounded outline-none focus:ring-1 focus:ring-black bg-white"
                />
              </div>
              <input
                type="text"
                placeholder="+91 | MOBILE NUMBER*"
                className="w-full border text-sm mob:text-base px-4 py-3 rounded outline-none focus:ring-1 focus:ring-black bg-white"
              />
              <input
                type="email"
                placeholder="EMAIL*"
                className="w-full border text-sm mob:text-base px-4 py-3 rounded outline-none focus:ring-1 focus:ring-black bg-white"
              />

              <div className="flex items-start gap-2 text-sm text-gray-600 mob:text-[0.875rem]">
                <input type="checkbox" className="mt-1 w-4 h-4" />
                <label className="leading-tight">
                  By clicking this you agree to{' '}
                  <a href="#" className="underline text-gray-800">
                    terms & conditions
                  </a>
                  .
                </label>
              </div>

              <button
                className="
                  lg:inline-flex lg:items-center lg:justify-center 
                  lg:gap-[0.625rem] lg:rounded-[0.125rem] 
                  lg:px-8 lg:py-3 lg:h-fit lg:w-fit 
                  bg-[#161616] text-white 
                  lg:font-medium lg:text-base 
                  transition-all duration-300 ease-in-out 
                  cursor-pointer border-0 outline-none
                  sm:px-5 sm:py-3 sm:text-lg sm:w-full
                  mob:px-4 mob:py-3 mob:text-base mob:w-full
                "
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BigVideoSection
