import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { updateBook } from './BookSlice'; // Import action to update a book

const EditBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { book } = location.state || {}; // Get the book from the location state

  // Initialize form fields with the book details
  const [name, setName] = useState(book?.name || '');
  const [roll, setRoll] = useState(book?.roll || '');
  const [address, setAddress] = useState(book?.address || '');
  const [chamber, setChamber] = useState(book?.chamber || '');
  const [institution, setInstitution] = useState(book?.institution || '');
  const [bio, setBio] = useState(book?.bio || '');
  const [batch, setBatch] = useState(book?.batch || '');
  const [image, setImage] = useState(book?.img || null); // Initialize with existing image
  const [password, setPassword] = useState(book?.password || ''); // Initialize with existing password

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // Store the base64 URL of the image
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedBook = {
      ...book,
      name,
      roll,
      address,
      batch,
      chamber,
      institution,
      bio,
      img: image, // Updated image data
      password, // Updated password data
    };

    dispatch(updateBook(updatedBook)); // Dispatch update action
    navigate("/Showbook", { replace: true });
  };

  useEffect(() => {
    if (!book) {
      navigate("/Showbook"); // Redirect if no book data is provided
    }
  }, [book, navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Edit Book Details</h2>
        <form onSubmit={handleSubmit}>
          {/* Existing input fields */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-2">Enter your name</label>
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
            <label htmlFor="roll" className="block text-gray-700 mb-2">Enter your roll</label>
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
            <label htmlFor="address" className="block text-gray-700 mb-2">Current Address</label>
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
            <label htmlFor="chamber" className="block text-gray-700 mb-2">Current Chamber District</label>
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
            <label htmlFor="batch" className="block text-gray-700 mb-2">Department Batch</label>
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
            <label htmlFor="institution" className="block text-gray-700 mb-2">Institution Name</label>
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
            <label htmlFor="bio" className="block text-gray-700 mb-2">Add Your Small Bio</label>
            <textarea
              className="w-full border-2 border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
              id="bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              required
            />
          </div>

          {/* Image upload field */}
          <div className="mb-4">
            <label htmlFor="image" className="block text-gray-700 mb-2">Upload Your Image</label>
            <input
              className="w-full border-2 border-gray-300 p-2 rounded"
              type="file"
              id="image"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>

          {/* Display selected image */}
          {image && (
            <div className="mb-4 flex justify-center">
              <img src={image} alt="Selected" className="w-32 h-32 object-cover rounded-full border-2 border-gray-300" />
            </div>
          )}

          {/* Password input field */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
            <input
              className="w-full border-2 border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
