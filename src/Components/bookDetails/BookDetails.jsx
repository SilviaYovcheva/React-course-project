import styles from "./bookDetails.styles.module.css";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import request from "../../utils/request";

export default function BookDetails() {
  const { bookId } = useParams();
  // const navigate = useNavigate();
  const [book, setBook] = useState({});

  useEffect(() => {
    request(`/books?id=eq.${bookId}`)
      .then((result) => {
        setBook(result[0]);
      })
      .catch((error) => alert(error));
  }, [bookId]);

  return (
    <div className="container">
      <div className={styles.book}>
        <div className={styles.bookContent}>
          <img src={book.image_url} className={styles.bookImg} />
          <div className={styles.bookInformation}>
            <div>
              <p className={styles.bookTitle}>{book.title}</p>
              <p><span>Author:</span> {book.author}</p>
              <p><span>Genre:</span> {book.genre}</p>
              <p><span>Published:</span> {book.published_year} year</p>
            </div>
            <div className={styles.bookDescription}>{book.description}</div>
          </div>
        </div>
        <div className={styles.btnSection}>
            <div className={styles.button}>
              <Link to={`/books/${bookId}/edit`} className={styles.btnEdit}>
                Edit
              </Link>
            </div>
            <div className={styles.button}>
              <Link to={`/books/${bookId}`} className={styles.btnDelete}>
                Delete
              </Link>
            </div>
      </div>
      </div>
    </div>
  );
}
