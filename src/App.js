import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Categories from './pages/Categories'
import Details from './pages/Details'
import Footer from './pages/Footer'
import Header from './pages/Header'
import Hero from './pages/Hero'

const App = () => {
  return (
    <div className="wrapper" >
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Categories />
            </>
          } />
        <Route
          path="/details"
          element={<Details />}
        />
      </Routes >
      < Footer />

    </div >
  )
}

export default App