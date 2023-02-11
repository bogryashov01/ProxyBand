import { Link } from 'react-router-dom';
import './header.css';

function Header() {
  return (
    <div className="header-container">
      <div className="header-content">
        <Link to="/" className="header-link">
          Home
        </Link>
      </div>
    </div>
  );
}

export default Header;
