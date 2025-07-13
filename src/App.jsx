import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Projects from './pages/Projects/Projects'
import './App.css' // Keep your App-specific styles if needed
import Blog from './pages/blog/blog'
import { SingleBlog } from './components/blogGrid/blogGrid'
import blogsData from './data/blogsData'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route
          path="/blog/:id"
          element={<SingleBlog blogsData={blogsData} />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
