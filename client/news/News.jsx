import React, { useState, useEffect } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { list } from "./api-news.js";

const NewsContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  background: `linear-gradient(120deg, ${theme.palette.primary.light} 0%, ${theme.palette.secondary.light} 100%)`,
  padding: theme.spacing(4),
}));

const NewsHeader = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.dark,
  fontWeight: 700,
  marginBottom: theme.spacing(2),
}));

const StyledGrid = styled(Grid)(() => ({
  marginTop: '2rem',
}));

const NewsCard = styled(Card)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius * 2,
  boxShadow: theme.shadows[4],
  transition: 'transform 0.3s, box-shadow 0.3s',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[8],
  },
}));

export default function News() {
  const theme = useTheme();

  const [news, setNews] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    list(signal).then((data) => {
      if (data?.error) {
        console.error(data.error);
      } else {
        
        setNews(data.map(item => ({
          ...item,
          date: new Date(item.date * 1000).toLocaleDateString(), // format date
        })));
      }
    });

    return () => abortController.abort();
  }, []);


  return (
    <NewsContainer>
      <Typography variant="h3" align="center" sx={{ fontWeight: 700 }}>
        NEWS
      </Typography>
      <Typography variant="subtitle1" align="center" sx={{ color: theme.palette.text.secondary }}>
        Check out the latest updates
      </Typography>
      <Divider sx={{ my: 3, width: '60%', mx: 'auto', borderColor: theme.palette.divider }} />

      <StyledGrid container spacing={4}>
        {news.map((item, idx) => (
          <Grid item key={idx} xs={12} sm={6} md={4}>
            <NewsCard>
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  {item.title}
                </Typography>
                <Typography variant="caption" display="block" gutterBottom sx={{ color: theme.palette.text.secondary }}>
                  {item.date}
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.6, whiteSpace: 'pre-line' }}>
                  {item.content}
                </Typography>
              </CardContent>
            </NewsCard>
          </Grid>
        ))}
      </StyledGrid>
    </NewsContainer>
  );
}
