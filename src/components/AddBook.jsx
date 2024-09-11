import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from './bookSlice'; // Renamed the action to avoid conflict

const AddBook = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const dispatch = useDispatch();
  const numberBookList = useSelector((state) => state.bookReducer.books.length);

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = { id: numberBookList + 1, title, author }; // Increment id by 1 for new book
    dispatch(addBook(book)); // Use the correct action name
    navigate("/Showbook", { replace: true });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="m-10">
         
          <label htmlFor="title">Title:</label>
          <input className=" border-2 border-black hover:bg-slate-500 hover:text-white"
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)} // Add onChange handler
            required
          />
       
      
          <label htmlFor="author">Author:</label>
          <input className=" border-2 border-black hover:bg-slate-500 hover:text-white"
            type="text"
            name="author"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)} // Add onChange handler
            required
          />
       
        <button type="submit" className=" border-2 border-black hover:bg-slate-500 hover:text-white">AddBook</button> {/* Add a submit button */}
      </form>
    </div>
  );
};

export default AddBook;
