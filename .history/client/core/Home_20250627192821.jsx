import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import unicornbikeImg from "./../assets/images/unicornbikeImg.jpg";

const Home = () => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        maxWidth: 600,
        margin: "auto",
        mt: 5,
      }}
    >
      <Typography
              variant="h2"
              component="h2"
              gutterBottom
              sx={{
                textAlign: "center",
                fontWeight: "bold",
                color: theme.custom?.protectedTitle || theme.palette.secondary.main,
              }}
        sx={{
            px: 10,
            py: 5,
            textAlign: "center",
            fontWeight: "bold",
          pt: 3,
          pb: 2,
          
          color: theme.custom?.openTitle || theme.palette.primary.main,
        }}
      >
        Home Page
      </Typography>
      <CardMedia
        sx={{ minHeight: 400 }}
        image={unicornbikeImg}
        title="Unicorn Bike"
      />
      <CardContent>
        <Typography variant="body2" component="p">
          Welcome to the MERN Skeleton home page.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Home;
