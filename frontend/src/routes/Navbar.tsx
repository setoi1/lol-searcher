import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <ul>
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/search">Search</Link>
          </li>
          <li className="nav-item">
            <Link to="/champions">Champions</Link>
          </li>
          <li className="nav-item">
            <Link to="/items">Items</Link>
          </li>
          <li className="nav-item">
            <Link to="/leaderboards">Leaderboards</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
