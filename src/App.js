import { Routes, Route, Link } from 'react-router-dom';
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

function Books() {
  return (
    <>
      <main className="books-container">
        <h2>Books page here</h2>
      </main>
    </>
  );
}

function Categories() {
  return (
    <>
      <main>
        <div className="categories-container">
          <h2>Categories page here</h2>
        </div>
      </main>
    </>
  );
}

export default App;
