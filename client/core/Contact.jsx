import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";

import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

// Container with gradient background
const ContactContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  background: `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.secondary.light} 100%)`,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(4),
}));

// Content card
const ContactCard = styled(Card)(({ theme }) => ({
  maxWidth: 800,
  width: '100%',
  borderRadius: theme.shape.borderRadius * 2,
  boxShadow: theme.shadows[5],
}));

// Section heading
const SectionHeading = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(1),
  color: theme.palette.primary.dark,
  fontWeight: 600,
}));

export default function Contact() {
  const theme = useTheme();

  return (
    <ContactContainer>
      <ContactCard>
        <CardContent>
          <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 700 }}>
            Contact Us
          </Typography>

          <Typography variant="body1" align="center" sx={{ mb: 2, lineHeight: 1.6 }}>
            We're here to help you make the most of your MapleStory journey. Reach out through any channel below.
          </Typography>

          <Divider sx={{ mb: 2 }} />

          <SectionHeading variant="h6">
            <SupportAgentIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
            Customer Support Portal
          </SectionHeading>
          <Typography variant="body2" sx={{ mb: 1 }}>
            Help Center for FAQs, live chat, and ticket submissions:
          </Typography>
          <Link href="https://playersupport.nexon.com/hc/en-us" target="_blank" rel="noopener" underline="hover">
            https://playersupport.nexon.com/hc/en-us
          </Link>

          <SectionHeading variant="h6">
            <ListItemIcon sx={{ minWidth: 0, mr: 1 }}>
              <FacebookIcon />
            </ListItemIcon>
            Official Social Media
          </SectionHeading>
          <List>
            <ListItem>
              <ListItemIcon sx={{ minWidth: 0, mr: 2 }}>
                <FacebookIcon />
              </ListItemIcon>
              <ListItemText primary={
                <Link href="https://www.facebook.com/maplestory" target="_blank" rel="noopener" underline="hover">
                  Facebook
                </Link>
              } />
            </ListItem>
            <ListItem>
              <ListItemIcon sx={{ minWidth: 0, mr: 2 }}>
                <TwitterIcon />
              </ListItemIcon>
              <ListItemText primary={
                <Link href="https://twitter.com/maplestory" target="_blank" rel="noopener" underline="hover">
                  Twitter
                </Link>
              } />
            </ListItem>
            <ListItem>
              <ListItemIcon sx={{ minWidth: 0, mr: 2 }}>
                <InstagramIcon />
              </ListItemIcon>
              <ListItemText primary={
                <Link href="https://www.instagram.com/maplestory/" target="_blank" rel="noopener" underline="hover">
                  Instagram
                </Link>
              } />
            </ListItem>
          </List>

          <SectionHeading variant="h6">
            <EmailIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
            Email
          </SectionHeading>
          <Typography variant="body2" sx={{ mb: 1 }}>
            For business inquiries or press:
          </Typography>
          <Link href="mailto:msu_contact@nexon.co.kr" underline="hover">
            msu_contact@nexon.co.kr
          </Link>

          <Typography variant="body2" align="center" sx={{ mt: 4, lineHeight: 1.6 }}>
            Thank you for being part of the MapleStory community—see you in Maple World!
          </Typography>
        </CardContent>
      </ContactCard>
    </ContactContainer>
  );
}
