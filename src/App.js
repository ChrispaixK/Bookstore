import { Routes, Route, Link } from 'react-router-dom';
import Books from './components/pages/Books';
import Categories from './components/pages/Categories';
import './App.css';

function App() {
  return (
    <div>
      <div className="top-bar">
        <h1>Bookstore</h1>
        <nav className="links">
          <Link to="/">Books</Link>
          <Link to="/Categories">Categories</Link>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="Categories" element={<Categories />} />
      </Routes>
      <div className="footer">
        <p>&copy; Bookstore 2022</p>
      </div>
    </div>
  );
}

export default App;
