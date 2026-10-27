import { Route, Routes } from "react-router";
import { ToastContainer } from "react-toastify";
import Header from "./Components/header/Header";
import Home from "./Components/home/Home";
import Footer from "./Components/footer/Footer";
import Books from "./Components/books/Books";
import BookDetails from "./Components/bookDetails/BookDetails";
import Login from "./Components/Login/Login";
import Register from "./Components/register/Register";
import { AuthProvider } from "./contexts/authContext";
import Logout from "./Components/logout/Logout";

function App() {
  return (
    <>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/books/:bookId" element={<BookDetails />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
        <ToastContainer />
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
