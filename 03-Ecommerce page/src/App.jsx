import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Products from './components/Products'
import ProductGallery from './components/ProductGallery'
import Comment from './components/Comment'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Products />
      <ProductGallery />
      <Comment />
    </div>
  )
}

export default App
