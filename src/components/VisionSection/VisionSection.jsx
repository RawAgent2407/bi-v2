import React from 'react'
import visionImg from '../../assets/vision.png' // Replace with actual path

const VisionSection = () => {
  return (
    <section
      className="relative w-full h-[60vh] sm:h-[90vh] bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${visionImg})` }}
    >
      {/* Top white gradient */}
      <div className="absolute top-0 left-0 w-full h-20 sm:h-32 bg-gradient-to-b from-white to-transparent z-10" />

      {/* Bottom black gradient */}
      <div className="absolute bottom-0 left-0 w-full h-36 sm:h-44 bg-gradient-to-t from-black to-transparent z-10" />

      {/* Text content */}
      <div className="absolute bottom-10 sm:bottom-14 lg:left-32 sm:left-10 z-20 mob:left-5">
        <h2
          className="  text-left align-middle text-white
    text-[2.75rem] leading-[3rem] tracking-[0em]
    font-[Archivo] font-normal
    mb-4 
    mob:text-[2.5rem]
    mob:text-left"
        >
          Where Vision Meets Precision
        </h2>
        <p
          className="   lg:text-left capitalize font-[Onest] font-normal
    text-[0.875rem] leading-[1.25rem] tracking-[0.02em]
    text-white max-w-2xl mb-6
 sm:text-left
  mob:text-[0.9rem]
    mob:text-left"
        >
          The iconic triple-tower entrance and grand central boulevard of
          Rajpath Enclave make a lasting first impression. Designed with
          symmetry, elegance, and smart engineering, it leads to a clubhouse
          equipped with modern comforts, landscaped gardens, and water features.
          Security, scale, and serenity — all begin here.
        </p>
      </div>
    </section>
  )
}

export default VisionSection
