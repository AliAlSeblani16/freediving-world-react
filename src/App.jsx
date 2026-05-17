import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";

import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedCourse, setSelectedCourse] = useState("");

  function renderPage() {
    if (currentPage === "home") {
      return <Home />;
    } else if (currentPage === "about") {
      return <About />;
    } else if (currentPage === "courses") {
      return (
        <Courses
          setCurrentPage={setCurrentPage}
          setSelectedCourse={setSelectedCourse}
        />
      );
    } else if (currentPage === "contact") {
      return <Contact selectedCourse={selectedCourse} />;
    }
  }

  return (
    <>
     <Navbar setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer />
    </>
  );
}

export default App;