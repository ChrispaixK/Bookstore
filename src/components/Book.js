import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { rmBook } from '../redux/books/books';

const Book = (props) => {
  const dispatch = useDispatch();

  const {
    id, title, author, category,
  } = props;

  const rmBookHandler = () => {
    dispatch(rmBook(id));
  };

  return (
    <>
      <p>
        {title}
        {' by '}
        {author}
        {' in '}
        {category}
      </p>
      <button type="button" onClick={rmBookHandler}>Delete</button>
    </>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
