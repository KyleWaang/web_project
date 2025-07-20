import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

// Container with gradient background
const AboutContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  background: `linear-gradient(120deg, ${theme.palette.primary.light} 0%, ${theme.palette.secondary.light} 100%)`,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(4),
}));

// Card wrapper
const ContentCard = styled(Card)(({ theme }) => ({
  maxWidth: 700,
  width: '100%',
  borderRadius: theme.shape.borderRadius * 2,
  boxShadow: theme.shadows[5],
  overflow: 'visible',
}));

// Section header
const SectionTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  color: theme.palette.primary.dark,
  fontWeight: 700,
}));

// Styled list items
const StyledListItem = styled(ListItem)(({ theme }) => ({
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
}));

export default function About() {
  const theme = useTheme();

  return (
    <AboutContainer>
      <ContentCard>
        <CardContent>
          <SectionTitle variant="h4" align="center">
            About MapleStory
          </SectionTitle>
          <Divider sx={{ mb: 3 }} />

          <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6 }}>
            Welcome to MapleStory, the iconic 2D side-scrolling MMORPG that's been delighting players worldwide since 2003. Set in the vibrant world of Maple World, adventurers of all ages band together to explore lush forests, treacherous dungeons, and hidden realms teeming with mystery.
          </Typography>

          <List>
            <StyledListItem>
              <ListItemText
                primary={<Typography variant="h6">Rich Storytelling</Typography>}
                secondary={
                  "Embark on epic quests that delve into the ancient history of the Black Mage, seasonal events, and character-driven story arcs."
                }
              />
            </StyledListItem>
            <Divider component="li" />

            <StyledListItem>
              <ListItemText
                primary={<Typography variant="h6">Diverse Classes & Skills</Typography>}
                secondary={
                  "Choose from 40+ classes—thieves, warriors, mages, engineers—and unlock spectacular abilities through job promotions."
                }
              />
            </StyledListItem>
            <Divider component="li" />

            <StyledListItem>
              <ListItemText
                primary={<Typography variant="h6">Community & Cooperation</Typography>}
                secondary={
                  "Forge friendships in Guilds, party chains for faster leveling, PvP arenas, and coordinated world boss raids."
                }
              />
            </StyledListItem>
            <Divider component="li" />

            <StyledListItem>
              <ListItemText
                primary={<Typography variant="h6">Regular Updates & Events</Typography>}
                secondary={
                  "Monthly patches, seasonal festivals, collaborations, and exclusive cosmetics keep the adventure fresh."
                }
              />
            </StyledListItem>
            <Divider component="li" />

            <StyledListItem>
              <ListItemText
                primary={<Typography variant="h6">Accessible & Free-to-Play</Typography>}
                secondary={
                  "Free to download with optional in-game purchases for personalization. Everyone's welcome to create their legend!"
                }
              />
            </StyledListItem>
          </List>
        </CardContent>
      </ContentCard>
    </AboutContainer>
  );
}
