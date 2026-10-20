import { Route, Routes } from "react-router";
import Header from "./Components/header/Header";
import Home from "./Components/home/Home";
import Footer from "./Components/footer/Footer";
import Books from "./Components/books/Books";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
