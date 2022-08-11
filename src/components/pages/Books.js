import React from 'react';
import AddBook from '../Addbook';
import Book from '../Book';

function Books() {
  return (
    <>
      <main className="books-container">
        <h2>Book Page</h2>
        <h3>List Of books below</h3>
        <Book />
        <AddBook />
      </main>
    </>
  );
}

export default Books;
