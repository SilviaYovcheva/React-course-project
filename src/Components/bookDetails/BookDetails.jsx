import styles from "./bookDetails.styles.module.css";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import request from "../../utils/request";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { deleteBook } from "../../service/bookService";
import AuthContext from "../../contexts/authContext";

export default function BookDetails() {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState({});
  const { user } = useContext(AuthContext);
  const isOwner = user && user?.id === book?.owner_id;

  useEffect(() => {
    request({ path: `/books?id=eq.${bookId}`, method: "GET" })
      .then((result) => {
        setBook(result[0]);
      })
      .catch((error) => alert(error));
  }, [bookId]);

  const deleteBookClickHandler = async (e) => {
    e.preventDefault();

    const confirmed = confirm(`Are you sure to delete ${book.title} book?`);

    if (!confirmed) {
      return;
    }

    try {
      await deleteBook(bookId, book);
      toast.success("Book deleted successfully");
      navigate("/books");
    } catch (error) {
      console.log(error.message);
      toast.error("Could not delete the book");
    }
  };

  return (
    <div className="container">
      <div className={styles.book}>
        <div className={styles.bookContent}>
          <img src={book.image_url} className={styles.bookImg} />
          <div className={styles.bookInformation}>
            <div>
              <p className={styles.bookTitle}>{book.title}</p>
              <p>
                <span>Author:</span> {book.author}
              </p>
              <p>
                <span>Genre:</span> {book.genre}
              </p>
              <p>
                <span>Published:</span> {book.published_year} year
              </p>
            </div>
            <div className={styles.bookDescription}>{book.description}</div>
          </div>
        </div>
        {isOwner && (
          <div className={styles.btnSection}>
            <div className={styles.button}>
              <Link to={`/books/${bookId}/edit`} className={styles.btnEdit}>
                Edit
              </Link>
            </div>
            <div className={styles.button}>
              <Link
                to={`/books/${bookId}`}
                className={styles.btnDelete}
                onClick={deleteBookClickHandler}
              >
                Delete
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
