import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import SpatialAudioIcon from '@mui/icons-material/SpatialAudio';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectUserName,
  selectUserEmail,
  selectUserIsLogged,
} from 'redux/auth/selectors';
import { logOut } from 'redux/auth/operations';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function Header() {
  const name = useSelector(selectUserName);
  const email = useSelector(selectUserEmail);
  const isLogged = useSelector(selectUserIsLogged);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const logOutHandler = () => {
    console.log(dispatch(logOut()).unwrap());
    toast.promise(
      dispatch(logOut()).unwrap(),
      {
        loading: 'Loading',
        success: data => `You have logged out`,
        error: err => ` ${err.toString()}`,
      },
      {
        success: {
          duration: 5000,
        },
      }
    );
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <SpatialAudioIcon
            fontSize="large"
            sx={{
              display: { xs: 'none', md: 'flex' },
              mr: 1,
            }}
          />

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
              sx={{ my: 2, color: 'white', display: 'block' }}
              onClick={() => navigate('/')}
            >
              Home
            </Button>
            {isLogged && (
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
                onClick={() => navigate('/contacts')}
              >
                Contacts
              </Button>
            )}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'none', md: 'flex' },
                gap: 3,
                alignItems: 'center',
              }}
            >
              <Typography textAlign="center">{email}</Typography>

              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt={name} src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Box>
            </Box>

            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {isLogged ? (
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography onClick={logOutHandler} textAlign="center">
                    Log Out
                  </Typography>
                </MenuItem>
              ) : (
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography
                    onClick={() => {
                      handleCloseUserMenu();
                      navigate('/login');
                    }}
                    textAlign="center"
                  >
                    Log In
                  </Typography>
                </MenuItem>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
