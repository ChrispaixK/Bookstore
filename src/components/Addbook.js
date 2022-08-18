import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    title: '',
    author: '',
    category: '',
  });
  const valueChangeHandler = (v) => {
    v.preventDefault();
    setValues({ ...values, [v.target.name]: v.target.value });
  };

  const addBookHandler = (b) => {
    b.preventDefault();
    if (!values.title.trim()) {
      alert('Incorect input');
      return;
    }

    const newBook = {
      id: uuidv4(),
      title: values.title,
      author: values.author,
      category: values.category,
    };

    dispatch(addBook(newBook));
    // reinitialize the values
    setValues({
      title: '',
      author: '',
      category: '',
    });
  };

  return (
    <div>
      <form onSubmit={addBookHandler}>
        <input
          name="title"
          type="text"
          placeholder="Add title"
          value={values.title}
          onChange={valueChangeHandler}
        />
        <input
          name="author"
          type="text"
          placeholder="Which Author?"
          value={values.author}
          onChange={valueChangeHandler}
        />
        <input
          name="category"
          type="text"
          placeholder="Which Category?"
          value={values.category}
          onChange={valueChangeHandler}
        />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
