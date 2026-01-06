import { useState } from "react";
import styles from "./SearchBar.module.scss";

function SearchBar({ onSearch }) {
  const [text, Search] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(text);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        value={text}
        onChange={(e) => Search(e.target.value)}
      />
      <button className={styles.button} type="submit">Search</button>
    </form>
  );
}

export default SearchBar;