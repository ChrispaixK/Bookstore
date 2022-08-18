import { useSelector } from 'react-redux';
import AddBook from '../components/Addbook';
import Book from '../components/Book';

const Books = () => {
  const actualBooks = useSelector((state) => state.books);
  return (
    <>
      <main className="books-container">
        <h2>Book Page</h2>
        <h3>List Of books below</h3>
        {actualBooks.map((book) => (
          <Book
            key={book.id}
            id={book.id}
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
