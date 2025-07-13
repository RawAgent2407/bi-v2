import React from 'react'

const BlogHero = () => {
  return (
    <section className="h-[50vh] w-full flex items-center justify-center bg-white px-4 sm:px-8 lg:px-16">
      <div className="max-w-3xl text-left">
        <p className="text-xs font-medium tracking-wide text-gray-700 mb-4">
          Build India Blog
        </p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-gray-900">
          The thinking, ideas
          <br />
          and technology
          <br />
          behind World.
        </h1>
      </div>
    </section>
  )
}

export default BlogHero
