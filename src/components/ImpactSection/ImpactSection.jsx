import React from 'react'
import Button from '../Button'

const ImpactSection = ({ data }) => {
  const { title, description } = data

  return (
    <section className="bg-white py-16 px-4 sm:px-8 lg:px-16 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-lg sm:text-xl md:text-2xl font-heading font-semibold text-gray-900 mb-4 mob:text-2xl">
          {title}
        </h2>
        <p className="text-sm sm:text-base text-gray-600 font-sans mb-8 leading-relaxed">
          {description}
        </p>
        <Button variant="dark-outline">Explore Impact</Button>
      </div>
    </section>
  )
}

export default ImpactSection
