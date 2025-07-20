import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import mapleStoryImg from "./../assets/images/MapleStory.jpeg";

const Home = () => {
  const theme = useTheme();

  return (
    <>
      <Card
        sx={{
          maxWidth: 600,
          margin: "auto",
          mt: 5,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            px: 2.5,
            pt: 3,
            pb: 2,
            
            color: theme.custom?.openTitle || theme.palette.primary.main,
          }}
        >
          Home Page
        </Typography>
        <CardMedia
          sx={{ minHeight: 300 }}
          image={mapleStoryImg}
          title="Maple Story"
        />
        <CardContent>
          <Typography variant="body2" component="p">
            Welcome to the Maple Story home page.
          </Typography>
        </CardContent>
      </Card>
      <p style={{ position: 'fixed', bottom: 0, right: 0, margin: '1rem' }}>source: <a href="https://maplestory.nexon.net/" style={{ fontSize: '0.8rem' }}>MapleStory Official Site</a></p>
    </>
  );
};

export default Home;
