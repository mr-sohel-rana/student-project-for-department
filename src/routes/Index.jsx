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
        <Route path="/" element={<Home />} />
        <Route path="/showbook" element={<Showbook />} />
        <Route path="/addbook" element={<AddBook />} />
        <Route path="/editbook" element={<EditBook />} />
        <Route path="/profilepage" element={<ProfilePage />} />
        <Route path="*" element={<Home />} /> {/* Catch-all route */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Index;
