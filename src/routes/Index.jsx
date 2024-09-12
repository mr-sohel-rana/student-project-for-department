import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import Showbook from '../components/Showbook';
import AddBook from '../components/AddBook';
import EditBook from '../components/EditBook';
import Footer from '../layout/Footer';
import Nav from '../layout/Nav';
import ProfilePage from '../components/ProfilePage';

const Index = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Showbook' element={<Showbook />} />
        <Route path='/AddBook' element={<AddBook />} />
        <Route path='/EditBook' element={<EditBook />} />
        <Route path='/ProfilePage' element={<ProfilePage />} />
        <Route path='/*' element={<Home />} /> {/* Catch-all route */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Index;
