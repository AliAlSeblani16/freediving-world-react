function Navbar({ setCurrentPage }) {
  return (
    <header className="navbar">
      <div className="logo">Freediving World</div>

      <nav>
        <button onClick={() => setCurrentPage("home")}>Home</button>
        <button onClick={() => setCurrentPage("about")}>About</button>
        <button onClick={() => setCurrentPage("courses")}>Courses</button>
        <button onClick={() => setCurrentPage("contact")}>Contact</button>
      </nav>
    </header>
  );
}

export default Navbar;