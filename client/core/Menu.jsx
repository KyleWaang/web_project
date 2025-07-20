import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from '@mui/icons-material/Info';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import ArticleIcon from '@mui/icons-material/Article';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import Button from "@mui/material/Button";
import auth from "../lib/auth-helper";
import { Link, useNavigate, useLocation } from "react-router-dom";

const isActive = (location, path) =>
  location.pathname === path ? "#ff4081" : "#ffffff";

export default function Menu() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", gap: 2, alignItems: "center" }}>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Link to="/">
            <Button sx={{ color: isActive(location, "/") }}>
              <HomeIcon /> Maple Story
            </Button>
          </Link>

          <Link to="/about">
            <Button sx={{ color: isActive(location, "/about") }}>
              <InfoIcon /> ABOUT
            </Button>
          </Link>

          <Link to="/news">
            <Button sx={{ color: isActive(location, "/news") }}>
              <NewspaperIcon /> NEWS
            </Button>
          </Link>

          <Link to="/jobSkill">
            <Button sx={{ color: isActive(location, "/jobSkill") }}>
              <ArticleIcon /> JOB SKILLS
            </Button>
          </Link>

          <Link to="/contact">
            <Button sx={{ color: isActive(location, "/contact") }}>
              <ContactPageIcon /> CONTACT
            </Button>
          </Link>
        </Typography>

        <Link to="/users">
          <Button sx={{ color: isActive(location, "/users") }}>USERS</Button>
        </Link>

        {!auth.isAuthenticated() && (
          <>
            <Link to="/signup">
              <Button sx={{ color: isActive(location, "/signup") }}>
                Sign up
              </Button>
            </Link>
            <Link to="/signin">
              <Button sx={{ color: isActive(location, "/signin") }}>
                Sign In
              </Button>
            </Link>
          </>
        )}

        {auth.isAuthenticated() && (
          <>
            <Link to={`/user/${auth.isAuthenticated().user._id}`}>
              <Button
                sx={{
                  color: isActive(
                    location,
                    `/user/${auth.isAuthenticated().user._id}`
                  ),
                }}
              >
                My Profile
              </Button>
            </Link>
            <Button
              sx={{ color: "#ffffff" }}
              onClick={() => {
                auth.clearJWT(() => navigate("/"));
              }}
            >
              Sign out
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}


