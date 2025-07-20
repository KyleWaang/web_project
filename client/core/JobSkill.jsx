import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";

// Container with gradient background
const JobContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  background: `linear-gradient(120deg, ${theme.palette.primary.light} 0%, ${theme.palette.secondary.light} 100%)`,
  padding: theme.spacing(4),
}));

// Grid wrapper
const StyledGrid = styled(Grid)(({ theme }) => ({
  maxWidth: 1000,
  margin: 'auto',
}));

// Job card
const JobCard = styled(Card)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius * 2,
  boxShadow: theme.shadows[3],
  transition: 'transform 0.3s, box-shadow 0.3s',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[8],
  },
}));

export default function JobSkill() {
  const theme = useTheme();
  const jobs = [
    { name: 'Warrior', skills: ['Flash Blade', 'Beam Blade', 'Rush'] },
    { name: 'Magician', skills: ['Starry Flow', 'Boom', 'Empowered Ray'] },
    { name: 'Bowman', skills: ['Double Jump', 'Wind Arrow', 'Phoenix'] },
  ];

  return (
    <JobContainer>
      {/* Page Header */}
      <Box sx={{ textAlign: 'center', mb: 3 }}>
        <Typography variant="h3" align="center" sx={{ fontWeight: 700, color: theme.palette.primary.dark }}>
          Classes & Jobs
        </Typography>
        <Typography variant="subtitle1" align="center" sx={{ color: theme.palette.text.secondary }}>
          Each class has its own story to tell
        </Typography>
        <Divider sx={{ my: 3, width: '60%', mx: 'auto', borderColor: theme.palette.divider }} />
      </Box>

      {/* Job Cards Grid */}
      <StyledGrid container spacing={4}>
        {jobs.map((job, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <JobCard>
              <CardContent>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                  {job.name}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
                  {job.skills.map((skill, i) => (
                    <Chip key={i} label={skill} variant="outlined" sx={{ fontWeight: 500 }} />
                  ))}
                </Box>
              </CardContent>
            </JobCard>
          </Grid>
        ))}
      </StyledGrid>
    </JobContainer>
  );
}
