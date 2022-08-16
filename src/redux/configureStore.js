import { combineReducers, configureStore } from '@reduxjs/toolkit';
import BookReducer from './books/books';
import checkreducer from './categories/categories';

const rootreducer = combineReducers({
  books: BookReducer,
  categories: checkreducer,
});

const store = configureStore({ reducer: rootreducer });

export default store;
