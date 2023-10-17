import { NavLink } from 'react-router-dom';

export default function HeaderNavigation() {
  return (
    <nav>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
    </nav>
  );
}
