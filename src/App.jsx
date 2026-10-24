import { Route, Routes } from "react-router";
import Header from "./Components/header/Header";
import Home from "./Components/home/Home";
import Footer from "./Components/footer/Footer";
import Books from "./Components/books/Books";
import BookDetails from "./Components/bookDetails/BookDetails";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/:bookId" element={<BookDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
