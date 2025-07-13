import React from 'react'
import { FaPlay } from 'react-icons/fa'
import videoThumb from '../../assets/yt.png' // Replace with actual image
import Button from '../Button'

const BigVideoSection = () => {
  return (
    <section
      className="relative w-full h-[60vh] sm:h-[70vh] md:h-[90vh] bg-cover bg-center"
      style={{
        backgroundImage: `url(${videoThumb})`,
      }}
    >
      {/* Overlay gradient for bottom fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-transparent to-transparent z-10" />

      {/* Centered text */}
      <div className="absolute inset-0 flex items-center justify-center z-20 px-4">
        <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold text-center">
          Live Smart. Live Green.
        </h2>
      </div>

      {/* Play button - bottom left */}
      <div className="absolute bottom-4 left-4 z-30">
        <Button
          variant="dark"
          className="w-10 h-10 p-0 flex items-center justify-center bg-black/60 hover:bg-black/80"
        >
          <FaPlay size={12} />
        </Button>
      </div>
    </section>
  )
}

export default BigVideoSection
