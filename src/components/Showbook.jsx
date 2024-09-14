import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { deleteBook } from './BookSlice';
import PasswordPrompt from './PasswordPrompt';
import logo from '../image/image2.jpg';

const Showbook = () => {
  const books = useSelector((state) => state.bookReducer.books);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectedBook, setSelectedBook] = useState(null);
  const [showPasswordPrompt, setShowPasswordPrompt] = useState(false);

  const handleDelete = (id) => {
    // Uncomment this if you want to enable delete functionality
    // dispatch(deleteBook(id));
    console.log(`Delete book with ID: ${id}`); // Placeholder action
  };

  const handleEditClick = (book) => {
    setSelectedBook(book);
    setShowPasswordPrompt(true);
  };

  const handlePasswordSubmit = (enteredPassword) => {
    if (selectedBook && enteredPassword === selectedBook.password) {
      setShowPasswordPrompt(false);
      navigate('/EditBook', { state: { book: selectedBook } });
    } else {
      alert('Incorrect password. Please try again.');
    }
  };

  return (
    <div>
      <section>
        <img className='h-80 w-full' src={logo} alt="Logo" />
      </section>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center mt-[-120px] p-4">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl overflow-x-auto">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">List of Books</h2>
          <table className="w-full border-collapse bg-white rounded-lg shadow-md">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="p-4 border-b text-left">Image</th>
                <th className="p-4 border-b text-left">Name</th>
                <th className="p-4 border-b text-left">Batch</th>
                <th className="p-4 border-b text-left">Address</th>
                <th className="p-4 border-b text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {books && books.map((book) => {
                const { img, id, name, address, batch, password } = book;
                return (
                  <tr key={id} className="hover:bg-gray-50 transition-colors">
                    <td className="p-4 border-b text-left">
                      <img src={img} alt={name} className="w-16 h-16 object-cover rounded-full" />
                    </td>
                    <td className="p-4 border-b text-left">{name}</td>
                    <td className="p-4 border-b text-left">{batch}</td>
                    <td className="p-4 border-b text-left">{address}</td>
                    <td className="p-4 border-b text-left">
                      <div className="flex flex-col sm:flex-row sm:space-x-2">
                        <button
                          onClick={() => handleEditClick(book)}
                          className="bg-yellow-500 text-white px-4 py-2 rounded-lg mb-2 sm:mb-0 hover:bg-yellow-600 transition-colors"
                        >
                          Update
                        </button>
                        <Link to={`/ProfilePage`} state={{ book }}>
                          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                            Profile
                          </button>
                        </Link>
                        {/* Uncomment below if you want to add a delete button */}
                        {/* <button onClick={() => handleDelete(id)} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors">
                          Delete
                        </button> */}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Render PasswordPrompt if showPasswordPrompt is true */}
      {showPasswordPrompt && (
        <PasswordPrompt
          onClose={() => setShowPasswordPrompt(false)}
          onSubmit={handlePasswordSubmit}
        />
      )}
    </div>
  );
};

export default Showbook;
