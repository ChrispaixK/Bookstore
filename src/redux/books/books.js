const ADDBOOK = 'bookstore/books/ADDBOOK';
const REMOVEBOOK = 'bookstore/books/REMOVEBOOK';
// initial state
const initState = [{
  id: '1452',
  title: 'Hello World',
  author: 'Chrispaix Kaze',
  category: 'Programming',
}];

export default function bookReducer(state = initState, action) {
  switch (action.type) {
    case ADDBOOK:
      return [...state, action.bookInfo];
    case REMOVEBOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
}

export const addBook = (bookInfo) => ({
  type: ADDBOOK,
  bookInfo,
});

export const rmBook = (id) => ({
  type: REMOVEBOOK,
  id,
});
