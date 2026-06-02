import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Listings from './pages/Listings'
import ListingsIndex from './components/ListingsIndex'
import HostelDetails from './components/HostelDetails'
import Contact from './pages/Contact'
import ListYourHouse from './pages/ListYourHouse'
import Footer from './components/Footer'


const App = () => {
  return (
     <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listings" element={<Listings />} >
          <Route index element={<ListingsIndex />} />
        </Route>
        <Route path="/listings/:id" element={<HostelDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/list-your-house" element={<ListYourHouse />} />
      </Routes>
      <Footer />
     </>
  )
}

export default App