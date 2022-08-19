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
        <div className="circular">
          <div className="inner" />
          <div className="outer" />
          <div className="circle">
            <div className="bar left">
              <div className="progress" />
            </div>
            <div className="bar right">
              <div className="progress" />
            </div>
          </div>
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
