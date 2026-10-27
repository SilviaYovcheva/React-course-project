import { useEffect, useState } from "react";
import request from "../../utils/request";
import styles from "./editBook.styles.module.css";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router";
import { editBook } from "../../service/bookService";

const initialBookValue = {
  title: "",
  author: "",
  genre: "",
  description: "",
  image_url: "",
  published_year: 0,
};

export default function EditBook() {
  const { bookId } = useParams();
  const [book, setBook] = useState(initialBookValue);
  const navigate = useNavigate();

  useEffect(() => {
    request({ path: `/books?id=eq.${bookId}`, method: "GET" }).then((data) =>
      setBook(data[0]),
    );
  }, [bookId]);

  const changeHandler = (e) => {
    setBook((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async () => {
    try {
      await editBook(bookId, book);
      toast.success("Book edited successfully");
      navigate('/');
    } catch (error) {
      console.log(error.message)
      toast.error("Could not edit the book");
    }
  };

  return (
    <div className={styles.editWrapper}>
      <div className={styles.editContainer}>
        <div>
          {book.image_url && <img src={book.image_url} alt="Book cover" />}
        </div>
        <form className={styles.editForm} action={handleSubmit}>
          <h1>Edit Book Details</h1>
          <div className={styles.formData}>
            <label htmlFor="bookTitle">Title</label>
            <input
              type="text"
              id="bookTitle"
              name="title"
              placeholder="Book title"
              value={book.title}
              onChange={changeHandler}
            />
          </div>
          <div className={styles.formData}>
            <label htmlFor="bookAuthor">Author</label>
            <input
              type="text"
              name="author"
              placeholder="Book author"
              value={book.author}
              onChange={changeHandler}
            />
          </div>
          <div className={styles.formData}>
            <label htmlFor="genre">Genre</label>
            <select
              type="text"
              name="genre"
              placeholder="Book genre"
              value={book.genre}
              onChange={changeHandler}
            >
              <option value="classic">Classic</option>
              <option value="romance">Romance</option>
              <option value="dystopian">Dystopian</option>
              <option value="fantasy">Fantasy</option>
              <option value="history">History</option>
            </select>
          </div>
          <div className={styles.formData}>
            <label htmlFor="bookDescription">Description</label>
            <input
              type="text"
              name="description"
              placeholder="Book description"
              value={book.description}
              onChange={changeHandler}
            />
          </div>
          <div className={styles.formData}>
            <label htmlFor="bookImage">Book image url</label>
            <input
              type="text"
              name="image_url"
              placeholder="Book image url"
              value={book.image_url}
              onChange={changeHandler}
            />
          </div>
          <div className={styles.formData}>
            <label htmlFor="bookYear">Published year</label>
            <input
              type="number"
              name="published_year"
              placeholder="Book published year"
              value={book.published_year}
              onChange={changeHandler}
            />
          </div>
          <button type="submit" className="btn btn--form">
            Save changes
          </button>
        </form>
      </div>
    </div>
  );
}
