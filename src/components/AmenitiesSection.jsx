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
  { img: amt01, label: 'Street Lights' },
  { img: amt02, label: 'Club House' },
  { img: amt03, label: 'Play Area' },
  { img: amt04, label: 'RCC Roads' },
  { img: amt05, label: 'Party Time' },
  { img: amt06, label: 'Pool Table' },
  { img: amt07, label: 'Mini Theatre' },
  { img: amt08, label: 'Gymnasium' },
]

const title = 'Amenities'
const description = `We Design Sustainable Systems That Are Massively Scalable—Resulting In The Greatest Environmental Benefit Possible. Our Energy Generation And Storage Products Work Together With Our Electric Vehicles To Amplify Their Impact. Our Master Plans Share Our Vision For A Sustainable Future And What We Are Doing About It.`

const AmenitiesSection = () => (
  <section className="w-full py-10 bg-[#FAFAF7]">
    <div className="w-full mx-auto lg:space-y-10 sm:space-y-10 mob:space-y-5">
      <div className="flex flex-col sm:px-0 lg:flex-row lg:items-center lg:justify-between lg:gap-8 sm:gap-2 lg:px-0 sm:px-10 mob:px-0 mob:pt-10 lg:px-36">
        <h2
          className="
            lg:text-xl font-heading font-regular text-black
            lg:h-[3.375rem] lg:pt-[1rem] lg:pb-[0.5rem]
            sm:text-2xl  sm:h-[2.375rem] sm:pt-[0.5rem] sm:pb-[0.25rem]
            mob:text-2xl mob:h-[2.375rem] mob:pt-[0.5rem] mob:pb-[0.25rem] mob:px-5 mob:font-medium mob:mb-4
          "
        >
          {title}
        </h2>
        <p className="text-[0.875rem] leading-[1.25rem] tracking-[0.02em] text-gray-700 font-[Onest] font-normal capitalize lg:w-2/3 sm:font-onest sm:font-normal sm:text-[14px] sm:leading-[20px] sm:tracking-[0.02em] sm:capitalize mob:text-[14px] mob:leading-[20px] mob:tracking-[0.02em] mob:capitalize  mob:px-5">
          {description}
        </p>
      </div>
      <div className="w-full  mx-auto grid lg:grid-cols-4 lg:grid-rows-2 sm:grid-cols-2 sm:grid-rows-4 mob:grid-cols-2 mob:grid-rows-4 gap-6 justify-center items-center mt-8 lg:px-36 sm:px-10 mob:px-5 mob:gap-2">
        {amenities.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center bg-white rounded-xl shadow-sm aspect-square w-full transition hover:shadow-md"
          >
            <div className="flex items-center justify-center lg:w-24 lg:h-24 sm:w-32 sm:h-32 bg-[#F3F3ED] rounded-lg mb-4">
              <img
                src={item.img}
                alt={item.label}
                className="lg:w-10 lg:h-10 sm:w-20 sm:h-20 object-contain"
              />
            </div>
            <span className="text-base font-medium text-gray-700 text-center mt-2 lg:text-sm sm:text-xl">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default AmenitiesSection
