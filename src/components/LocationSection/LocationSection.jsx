import React from 'react'
import projectImg from '../../assets/map.png'

const LocationSection = () => {
  return (
    <section className="bg-white mob:px-5 sm:px-12 lg:px-36 lg:pb-20 ">
      <div className=" mx-auto space-y-10">
        {/* Heading for small screens */}
        <h2 className="block lg:hidden text-[1.25rem] mob:text-[1.35rem] leading-[1.75rem] font-[Archivo] font-medium text-gray-900 sm:text-[24px] sm:leading-[28px]">
          Locations Across India’s Growth Corridors
        </h2>

        {/* lg: Heading + Stats + Commercial Uses */}
        <div className="hidden lg:flex items-center justify-between gap-10">
          {/* Left: Heading */}
          <h2 className="text-[1.5rem] leading-[1.875rem] font-[Archivo] font-medium text-gray-900 w-1/3">
            Locations Across India’s Growth Corridors
          </h2>

          {/* Center: Stats */}
          <div className="flex gap-10 text-center w-1/3 justify-center">
            <div>
              <div className="text-[2.5rem] leading-[3rem] text-gray-900 font-medium">
                20+
              </div>
              <div className="text-[1rem] text-gray-600 font-[Onest] font-semibold">
                RERA-Compliant Projects
              </div>
            </div>
            <div>
              <div className="text-[2.5rem] leading-[3rem] text-gray-900 font-medium">
                500+
              </div>
              <div className="text-[1rem] text-gray-600 font-[Onest] font-semibold">
                Clients Who Trust Us
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="relative w-full lg:h-[450px] sm:h-[480px] mob:h-[400px] overflow-hidden rounded-lg shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.698444187489!2d72.19215077500732!3d22.251517544662367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b8859f9e885b%3A0xc838b704d88b62c0!2sDholera%20SIR%20Projects%20Pvt%20Ltd%20%2C!5e0!3m2!1sen!2sin!4v1752900436809!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>

          {/* Info Card Overlay */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded shadow-lg px-4 py-3 flex gap-3 items-start w-[240px] mob:w-[260px] sm:w-[300px] z-20">
            <img
              src={projectImg}
              alt="Project Thumbnail"
              className="w-16 h-16 object-cover rounded"
            />
            <div>
              <h3 className="text-sm font-bold text-gray-900">Dholera SIR</h3>
              <p className="text-xs text-gray-600 font-sans">
                Future-Ready Living With Seamless Connectivity
              </p>
            </div>
          </div>
        </div>

        {/* Stats for sm and mob only */}
        <div className="flex lg:gap-10 sm:gap-10 mob:gap-4 text-center lg:hidden mt-4">
          <div className="mob:flex-1 mob:flex-col mob:items-start mob:justify-start mob:text-left sm:flex-1 sm:flex-col sm:items-start sm:justify-start sm:text-left">
            <div className="text-[2.2rem] leading-[3rem] text-gray-900 font-medium">
              20+
            </div>
            <div className="text-[0.85rem] text-gray-600 font-[Onest] font-semibold">
              RERA-Compliant Projects
            </div>
          </div>
          <div className="mob:flex-1 mob:flex-col mob:items-start mob:justify-start mob:text-left sm:flex-1 sm:flex-col sm:items-start sm:justify-start sm:text-left">
            <div className="text-[2.2rem] leading-[3rem] text-gray-900 font-medium">
              500+
            </div>
            <div className="text-[0.85rem] text-gray-600 font-[Onest] font-semibold">
              Clients Who Trust Us
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LocationSection
