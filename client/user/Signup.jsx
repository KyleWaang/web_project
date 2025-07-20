import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  CardActions,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { create } from "./api-user";

// Full-page container
const SignupContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  background: `linear-gradient(120deg, ${theme.palette.primary.light} 0%, ${theme.palette.secondary.light} 100%)`,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(4),
}));

// Styled card
const SignupCard = styled(Card)(({ theme }) => ({
  maxWidth: 400,
  width: '100%',
  borderRadius: theme.shape.borderRadius * 2,
  boxShadow: theme.shadows[5],
  overflow: 'visible',
}));

// Header typography
const Header = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  marginBottom: theme.spacing(2),
  color: theme.palette.primary.dark,
}));

export default function Signup() {
  const theme = useTheme();
  const [values, setValues] = useState({ name: "", password: "", email: "", error: "" });
  const [open, setOpen] = useState(false);

  const handleChange = (name) => (event) => setValues({ ...values, [name]: event.target.value });
  const handleClose = () => setOpen(false);

  const clickSubmit = () => {
    const user = { name: values.name, email: values.email, password: values.password };
    create(user).then((data) => {
      if (data.error) setValues({ ...values, error: data.error });
      else setOpen(true);
    });
  };

  return (
    <SignupContainer>
      <SignupCard>
        <CardContent sx={{ textAlign: 'center', p: 4 }}>
          <Header variant="h5">Create Account</Header>
          <Typography variant="body2" sx={{ mb: 3, color: theme.palette.text.secondary }}>
            Join the MapleStory community and start your adventure!
          </Typography>

          <TextField
            id="name"
            label="Name"
            fullWidth
            variant="outlined"
            sx={{ mb: 2 }}
            value={values.name}
            onChange={handleChange('name')}
          />
          <TextField
            id="email"
            label="Email"
            fullWidth
            variant="outlined"
            sx={{ mb: 2 }}
            value={values.email}
            onChange={handleChange('email')}
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            fullWidth
            variant="outlined"
            sx={{ mb: 1 }}
            value={values.password}
            onChange={handleChange('password')}
          />
          {values.error && (
            <Typography color="error" sx={{ mt: 1, fontSize: '0.875rem' }}>
              {values.error}
            </Typography>
          )}
        </CardContent>

        <CardActions sx={{ justifyContent: 'center', pb: 4 }}>
          <Button
            variant="contained"
            size="large"
            onClick={clickSubmit}
            sx={{ px: 5, py: 1.5 }}
          >
            Sign Up
          </Button>
        </CardActions>
      </SignupCard>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Account Created</DialogTitle>
        <DialogContent>
          <DialogContentText>Your new account has been created successfully!</DialogContentText>
        </DialogContent>
        <DialogActions sx={{ pr: 3, pb: 2 }}>
          <Link to="/signin" style={{ textDecoration: 'none' }}>
            <Button variant="contained" onClick={handleClose} autoFocus>
              Sign In
            </Button>
          </Link>
        </DialogActions>
      </Dialog>
    </SignupContainer>
  );
}