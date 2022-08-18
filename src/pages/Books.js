import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddBook from '../components/Addbook';
import Book from '../components/Book';
import { fetchBooks } from '../redux/books/books';

const Books = () => {
  const dispatch = useDispatch();
  const actualBooks = useSelector((state) => state.books.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  return (
    <>
      <main className="books-container">
        <h2>Book Page</h2>
        <h3>List Of books below</h3>
        {actualBooks.map((book) => (
          <Book
            key={book.item_id}
            id={book.item_id}
            title={book.title}
            author={book.author}
            category={book.category}
          />
        ))}
        <AddBook />
      </main>
    </>
  );
};

export default Books;
