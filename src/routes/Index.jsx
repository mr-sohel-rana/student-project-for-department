import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Nav from '../layout/Nav'
import Home from '../components/Home'
import Showbook from '../components/Showbook'
import AddBook from '../components/AddBook'
import EditBook from '../components/EditBook'
import Footer from '../layout/Footer'

const Index = () => {
  return<BrowserRouter>
  <Nav /> 
  <Routes>
     <Route path='/' element={<Home />} />
     <Route path='/Showbook' element={<Showbook />} />
     <Route path='/AddBook' element={<AddBook />} />
     <Route path='/EditBook' element={<EditBook />} />
     <Route path='/*' element={<Home />} />

  </Routes>
  <Footer /> 

  </BrowserRouter>
 
}

export default Index