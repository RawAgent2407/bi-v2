import React from 'react'
import Button from '../Button'

const ImpactSection = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-8 lg:px-16 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-lg sm:text-xl md:text-2xl font-heading font-semibold text-gray-900 mb-4 mob:text-2xl">
          The Future is Sustainable
        </h2>
        <p className="text-sm sm:text-base text-gray-600 font-sans mb-8 leading-relaxed">
          Rajpath Enclave Is More Than A Plotted Community – It's A Blueprint
          For A Cleaner Tomorrow. Join A Township Designed For The Next
          Generation.
        </p>
        <Button variant="dark-outline">Explore Impact</Button>
      </div>
    </section>
  )
}

export default ImpactSection
