import React from 'react';
import ContainerHolder from './UI/Container';
import { Box, Link, List, ListItemText, Typography } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { margin_sm } from './styles';
import { footerLinks } from './constants/constant';

const Footer = () => {
  return (
    <footer style={{ background: 'black', color: 'white' }}>
      <ContainerHolder>
        <Typography
          variant="h5"
          color="white"
          sx={{ py: 3 }}
        >
          Instalanes
        </Typography>
        <Typography
          variant="body1"
          color="white"
        >
          Instalanes is a Transport management and visibility platform that
          helps businesses improve their supply chain visibility, collaboration,
          growth, and efficiency. The platform helps users to manage and track
          their supply chain, as well as to access performance insights that
          help teams make better decisions
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gap: 3,
            mt: 6,
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            },
          }}
        >
          {footerLinks.map((section) => (
            <Box key={section.title}>
              <Typography
                variant="h6"
                sx={{ mb: 2 }}
              >
                {section.title}
              </Typography>
              <List sx={{ listStyle: 'none', p: 0, m: 0 }}>
                {section.links.map((link) => (
                  <ListItemText key={link} >
                    <Link
                      href="#"
                      underline="none"
                      sx={{
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                      }}
                    >
                      {section.type === 'contact' && <MailOutlineIcon />}
                      {link}
                    </Link>
                  </ListItemText>
                ))}
              </List>
            </Box>
          ))}
        </Box>
        <Box sx={margin_sm} >
          <Typography
            variant="body1"
            sx={{ textAlign: { xs: 'center', sm: 'left' } }}
          >
            Copyright © {new Date().getFullYear()} Instalanes.com. All rights
            reserved.
          </Typography>
         
        </Box>
      </ContainerHolder>
    </footer>
  );
};

export default Footer;
