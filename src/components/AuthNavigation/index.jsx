import { NavLink } from 'react-router-dom';

export default function AuthNavigation() {
  return (
    <nav>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Login</NavLink>
    </nav>
  );
}
