import React from 'react';

const AddBook = () => (
  <div>
    <form>
      <input type="text" placeholder="Add title" />
      <input type="text" placeholder="Which Author?" />
      <button type="submit">Add Book</button>
    </form>
  </div>
);

export default AddBook;
