import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUserIsLogged } from 'redux/auth/selectors';

export default function HeaderNavigation() {
  const isLogged = useSelector(selectUserIsLogged);
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {isLogged && <NavLink to="/contacts">Contacts</NavLink>}
    </nav>
  );
}
