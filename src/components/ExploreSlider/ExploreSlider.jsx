import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import exploreData from '../../data/exploreData'
import Button from '../Button'
import './ExploreSlider.css'

const ExploreSlider = () => {
  const [slidesToShow, setSlidesToShow] = useState(1)
  const [spaceBetween, setSpaceBetween] = useState(0)

  useEffect(() => {
    const updateSlides = () => {
      const width = window.innerWidth
      setSlidesToShow(width < 768 ? 1 : 1.4)
      setSpaceBetween(width >= 1280 ? 32 : 0)
    }

    updateSlides() // set on initial render
    window.addEventListener('resize', updateSlides)
    return () => window.removeEventListener('resize', updateSlides)
  }, [])
  return (
    <div className="w-full mx-auto sm:p-10 lg:p-14 lg:px-0 sm:px-0 lg:pt-12 lg:pb-0 explore-slider ">
      <Swiper
        spaceBetween={spaceBetween}
        slidesPerView={slidesToShow}
        // centeredSlides={true}
        // breakpoints={{
        //   640: {
        //     slidesPerView: 1.2,
        //     centeredSlides: false,
        //   },
        //   768: {
        //     slidesPerView: 1.4,
        //   },
        //   1024: {
        //     slidesPerView: 1.2,
        //   },
        //   1280: {
        //     slidesPerView: 1,
        //   },
        // }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="w-full"
      >
        {exploreData.map((item, idx) => (
          <SwiperSlide
            key={item.id}
            className={idx === 0 ? 'first-slide-margin' : ''}
          >
            <div
              className="relative group aspect-square sm:aspect-auto sm:h-[400px] sm:w-[520px] lg:ml-8 sm:ml-5 
              lg:h-[498px] lg:w-[100%] rounded-lg overflow-hidden shadow-lg sm:rounded-lg"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b lg:from-black/10 lg:to-black/50 sm:from-black/30 sm:to-black/30" />

              <p className="absolute lg:top-[2.5rem] lg:left-[2.5rem] sm:top-[1.5rem] sm:left-[1.5rem]  text-white text-[1.5rem] leading-[1.75rem] tracking-[-0.02em] font-medium font-[Inter]">
                {item.category}
              </p>
              {/* Content Area */}
              <div className="absolute bottom-0 left-0 right-0 lg:p-[2.5rem] sm:p-[1.5rem] text-white flex flex-col lg:gap-[0.75rem] sm:gap-[0.25rem]">
                {/* Category Tag */}

                {/* Title */}
                <h3 className="lg:text-[2rem] lg:leading-[2.5rem] lg:tracking-[0.01em] sm:text-[1.5rem] sm:leading-[2rem] sm:tracking-[0.01em] capitalize font-[Onest] font-semibold text-[#F7F7F7] sm:font-archivo sm:font-medium sm:text-[24px] sm:leading-[28px] sm:tracking-[0.02em] sm:align-middle">
                  {item.title}
                </h3>

                {/* Subtitle */}
                <p className="text-[0.875rem] sm:text-[1rem] leading-[1.5rem] font-normal font-[Onest] text-white sm:w-[50%]">
                  {item.subtitle}
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-[0.75rem] mt-2 large-btn-flex">
                  <Button
                    variant="dark"
                    className="shadow-md lg:w-fit sm:flex-1 large-btn-flex"
                  >
                    Explore More
                  </Button>
                  <Button
                    variant="light"
                    className="shadow-md lg:w-fit sm:flex-1 large-btn-flex"
                  >
                    Contact us
                  </Button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ExploreSlider
