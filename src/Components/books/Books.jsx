import { useEffect, useState } from "react";
import request from "../../utils/request";
import BookCard from "../bookCard/BookCard";

export default function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    request({ path: `/books?order=created_at.desc`, method: "GET" }).then(
      (result) => {
        setBooks(result);
      },
    );
  }, []);

  return (
    <>
      <div className="container">
        <span className="subheading">
          Current shelf <span style={{ color: "#45260a" }}>{books.length}</span>{" "}
          books{" "}
        </span>
        <h3 className="heading-tertiary">Books to begin with</h3>
      </div>
      <div className="container grid grid--4-cols margin-bottom-md">
        {books.map((book) => {
          return (
            <BookCard
              key={book.id}
              bookId={book.id}
              image_url={book.image_url}
              title={book.title}
            />
          );
        })}
      </div>
    </>
  );
}
