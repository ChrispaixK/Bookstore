import { Routes, Route, Link } from 'react-router-dom';
import Books from './pages/Books';
import Categories from './pages/Categories';
import './App.css';

function App() {
  return (
    <div>
      <div className="top-bar">
        <div className="top-left">
          <h1>Bookstore CMS</h1>
          <nav className="links">
            <Link to="/">BOOKS</Link>
            <Link to="/Categories">CATEGORIES</Link>
          </nav>
        </div>

        <div className="avatar">
          <i className="fa-solid fa-user" />
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="Categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
