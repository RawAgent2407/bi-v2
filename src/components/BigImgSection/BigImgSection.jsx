import React, { useEffect, useState } from 'react'
import bgImg from '../../assets/big-img.png'

const BigImgSection = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section
      className={`relative w-full h-[60vh] sm:h-[70vh] md:h-[90vh] overflow-hidden ${
        isMobile ? '' : 'bg-fixed'
      } bg-center bg-cover`}
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
    >
      {/* Strong visible gradient: white → transparent → black */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b to-white/30 via-transparent from-black/30" />
    </section>
  )
}

export default BigImgSection
