import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useTheme, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import mapleStoryImg from "./../assets/images/MapleStory.jpeg";

// Styled container to apply a gradient background
const PageContainer = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  background: `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.secondary.light} 100%)`,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  padding: theme.spacing(4),
}));

// Styled Card with hover effect
const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 600,
  width: "100%",
  margin: theme.spacing(2),
  borderRadius: theme.shape.borderRadius * 2,
  boxShadow: theme.shadows[4],
  transition: "transform 0.3s, box-shadow 0.3s",
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: theme.shadows[8],
  },
}));

// Footer link styled
const FooterLink = styled("a")(({ theme }) => ({
  fontSize: '0.8rem',
  color: theme.palette.text.secondary,
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
}));

const Home = () => {
  const theme = useTheme();

  return (
    <PageContainer>
      <StyledCard>
        <Typography
          variant="h4"
          align="center"
          sx={{
            px: 2.5,
            pt: 3,
            pb: 2,
            color: theme.custom?.openTitle || theme.palette.primary.dark,
            fontWeight: 700,
          }}
        >
          MapleStory
        </Typography>
        <CardMedia
          component="img"
          height="300"
          image={mapleStoryImg}
          title="Maple Story"
          sx={{ objectFit: 'cover' }}
        />
        <CardContent>
          <Typography variant="body1" component="p" sx={{ lineHeight: 1.6 }}>
            Welcome to the MapleStory home page, your gateway to a world of adventure,
            friendship, and epic quests. Dive into vibrant realms, battle fearsome monsters,
            and forge your legend.
          </Typography>
        </CardContent>
      </StyledCard>

      <Box sx={{ position: 'fixed', bottom: 0, right: 0, m: 2 }}>
        <Typography variant="caption" component="div">
          source:&nbsp;
          <FooterLink href="https://maplestory.nexon.net/" target="_blank" rel="noopener">
            MapleStory Official Site
          </FooterLink>
        </Typography>
      </Box>
    </PageContainer>
  );
};

export default Home;
