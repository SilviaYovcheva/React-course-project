import { useState } from "react";
import styles from "./createBook.styles.module.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { createBook } from "../../service/bookService";

const initialBookValue = {
  title: "",
  author: "",
  genre: "",
  description: "",
  image_url: "",
  published_year: "",
};

export default function CreateBook() {
  const navigate = useNavigate();
  const [bookFormData, setBookFormData] = useState(initialBookValue);

  const changeHandler = (e) => {
    setBookFormData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async () => {
    try {
      await createBook(bookFormData);
      toast.success("Book created successfully");
      navigate("/");
    } catch (error) {
      console.log(error.message)
      toast.error("Could not create the book");
    }
  };

  return (
    <div className={styles.createWrapper}>
      <div className={styles.createContainer}>
        <form action={handleSubmit} className={styles.createForm}>
          <h1>Create Book</h1>
          <div className={styles.formData}>
            <label htmlFor="bookTitle">Title</label>
            <input
              type="text"
              id="bookTitle"
              name="title"
              placeholder="Book title"
              value={bookFormData.title}
              onChange={changeHandler}
            />
          </div>
          <div className={styles.formData}>
            <label htmlFor="bookAuthor">Author</label>
            <input
              type="text"
              name="author"
              placeholder="Book author"
              value={bookFormData.author}
              onChange={changeHandler}
            />
          </div>
          <div className={styles.formData}>
            <label htmlFor="genre">Genre</label>
            <select
              type="text"
              name="genre"
              placeholder="Book genre"
              value={bookFormData.genre}
              onChange={changeHandler}
            >
              <option value="genre" defaultValue={bookFormData.genre}>
                Genre...
              </option>
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
              value={bookFormData.description}
              onChange={changeHandler}
            />
          </div>
          <div className={styles.formData}>
            <label htmlFor="bookImage">Book image url</label>
            <input
              type="text"
              name="image_url"
              placeholder="Book image url"
              value={bookFormData.image_url}
              onChange={changeHandler}
            />
          </div>
          <div className={styles.formData}>
            <label htmlFor="bookYear">Published year</label>
            <input
              type="number"
              name="published_year"
              placeholder="Book published year"
              value={bookFormData.published_year}
              onChange={changeHandler}
            />
          </div>
          <button type="submit" className="btn btn--form">
            Create Book
          </button>
        </form>
      </div>
    </div>
  );
}
