import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { Button } from '@mui/material';
import { Fingerprint } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserEmail, selectUserName } from 'redux/auth/selectors';
import { logOut } from 'redux/auth/operations';
import { StyledUserMenu } from './UserMenu.styled';

export default function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(selectUserEmail);
  const name = useSelector(selectUserName);

  return (
    <StyledUserMenu>
      <Avatar {...stringAvatar(name)} />
      <p>{email}</p>
      <Button
        variant="outlined"
        color="error"
        onClick={() => dispatch(logOut())}
      >
        Log Out
        <Fingerprint sx={{ ml: 2 }} />
      </Button>
    </StyledUserMenu>
  );
}

function stringToColor(string) {
  let hash = 0;
  let i;

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}`,
  };
}
