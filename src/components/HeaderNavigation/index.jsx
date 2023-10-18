import { NavLink } from 'react-router-dom';

export default function HeaderNavigation() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
    </nav>
  );
}
