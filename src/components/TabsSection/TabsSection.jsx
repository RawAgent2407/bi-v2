import React, { useState } from 'react'
import img1 from '../../assets/hero-slide-1.png'
import img2 from '../../assets/hero-slide-2.png'
import img3 from '../../assets/hero-slide-1.png' // Replace with actual third image

const tabData = [
  {
    title: 'Corporate house',
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
    <section className="bg-black px-4 py-10 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Image Section */}
        <div className="overflow-hidden rounded-lg">
          <img
            src={tabData[activeTab].image}
            alt={tabData[activeTab].title}
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
          />
        </div>

        {/* Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 border-t border-gray-800 ">
          {tabData.map((item, index) => {
            const isActive = index === activeTab
            return (
              <div
                key={index}
                onClick={() => setActiveTab(index)}
                className={`cursor-pointer transition-all duration-200 group`}
              >
                <h3
                  className={`text-sm sm:text-base font-semibold font-heading border-t-2 pt-3 pb-1 ${
                    isActive
                      ? 'text-white border-white'
                      : 'text-gray-400 border-gray-600 group-hover:text-white group-hover:border-white'
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`text-xs sm:text-sm font-sans ${
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
