import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { rmBook } from '../redux/books/books';
import './Book.css';

const Book = (props) => {
  const dispatch = useDispatch();

  const {
    id, title, author, category,
  } = props;

  const rmBookHandler = () => {
    dispatch(rmBook(id));
  };

  return (
    <div className="book-container">
      <div className="bookInfo">
        <p className="category">{category}</p>
        <h3>{title}</h3>
        <p className="author">{author}</p>
        <div className="actions">
          <button type="button">Comments</button>
          <button type="button" onClick={rmBookHandler}>
            Remove
          </button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="stats">

        <div className="progress">
          <svg className="svg1" height="100" width="100">
            <circle cx="40" cy="20" r="10" stroke="#FF0080" strokeWidth="20" fill="transparent" />
          </svg>
          <svg className="svg2" height="50" width="50">
            <circle cx="10" cy="30" r="10" stroke="#FF0080" strokeWidth="20" fill="transparent" />
          </svg>
        </div>
        <div className="otherstats">
          <p>64%</p>
          <p>Completed</p>
        </div>
      </div>
      <div className="update">
        <p>current chapiter</p>
        <p>chapiter 17</p>
        <button type="button">Update progress</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
