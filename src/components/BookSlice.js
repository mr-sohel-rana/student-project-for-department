import { createSlice } from "@reduxjs/toolkit";
const initialBooks={
    books:[
        {id:1,title:"bangladeshi",author:"sohel"},
        {id:2,title:"bangladeshi",author:"rana"},
    ]
};
export const BookSlice=createSlice({
name:"books",
initialState:initialBooks,
reducers:{
    showBook:(state)=>state,
    addBook:(state,action)=>{
        state.books.push(action.payload)
    },

        deleteBook:(state,action)=>{
            const id=action.payload;
            state.books=state.books.filter((book)=>book.id!==id);
        },
        updateBook:(state,action)=>{
            const {id,title,author}=action.payload;
            const isBookExist=state.books.filter((book)=>book.id===id);
            if(isBookExist){
                isBookExist[0].title=title;
                isBookExist[0].author=author;
            }
        }
     
}
})

export const {showBook,addBook,deleteBook,updateBook}=BookSlice.actions;
export default BookSlice.reducer;