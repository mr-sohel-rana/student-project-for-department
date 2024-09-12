import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteBook } from './BookSlice'; // Make sure to import deleteBook action

const Showbook = () => {
  const books = useSelector((state) => state.bookReducer.books);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl overflow-x-auto">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">List of Students</h2>
        <table className="w-full border-collapse bg-white rounded-lg shadow-md">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="p-4 border-b text-left">Name</th>
              <th className="p-4 border-b text-left">Batch</th>
              <th className="p-4 border-b text-left">Address</th>
              <th className="p-4 border-b text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {books && books.map((book) => {
              const { id, name, address, batch } = book;
              return (
                <tr key={id} className="hover:bg-gray-50 transition-colors">
                  <td className="p-4 border-b text-left">{name}</td>
                  <td className="p-4 border-b text-left">{batch}</td>
                  <td className="p-4 border-b text-left">{address}</td>
                  <td className="p-4 border-b text-left">
                    <div className="flex flex-col sm:flex-row sm:space-x-2">
                      <Link to={`/EditBook`} state={{ book }}>
                        <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg mb-2 sm:mb-0 hover:bg-yellow-600 transition-colors">
                          Update
                        </button>
                      </Link>
                      <Link to={`/ProfilePage`} state={{ book }}>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                          Profile
                        </button>
                      </Link>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Showbook;
