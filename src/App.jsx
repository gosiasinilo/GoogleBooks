import { useState, useRef } from "react";
import { getBooks } from "./services/books";
import SearchBar from "./components/SearchBar/SearchBar";
import BookList from "./components/BookList/BookList";
import styles from "./App.module.scss";


function App() {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState("");
  const debounceRef = useRef(null);

  const handleSearch = (text) => {
    clearTimeout(debounceRef.current);
    if (!text.trim()) { setBooks([]); setError(""); return; }
    debounceRef.current = setTimeout(async () => {
      try {
        setError("");
        const results = await getBooks(text);
        setBooks(results);
        if (results.length === 0) setError("No books found");
      } catch {
        setError("Something went wrong");
      }
    }, 500);
  };

  return (
     <>
    <div className={styles.app}>
      <header>
        <h1 className={styles.header}>Google Books Search</h1>
        <p className={styles.text}>Search for your favourite books</p>
      </header>
      <SearchBar onSearch={handleSearch} />
      {error && <p>{error}</p>}
      <BookList books={books} />
    </div>
  
    </>
  );
}

export default App;
