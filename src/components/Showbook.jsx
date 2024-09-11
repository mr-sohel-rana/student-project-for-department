import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBook } from './BookSlice';
import { Link } from 'react-router-dom';

const Showbook = () => {
  const books = useSelector((state) => state.bookReducer.books);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  };

  return (
    <div>
      <h2>List of Books</h2>
      <table className='border-2 border-black'>
        <thead className='border-2 border-black'>
          <tr className='border-2 border-black'>
            <th className='border-2 border-black'>ID</th>
            <th className='border-2 border-black'>Title</th>
            <th className='border-2 border-black'>Author</th>
            <th className='border-2 border-black'>Action</th>
          </tr>
        </thead>
        <tbody className='border-2 border-black'>
          {books && books.map((book) => {
            const { id, title, author } = book;
            return (
              <tr key={id} className='border-2 border-black'>
                <td className='border-2 border-black'>{id}</td>
                <td className='border-2 border-black'>{title}</td>
                <td className='border-2 border-black'>{author}</td>
                <td className='border-2 border-black'>
                  <Link
                    to={`/EditBook`}
                    state={{ book }}
                  >
                    <button className='border-2 border-black m-2 p-2 hover:bg-black hover:text-white'>
                      Edit
                    </button>
                  </Link>
                  <button
                    className='border-2 border-black m-2 p-2 hover:bg-black hover:text-white'
                    onClick={() => handleDelete(id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Showbook;
