import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { updateBook } from './BookSlice';

const EditBook = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [roll, setRoll] = useState('');
  const [address, setAddress] = useState('');
  const [chamber, setChamber] = useState('');
  const [institution, setInstitution] = useState('');
  const [bio, setBio] = useState('');
  const [batch, setBatch] = useState('');

  const book = location.state?.book; // Access passed book from location state

  useEffect(() => {
    if (book) {
      setName(book.name);
      setRoll(book.roll);
      setAddress(book.address);
      setChamber(book.chamber);
      setInstitution(book.institution);
      setBio(book.bio);
      setBatch(book.batch);
    }
  }, [book]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (book) {
      dispatch(updateBook({ id: book.id, name, roll, address, batch, chamber, institution, bio }));
      navigate('/Showbook'); // Navigate to Showbook page after update
    }
  };

  if (!book) return <div>No book selected for editing</div>;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Edit you profile</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-2">Name:</label>
            <input
              className="w-full border-2 border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="roll" className="block text-gray-700 mb-2">Roll:</label>
            <input
              className="w-full border-2 border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
              type="text"
              id="roll"
              value={roll}
              onChange={(e) => setRoll(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="address" className="block text-gray-700 mb-2">Address:</label>
            <input
              className="w-full border-2 border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="chamber" className="block text-gray-700 mb-2">Chamber District:</label>
            <input
              className="w-full border-2 border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
              type="text"
              id="chamber"
              value={chamber}
              onChange={(e) => setChamber(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="batch" className="block text-gray-700 mb-2">Batch:</label>
            <input
              className="w-full border-2 border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
              type="text"
              id="batch"
              value={batch}
              onChange={(e) => setBatch(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="institution" className="block text-gray-700 mb-2">Institution:</label>
            <input
              className="w-full border-2 border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
              type="text"
              id="institution"
              value={institution}
              onChange={(e) => setInstitution(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="bio" className="block text-gray-700 mb-2">Bio:</label>
            <textarea
              className="w-full border-2 border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
              id="bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditBook;
