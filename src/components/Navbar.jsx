const Navbar = ({ children }) => {
  return (
    <nav className="nav-bar">
      <div className="logo">
        <span role="img">🍥</span>
        <h1>WeeBoo</h1>
        <span role="img">🍥</span>
      </div>
      <div className="search-container">{children}</div>
    </nav>
  );
};

export default Navbar