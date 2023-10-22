import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectUserIsLogged } from 'redux/auth/selectors';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  font-size: 1.2rem;
  color: #fff;
  margin: 0 10px;
  display: inline-block;
  transition: 0.5s;
  text-decoration: none;
  opacity: 0.75;
  font-weight: 300;
`;

export default function Footer() {
  const isLogged = useSelector(selectUserIsLogged);

  return (
    <AppBar
      position="static"
      style={{
        padding: '10px',
        boxShadow:
          '0px -2px 4px -1px rgba(0, 0, 0, 0.2), 0px -4px 5px 0px rgba(0, 0, 0, 0.14), 0px -1px 10px 0px rgba(0, 0, 0, 0.12) ',
      }}
    >
      <Box
        sx={{ display: 'flex', justifyContent: 'space-between', padding: 2 }}
      >
        <div style={{ display: 'flex', gap: 20, color: '#fff' }}>
          <StyledLink to="/">Home</StyledLink>
          {isLogged ? (
            <StyledLink style={{ color: '#fff' }} to="/contacts">
              Contacts
            </StyledLink>
          ) : (
            <>
              <StyledLink to="/login">Log In</StyledLink>
              <StyledLink to="/register">Sign Up</StyledLink>
            </>
          )}
        </div>
        <StyledLink style={{ float: 'right' }}>
          &copy;2023| All Rights Reserved
        </StyledLink>
      </Box>
    </AppBar>
  );
}
