import React from 'react'

import amt01 from '../assets/amt/amt_01.png'
import amt02 from '../assets/amt/amt_02.png'
import amt03 from '../assets/amt/amt_03.png'
import amt04 from '../assets/amt/amt_04.png'
import amt05 from '../assets/amt/amt_05.png'
import amt06 from '../assets/amt/amt_06.png'
import amt07 from '../assets/amt/amt_07.png'
import amt08 from '../assets/amt/amt_08.png'

const amenities = [
  { label: 'Free WiFi', img: amt01 },
  { label: 'Swimming Pool', img: amt02 },
  { label: 'Spa & Wellness', img: amt03 },
  { label: 'Fitness Center', img: amt04 },
  { label: 'Restaurant', img: amt05 },
  { label: 'Parking', img: amt06 },
  { label: 'Room Service', img: amt07 },
  { label: 'Bar & Lounge', img: amt08 },
]

const AmenitiesSection = () => {
  return (
    <section className=" sm:px-0 lg:px-36 lg:pt-20 sm:py-10 mob:pb-5 mob:px-5 sm:px-10">
      <h2 className="text-3xl font-bold text-center mb-10">Our Amenities</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {amenities.map((item, idx) => (
          <div
            key={idx}
            className="relative group flex items-center justify-center bg-white rounded-xl shadow-sm aspect-square w-full overflow-hidden transition hover:shadow-md"
          >
            {/* Image fills the card */}
            <div className="absolute inset-0">
              <img
                src={item.img}
                alt={item.label}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Hover overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-center py-2 transform translate-y-full group-hover:translate-y-0 transition duration-300 ease-in-out">
              <span className="text-sm font-medium">{item.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default AmenitiesSection
