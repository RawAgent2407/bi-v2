import React, { useState } from 'react'

const TabsSection = ({ data }) => {
  const [activeTab, setActiveTab] = useState(0)

  const { tabs } = data

  return (
    <section className="bg-black sm:px-0 lg:px-36 lg:py-20 sm:py-10 mob:pb-5">
      <div className="w-full mx-auto space-y-10">
        {/* Image Section */}
        <div className="overflow-hidden lg:rounded-lg h-[300px] sm:h-[400px] md:h-[500px]">
          <img
            src={
              tabs[activeTab]?.projects[0]?.image ||
              'https://raw.githubusercontent.com/KHUNTPRIYANSH/site_photos/refs/heads/main/bi-reality/hero-slide-1.png'
            }
            alt={tabs[activeTab]?.projects[0]?.name || 'Project'}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Tabs */}
        <div className="mob:flex mob:overflow-x-auto mob:gap-5 sm:flex sm:overflow-x-auto sm:gap-8 lg:grid lg:grid-cols-3 lg:gap-8 sm:pb-5 mob:pb-5 mob:px-5 sm:px-0">
          {tabs.map((item, index) => {
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
                  {item.name}
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
