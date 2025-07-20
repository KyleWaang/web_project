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
import { create } from "./api-news";

// Full-page container
const CreateNewsContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  background: `linear-gradient(120deg, ${theme.palette.primary.light} 0%, ${theme.palette.secondary.light} 100%)`,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(4),
}));

// Styled card
const CreateNewsCard = styled(Card)(({ theme }) => ({
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

export default function CreateNews() {
  const theme = useTheme();
  const [values, setValues] = useState({ title: "", content: "", error: "" });
  const [open, setOpen] = useState(false);

  const handleChange = (name) => (event) => setValues({ ...values, [name]: event.target.value });
  const handleClose = () => setOpen(false);

  const clickSubmit = () => {
    const news = { title: values.title, content: values.content };
    create(news).then((data) => {
      if (data.error) setValues({ ...values, error: data.error });
      else setOpen(true);
    });
  };

  return (
    <CreateNewsContainer>
      <CreateNewsCard>
        <CardContent sx={{ textAlign: 'center', p: 4 }}>
          <Header variant="h5">Create News</Header>
          <Typography variant="body2" sx={{ mb: 3, color: theme.palette.text.secondary }}>
            Create the News
          </Typography>

          <TextField
            id="title"
            label="title"
            fullWidth
            variant="outlined"
            sx={{ mb: 2 }}
            value={values.title}
            onChange={handleChange('title')}
          />
          <TextField
            id="content"
            label="content"
            fullWidth
            variant="outlined"
            sx={{ mb: 1 }}
            value={values.content}
            onChange={handleChange('content')}
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
            Create
          </Button>
        </CardActions>
      </CreateNewsCard>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>News Created</DialogTitle>
        <DialogContent>
          <DialogContentText>Your news has been created successfully!</DialogContentText>
        </DialogContent>
        <DialogActions sx={{ pr: 3, pb: 2 }}>
          <Link to="/news" style={{ textDecoration: 'none' }}>
            <Button variant="contained" onClick={handleClose} autoFocus>
              OK
            </Button>
          </Link>
        </DialogActions>
      </Dialog>
    </CreateNewsContainer>
  );
}