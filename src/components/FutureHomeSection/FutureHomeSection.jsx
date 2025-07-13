import React, { useState } from 'react'
import img1 from '../../assets/hero-slide-1.png'
import img2 from '../../assets/hero-slide-2.png'
import img3 from '../../assets/vision.png' // Update with real path
import Button from '../Button'

const cardData = [
  {
    title: 'Power Earth',
    description:
      'We design sustainable systems that are massively scalable—resulting in the greatest environmental benefit possible. Our energy generation and storage products work together with our electric vehicles to amplify their impact. Our master plans share our vision for a sustainable future and what we are doing about it.',
    image: img1,
    button: true,
  },
]

const bottomTabs = [
  {
    title: 'Corporate house',
    description: 'Produce solar energy for residential and commercial needs',
    image: img2,
  },
  {
    title: 'healthcare',
    description: 'Install batteries to store clean energy',
    image: img1,
  },
  {
    title: 'Transport and Connectivity',
    description:
      'Make badass, zero-emission vehicles that can charge with clean energy',
    image: img3,
  },
  {
    title: 'Corporate house',
    description: 'Produce solar energy for residential and commercial needs',
    image: img2,
  },
]

const FutureHomeSection = () => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="bg-whit sm:px-0 lg:px-36 lg:py-20 sm:py-10">
      <div className="lg:space-y-20 w-full mx-auto">
        {/* Static Cards */}
        {cardData.map((item, idx) => (
          <div key={idx} className="space-y-8">
            <div className="flex flex-col sm:px-12 lg:flex-row lg:items-center lg:justify-between lg:gap-8 sm:gap-2">
              <h2
                className="
    lg:text-xl font-heading font-regular text-black
    lg:h-[3.375rem] lg:pt-[1rem] lg:pb-[0.5rem]
    sm:text-2xl  sm:h-[2.375rem] sm:pt-[0.5rem] sm:pb-[0.25rem]
  "
              >
                {item.title}
              </h2>

              <p className="text-[0.875rem] leading-[1.25rem] tracking-[0.02em] text-gray-700 font-[Onest] font-normal capitalize lg:w-2/3 sm:font-onest sm:font-normal sm:text-[14px] sm:leading-[20px] sm:tracking-[0.02em] sm:capitalize">
                {item.description}
              </p>
            </div>

            <div className="relative lg:rounded-lg overflow-hidden shadow-md h-[400px] sm:h-[500px] flex items-center justify-center">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              {item.button && (
                <Button
                  variant="light"
                  className="absolute bottom-8 right-8 shadow"
                >
                  Take a Virtual Tour
                </Button>
              )}
            </div>
          </div>
        ))}

        {/* Tabs Controlled Section */}
        <div className="space-y-6">
          {/* Heading + Description (Power Earth block reused here) */}
          <div className="flex flex-col sm:px-12 lg:flex-row lg:items-start lg:justify-between gap-8">
            <h2
              className="
    text-xl font-heading font-regular text-black
    w-[8.1875rem] h-[3.375rem] pt-[1rem] pb-[0.5rem]
  "
            >
              {' '}
              Power Earth
            </h2>
            <p
              className="
    text-[0.875rem] leading-[1.25rem] tracking-[0.02em]
    text-gray-700 font-[Onest] font-normal capitalize
    lg:w-2/3
  "
            >
              {' '}
              We design sustainable systems that are massively
              scalable—resulting in the greatest environmental benefit possible.
              Our energy generation and storage products work together with our
              electric vehicles to amplify their impact. Our master plans share
              our vision for a sustainable future and what we are doing about
              it.
            </p>
          </div>

          {/* Active Image */}
          <div className="overflow-hidden lg:rounded-lg h-[300px] sm:h-[400px] md:h-[500px]">
            <img
              src={bottomTabs[activeTab].image}
              alt={bottomTabs[activeTab].title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Tabs */}
          <div className="sm:flex sm:overflow-x-auto sm:gap-8 lg:grid lg:grid-cols-4 lg:gap-8 sm:pb-5">
            {bottomTabs.map((item, idx) => {
              const isActive = idx === activeTab
              return (
                <div
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className="cursor-pointer transition-all duration-200 group sm:min-w-[280px] lg:min-w-0"
                >
                  <h3
                    className={`text-sm sm:text-base font-semibold font-heading border-t-2 pt-3 pb-1 ${
                      isActive
                        ? 'text-black border-black'
                        : 'text-gray-400 border-gray-300 group-hover:text-black group-hover:border-black'
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`text-xs sm:text-sm font-sans ${
                      isActive
                        ? 'text-gray-700'
                        : 'text-gray-400 group-hover:text-gray-700'
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FutureHomeSection
