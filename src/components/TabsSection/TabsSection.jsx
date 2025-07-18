import React, { useState } from 'react'
import img1 from '../../assets/hero-slide-1.png'
import img2 from '../../assets/hero-slide-2.png'
import img3 from '../../assets/hero-slide-1.png' // Replace with actual third image

const tabData = [
  {
    title: 'Corporate house a',
    description: 'Produce solar energy for residential and commercial needs',
    image: img1,
  },
  {
    title: 'healthcare',
    description: 'Install batteries to store clean energy',
    image: img2,
  },
  {
    title: 'Transport and Connectivity',
    description:
      'Make badass, zero-emission vehicles that can charge with clean energy',
    image: img3,
  },
]

const TabsSection = () => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="bg-black sm:px-0 lg:px-36 lg:py-20 sm:py-10 mob:pb-5">
      <div className="w-full mx-auto space-y-10">
        {/* Image Section */}
        <div className="overflow-hidden lg:rounded-lg h-[300px] sm:h-[400px] md:h-[500px]">
          <img
            src={tabData[activeTab].image}
            alt={tabData[activeTab].title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Tabs */}
        <div className="mob:flex mob:overflow-x-auto mob:gap-5 sm:flex sm:overflow-x-auto sm:gap-8 lg:grid lg:grid-cols-3 lg:gap-8 sm:pb-5 mob:pb-5 mob:px-5 sm:px-0">
          {tabData.map((item, index) => {
            const isActive = index === activeTab
            return (
              <div
                key={index}
                onClick={() => setActiveTab(index)}
                className="cursor-pointer transition-all duration-200 group mob:min-w-[300px] sm:min-w-[280px] lg:min-w-0"
              >
                <h3
                  className={`text-sm mob:text-lg sm:text-base font-semibold font-heading border-t-2 pt-3 pb-1 ${
                    isActive
                      ? 'text-white border-white'
                      : 'text-gray-400 border-gray-600 group-hover:text-white group-hover:border-white'
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`text-xs mob:text-sm sm:text-sm font-sans ${
                    isActive
                      ? 'text-white'
                      : 'text-gray-500 group-hover:text-gray-300'
                  }`}
                >
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default TabsSection
