import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/red">Red</Link>
        </li>
        <li>
          <Link to="/blue">Blue</Link>
        </li>
        <li>
          <Link to="/green">Green</Link>
        </li>
        <li>
          <Link to="/yellow">Yellow</Link>
        </li>
        <li>
          <Link to="/orange">Orange</Link>
        </li>
        <li>
          <Link to="/purple">Purple</Link>
        </li>
        <li>
          <Link to="/brown">Brown</Link>
        </li>
        <li>
          <Link to="/pink">Pink</Link>
        </li>
        <li>
          <Link to="/gray">Gray</Link>
        </li>
        <li>
          <Link to="/black">Black</Link>
        </li>
      </ul>
    </nav>
  );
}
