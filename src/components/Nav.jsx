import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <header className="site">
      <div className="nav-row">
        <NavLink className="nav-name" to="/">Rafael M. Chavez</NavLink>
        <nav className="links">
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
          <NavLink to="/experience" className={({ isActive }) => (isActive ? 'active' : '')}>Experience</NavLink>
          <NavLink to="/resume" className={({ isActive }) => (isActive ? 'active' : '')}>Resume</NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}
