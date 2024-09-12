import { createSlice } from "@reduxjs/toolkit";

const initialBooks = {
    books: [
        { id: 1, name: "sohel", roll: 200608, address: "sirajganj", chamber: "pabna", institution: "ice", bio: "hi this is sohel", batch: "2019-20" },
    ]
};

export const BookSlice = createSlice({
    name: "books",
    initialState: initialBooks,
    reducers: {
        showBook: (state) => state,
        addBook: (state, action) => {
            state.books.push(action.payload);
        },
        deleteBook: (state, action) => {
            const id = action.payload;
            state.books = state.books.filter((book) => book.id !== id);
        },
        updateBook: (state, action) => {
            const { id, name, roll, address, chamber, institution, bio, batch } = action.payload;
            const book = state.books.find((book) => book.id === id);
            if (book) {
                book.name = name;
                book.roll = roll;
                book.address = address;
                book.chamber = chamber;
                book.institution = institution;
                book.bio = bio;
                book.batch = batch;
            }
        }
    }
});

export const { showBook, addBook, deleteBook, updateBook } = BookSlice.actions;
export default BookSlice.reducer;
