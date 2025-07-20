import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

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
  const news = [
    {
      date: 'July 16, 2025',
      title: 'DAVE THE DIVER Community Contest',
      content: `MapleStory X DAVE THE DIVER: Chef's Special Contest

        Contest Duration:

        PDT (UTC -7): Wednesday, July 23, 2025 at 11:00 AM - Thursday, August 21, 2025 at 11:00 AM
        CEST (UTC +2): Wednesday, July 23, 2025 at 8:00 PM - Thursday, August 21, 2025 at  8:00 PM
        AEST (UTC +10): Thursday, July 24, 2025 at 4:00 AM - Friday, August 22, 2025 at 4:00 AM
        Tie up your aprons, y'all! It's time to create your Chef's Special! Hop into Bancho Sushi and cook up any meal that you want for your own Chef's Special menu. Submit a screenshot of your 'Today's Menu' for your chance to earn some saucy rewards.

        How to Enter:

        Participate by posting in one of the 'MapleStory x DAVE THE DIVER: Chef's Special Contest' threads within the official-contests forum on the Official MapleStory Discord and include the following with your entry:
        In-game character name
        World Name
        Screenshot of your 'Todays Menu' UI with your dishes.
        Tell us what your highest-selling dish was! 
        If you are participating within the NA Region, submit your entry through the 'NA MapleStory x DAVE THE DIVER: Chef's Special Contest' thread.
        If you are participating within the EU Region, submit your entry through the 'EU MapleStory x DAVE THE DIVER: Chef's Special Contest' thread.
        Requirements & Rules:

        One entry per account
        Image must be safe for work.
        Entries that do not follow the above rules will be removed from the entry pool.
        Community Managers will be running a random generator to select 10 lucky winners. 

        Event Prizes:

        NA Region:

        10 random winners will receive:
        Physical Rewards: 
        Pink Bean Tumblr Key Chain
        Green Slime Face Band
        Yeti Pop Socket
        MapleStory Fan
        In-Game Rewards:
        Octopus Tank Chair
        3x EXP Coupon (15 min) x5
        Onyx Apple (x10) Coupon
        EU Region:

        10 random winners will receive:
        10k Maple Points
        Octopus Tank Chair
        Toasted Taiyaki Mount
        3x EXP Coupon (15 min) x5
        Onyx Apple (x10) Coupon
        Submissions will close on August 21, 2025 at 11:00 AM PDT!`,
    },
    {
      date: 'July 16, 2025',
      title: 'v.261 Known Issues',
      content: `The Known Issues section focuses on the major issues that have significantly impacted the game and community, and which our team is actively addressing. Please note that while we aim to cover the most impactful issues, this list will not encompass every reported issue. Check back regularly for updates on the status of these issues and information on resolved issues, or any new issues that may have been added.

        Here you’ll find a list of known and resolved issues from the v.261 - MapleStory x DAVE THE DIVER update:

        Known Issues:

        Lynn
        The HEXA enhanced [Focus] Awaken skill has an incorrect cooldown of 120 seconds instead of 60 seconds.
        Common
        After the game update on July 16, 2025, some players were unable to open the Compensation Box that was distributed on June 20, 2025. We are currently investigating this issue and will provide an update at a later time.
        Challenger World - Interactive
        Karma Bright Cubes obtained from the Morning Star Feast are not able to select the "AFTER" Potential stat when used.
        Resolved Issues:

        July 17, 2025
        Resolved an issue where Kanna's HEXA Nightghost Guide passive effect incorrectly increased the damage of all skills instead of only Kishin Shoukan.
        Resolved an issue where Kanna's HEXA enhanced Spirit's Domain skill would only reach Stage 2 instead of Stage 3.
        Resolved an issue where using Althea's Support skill during Ride or Die would sometimes cause players to disconnect from the game.
        Resolved an issue where players attempting to challenge Horntail in Ride or Die would sometimes disconnect from the game.
        Resolved an issue where some players were unable to open the Compensation Box.
        Resolved an issue where Lynn's 5th job skill [Focus] Awaken had an incorrect cooldown of 120 seconds instead of 60 seconds.
        However, if HEXA [Focus] Awaken is unlocked, the cooldown changes back to 120 seconds and this issue will be resolved in a future maintenance.
        Resolved an issue where players with older mounts that require a saddle registered were sometimes unable to enter Ride or Die on Code X difficulty.
        Resolved an issue where purchasing a Premium Hyper Teleport Rock with insufficient mesos would display a blank error message.
        Resolved an issue where Adele's Hunting Decree skill could not be used when fighting Ursus.
        Resolved an issue where the Arcane River Droplet Stone exchange text was not displaying properly in Challenger-Heroic World.`,
    },
    {
      date: 'July 16, 2025',
      title: 'MapleStory x DAVE THE DIVER Event',
      content: `As an unusual storm washes over Maple World, some new friends from a far-off land have washed up, and need your help to get home... all while making a pretty meso from the superb fishing in the Blue Hole!

        Event Duration (Rewards Enabled):

        PDT (UTC -7): Wednesday, July 16, 2025 (End of Maintenance) - Tuesday, August 26, 2025 4:59 PM
        CEST (UTC +2): Wednesday, July 16, 2025 (End of Maintenance) - Wednesday, August 27, 2025 1:59 AM
        AEST (UTC +10): Wednesday, July 16, 2025 (End of Maintenance) - Wednesday, August 27, 2025 9:59 AM
        Note: DAVE THE DIVER rewards must be purchased from the Diver Token Shop prior to Tuesday, August 26 at 11:59 PM UTC, and all coupons and growth items must also be used by that time.

        Event Duration (Free Play):

        PDT (UTC -7): Wednesday, August 27, 2025 (End of Maintenance) - Tuesday, September 23, 2025 4:59 PM
        CEST (UTC +2): Wednesday, August 27, 2025 (End of Maintenance) - Wednesday, September 24, 2025 1:59 AM
        AEST (UTC +10): Wednesday, August 27, 2025 (End of Maintenance) - Wednesday, September 24, 2025 9:59 AM
        Note: While the DAVE THE DIVER event rewards are only available through Tuesday, August 26, 2025 at 11:59 PM UTC, you will still be able to enjoy the story and event games during the following Free Play section.
        `,
    },
  ];

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
