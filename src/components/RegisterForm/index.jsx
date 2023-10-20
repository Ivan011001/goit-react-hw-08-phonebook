// import { useDispatch } from 'react-redux';
// import { register } from 'redux/auth/operations';

// export default function RegisterForm() {
//   const dispatch = useDispatch();

//   const onFormSubmit = e => {
//     e.preventDefault();
//     const form = e.target;
//     const { name, email, password } = form.elements;

//     if (!name.value || !email.value || !password.value) return;

//     const user = {
//       name: name.value,
//       email: email.value,
//       password: password.value,
//     };

//     dispatch(register(user));

//     form.reset();
//   };

//   return (
//     <form onSubmit={onFormSubmit}>
//       <label>
//         Name
//         <input type="text" name="name" />
//       </label>
//       <label>
//         Email
//         <input type="text" name="email" />
//       </label>
//       <label>
//         Password
//         <input type="password" name="password" />
//       </label>

//       <button>Register</button>
//     </form>
//   );
// }

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Link } from 'react-router-dom';

const defaultTheme = createTheme();

export default function SignUp() {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userData = {
      name: data.get('firstName') + ' ' + data.get('lastName'),
      email: data.get('email'),
      password: data.get('password'),
    };
    dispatch(register(userData));
    event.target.reset();
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>

            <Link to="/login">Already have an account? Log In</Link>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}