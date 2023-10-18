import HeaderNavigation from 'components/HeaderNavigation';
import UserMenu from 'components/UserMenu';
import { useSelector } from 'react-redux';
import { selectUserIsLogged } from 'redux/auth/selectors';
import { StyledHeader } from './Header.styled';

export default function Header() {
  const isLogged = useSelector(selectUserIsLogged);
  return (
    <StyledHeader>
      <HeaderNavigation />
      {isLogged && <UserMenu />}
    </StyledHeader>
  );
}