import React, { useState, useEffect } from "react";
import { styled, useTheme } from "@mui/material/styles";
import {
  Paper,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Avatar,
  Typography,
  Link,
  Divider,
} from "@mui/material";
import ArrowForward from "@mui/icons-material/ArrowForward";
import { list } from "./api-user.js";
import { Link as RouterLink } from "react-router-dom";

// Styled container for background
const UserContainer = styled("div")(({ theme }) => ({
  minHeight: '100vh',
  background: `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.secondary.light} 100%)`,
  padding: theme.spacing(4),
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
}));

// Styled paper card
const StyledPaper = styled(Paper)(({ theme }) => ({
  width: '100%',
  maxWidth: 600,
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius * 2,
  boxShadow: theme.shadows[4],
}));

// Styled list item hover effect
const StyledListItem = styled(ListItem)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  transition: 'background-color 0.3s',
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

export default function Users() {
  const theme = useTheme();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    list(signal).then((data) => {
      if (data?.error) {
        console.error(data.error);
      } else {
        setUsers(data);
      }
    });

    return () => abortController.abort();
  }, []);

  return (
    <UserContainer>
      <StyledPaper>
        {/* Header */}
        <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 700, color: theme.palette.primary.dark }}>
          All Users
        </Typography>
        <Divider sx={{ mb: 2 }} />

        {/* User list */}
        <List disablePadding>
          {users.map((user, index) => (
            <Link
              component={RouterLink}
              to={`/user/${user._id}`}
              key={user._id}
              underline="none"
              sx={{ color: 'inherit' }}
            >
              <StyledListItem button>
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: theme.palette.primary.main }}>
                    {user.name.charAt(0).toUpperCase()}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography sx={{ fontWeight: 500 }}>
                      {user.name}
                    </Typography>
                  }
                />
                <ListItemSecondaryAction>
                  <IconButton edge="end">
                    <ArrowForward />
                  </IconButton>
                </ListItemSecondaryAction>
              </StyledListItem>
            </Link>
          ))}
        </List>
      </StyledPaper>
    </UserContainer>
  );
}