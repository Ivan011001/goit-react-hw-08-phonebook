import { NavLink, useLocation } from 'react-router-dom';
import { Button } from '@mui/material';
import { Fingerprint } from '@mui/icons-material';

export default function AuthNavigation() {
  const location = useLocation();
  const finalNavigation =
    location.pathname === '/register' ? '/login' : '/register';
  const finalNavName = location.pathname === '/register' ? 'Log In' : 'Sign Up';

  return (
    <nav>
      <NavLink to={finalNavigation}>
        <Button variant="outlined">
          {finalNavName}
          <Fingerprint sx={{ ml: 2 }} />
        </Button>
      </NavLink>
    </nav>
  );
}
