import BookCard from "../BookCard/BookCard";
import styles from "./BookList.module.scss";

function BookList({ books }) {
  return (
  <div className={styles.app}>
    <section className={styles.container}>
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </section></div>
  );
}

export default BookList;