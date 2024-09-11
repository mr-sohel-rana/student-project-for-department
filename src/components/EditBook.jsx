import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { updateBook } from './BookSlice';

const EditBook = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const book = location.state?.book; // Access passed book from location state

  useEffect(() => {
    if (book) {
      setTitle(book.title);
      setAuthor(book.author);
    }
  }, [book]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (book) {
      dispatch(updateBook({ id: book.id, title, author }));
      navigate('/Showbook');
    }
  };

  if (!book) return <div>No book selected for editing</div>;

  return (
    <div className='mt-10'>
      <h2>Edit Book</h2>
      <form onSubmit={handleSubmit}>
         
          <label htmlFor="title">Title:</label>
          <input className='border-2 border-black ml-5'
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
       
        
          <label htmlFor="author">Author:</label>
          <input className='border-2 border-black ml-5' 
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        
        <button type="submit"  className='border-2 border-black m-2 p-2 hover:bg-black hover:text-white'>Update</button>
      </form>
    </div>
  );
};

export default EditBook;
