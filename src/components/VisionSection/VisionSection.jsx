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
      <div className="absolute bottom-6 sm:bottom-14 left-4 sm:left-10 z-20 max-w-[90%] sm:max-w-2xl">
        <h2 className="text-white text-base sm:text-lg font-heading font-semibold mb-2 mob:text-2xl">
          Where Vision Meets Precision
        </h2>
        <p className="text-white text-xs sm:text-sm font-sans leading-relaxed pr-2 sm:pr-10 mob:text-sm mob:bottom-1 mob:border-b mob:border-white mob:pb-4">
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
