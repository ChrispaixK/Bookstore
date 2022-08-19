import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import apiUrl from '../../API';

const ADDBOOK = 'bookstore/books/ADDBOOK';
const REMOVEBOOK = 'bookstore/books/REMOVEBOOK';
const FETCHBOOKS = 'bookstore/books/FETCHBOOKS';
// initial state
const initState = {
  books: [],
};

export default function bookReducer(state = initState, action) {
  switch (action.type) {
    case `${FETCHBOOKS}/fulfilled`:
      return { ...state, books: action.payload };
    case `${ADDBOOK}/fulfilled`:
      return { ...state, books: [...state.books, action.payload] };
    case `${REMOVEBOOK}/fulfilled`:
      return { ...state, books: state.books.filter((book) => book.item_id !== action.payload) };
    default:
      return state;
  }
}

const transformData = (newObj) => Object.keys(newObj).map((obj) => ({
  item_id: obj,
  title: newObj[obj][0].title,
  author: newObj[obj][0].author,
  category: newObj[obj][0].category,
}));

export const fetchBooks = createAsyncThunk(FETCHBOOKS, async () => {
  const res = await fetch(`${apiUrl}/books`);
  const data = await res.json();

  const toSend = transformData(data);

  return toSend;
});

export const addBook = createAsyncThunk(ADDBOOK, async (bookInfo) => {
  await axios.post(`${apiUrl}/books`, bookInfo);

  return bookInfo;
});

export const rmBook = createAsyncThunk(REMOVEBOOK, async (id) => {
  await axios.delete(`${apiUrl}/books/${id}`, { item_id: id });

  return id;
});
