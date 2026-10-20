import { Link } from "react-router";
import styles from "./book.styles.module.css";

export default function BookCard({ bookId, image_url, title }) {
  return (
    <div>
      <div className={styles.book}>
        <img src={image_url} className={styles.bookImg} />
        <div className={styles.bookContent}>
          <p className={styles.bookTitle}>{title}</p>
          <div className={styles.viewMore}>
            <Link
              to={`/books/${bookId}`}
              className={styles.btnDetails}
            >
              View More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
