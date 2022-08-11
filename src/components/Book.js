import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { title = 'Default title', author = 'Chrispaix' } = props;

  return (
    <>
      <p>
        {title}
        {' '}
        by
        {' '}
        {author}
      </p>
      <button type="button">Delete</button>
    </>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
