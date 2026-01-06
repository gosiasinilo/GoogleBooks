import styles from "./BookCard.module.scss";
import {cleanData} from "../../services/clenup";
import { useState } from "react";
import Modal from "../Modal/Modal";

function BookCard({ book }) {
    const bookData = cleanData(book.data);
  const [modalOpen, openModal] = useState(false);
  
  const {
    title,
    authors,
    description,
    thumbnail,
    selfLink
  } = bookData;


  return (
      <>
        <article className={styles.card}>
      <div className={styles.imageContainer}>
       <img className={styles.image} src={thumbnail} alt={title} />
      </div>
       <h3 className={styles.title}>{title}</h3>
      <p className={styles.author}>by {authors}</p>
      <p className={styles.description}>{description}</p>
     <button className={styles.button} onClick={() => openModal(true)}>
  See More
</button>
    </article>

 <Modal isOpen={modalOpen} close={() => openModal(false)}>
        <div className={styles.modalContent}>
          <h2>{bookData.title}</h2>
          <img className={styles.image} src={bookData.thumbnail}alt={bookData.title} />
          <p>Authors: {bookData.authors}</p>
          <p>Publisher: {bookData.publisher}</p>
          <p>Published: {bookData.publishedDate}</p>
          <p>Pages: {bookData.pageCount}</p>
          <p>Categories: {bookData.categories}</p>
          <p>Rating: {bookData.averageRating}</p>
          <p>Language: {bookData.language}</p> 
          <p>Description:{bookData.descriptionLg}</p>
          <a href={bookData.previewLink} target="_blank" rel="noopener noreferrer"><button className={styles.button}> Google Books page </button></a>
        </div>
      </Modal>
    </>
  );
}

export default BookCard;