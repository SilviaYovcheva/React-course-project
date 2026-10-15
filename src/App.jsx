import { Route, Routes } from "react-router";
import Header from "./Components/header/Header";
import Home from "./Components/home/Home";
import Footer from "./Components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
