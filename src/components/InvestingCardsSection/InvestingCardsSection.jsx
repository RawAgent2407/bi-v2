import React from 'react'
import img1 from '../../assets/blog1.jpg'
import img2 from '../../assets/blog2.jpg'
import img3 from '../../assets/blog3.jpg'
import Button from '../Button'
import './InvestingCardsSection.css'

import { Link } from 'react-router-dom'

const blogPosts = [
  {
    image: img1,
    title:
      'A Guide To Choosing The Right Commercial Property In Vaishnodevi,...',
    date: '12 SEP 2024',
  },
  {
    image: img2,
    title:
      'Why Offices In Vaishnodevi Are The Ideal Choice For High-End Businesses',
    date: '12 SEP 2024',
  },
  {
    image: img3,
    title: 'The Future Of Real Estate Investment Trends And Predictions',
    date: '12 SEP 2024',
  },
]

const InvestingCardsSection = () => {
  return (
    <section className="sm:px-12 lg:px-36 lg:pb-20 lg:pt-0 sm:py-14 mob:px-5 mob:my-10 bg-white">
      <div className="w-full mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between sm:mb-10 sm:gap-0 lg:px-0 lg:mb-8 mob:pb-5">
          <h2 className="text-[1.75rem] leading-[2.25rem] tracking-[0.01em] font-[Onest] font-semibold capitalize text-[#171A20]">
            Smart Living, Smarter Investing
          </h2>

          {/* Hide button for screens less than 1280px */}
          <Button variant="dark-outline" className="dont-show-inlarge lg:block">
            <Link to="/projects">Explore More</Link>
          </Button>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 gap-[32px] lg:grid-cols-3">
          {blogPosts.map((post, idx) => (
            <div key={idx} className="overflow-hidden">
              {/* Image */}
              <div className="h-56 sm:h-[280px] md:h-72 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="lg:py-3 lg:px-1 sm:p-4 space-y-1 sm:space-y-2 mob:pt-2">
                <p className="text-[1.125rem] leading-[1.5rem] tracking-[0em] font-[Arial] font-normal text-[#0A0A0A] align-middle">
                  {post.title}
                </p>
                <p className="text-xs text-gray-500 font-sans tracking-wide">
                  {post.date}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Button only for sm screens below blog cards */}
        <div className="block lg:hidden mt-8 text-center">
          <Button variant="dark-outline">
            <Link to="/projects">Explore More</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default InvestingCardsSection
