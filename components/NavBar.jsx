'use client';
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  useMediaQuery,
} from '@mui/material';
import React, { useState } from 'react';
import Logo from './Logo';
import ComputerIcon from '@mui/icons-material/Computer';
import ContainerHolder from './UI/Container';
import { flexAlignCenter } from './styles';
import MenuIcon from '@mui/icons-material/Menu';
import { navLinks } from './constants/constant';

const NavBar = () => {
  const isMobile = useMediaQuery('@media (max-width: 900px)');
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <AppBar sx={{ backgroundColor: 'black' }}>
      <ContainerHolder>
        <Toolbar>
          <Logo />

          {isMobile ? (
            <>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={() => setDrawerOpen(true)}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="top"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
              > 
                <List sx={{ width: 220, p: 3 }}>
                  {navLinks.map((link) => (
                    <ListItem
                      button
                      key={link.label}
                      onClick={() => setDrawerOpen(false)}
                    >
                      <ListItemText>
                        <Link
                          href={link.href}
                          underline="none"
                          color="inherit"
                        >
                          {link.label}
                        </Link>
                      </ListItemText>
                    </ListItem>
                  ))}
                </List>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<ComputerIcon />}
                  sx={{
                    borderRadius: 0,

                    py: 0.8,
                    width: '100%',
                  }}
                >
                  Get Demo
                </Button>
              </Drawer>
            </>
          ) : (
            <Box sx={flexAlignCenter}>
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  underline="none"
                  color="inherit"
                  sx={{ fontWeight: 500 }}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                variant="contained"
                color="primary"
                startIcon={<ComputerIcon />}
                sx={{
                  borderRadius: 0,
                  marginLeft: 'auto',
                  py: 0.8,
                 
                }}
              >
                Get Demo
              </Button>
            </Box>
          )}
        
        </Toolbar>
      </ContainerHolder>
    </AppBar>
  );
};

export default NavBar;
