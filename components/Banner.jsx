import { Box, Button, Typography, Container, Backdrop } from '@mui/material';
import React from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ContainerHolder from './UI/Container';
const Banner = () => {
  return (
    <Box
      sx={{
        mt: 7,
        width: '100%',
        minHeight: '500px',
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        '&:hover .banner-bg': {
          transform: 'scale(1.05)',
        },
      }}
    >
      <Box
        className="banner-bg"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          backgroundImage: `url('./Banner_pc.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          transition: 'transform 0.5s ease',
          willChange: 'transform',
        }}
      />
      <Backdrop
        sx={{
          backgroundColor: 'rgba(0, 0, 0, 0.57)',
          position: 'absolute',
          zIndex: 1,
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
        open
      ></Backdrop>
      <ContainerHolder>
        <Box
          sx={{
            p: 8,
            px: 0,
            color: 'white',
            textAlign: 'left',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            gap: 3,
            position: 'relative',
            zIndex: 2,
          }}
        >
          <Typography
            variant="h5"
            color="primary"
            fontWeight="bold"
          >
            Switch to InstalanesBetter
          </Typography>
          <Typography
            variant="h3"
            component="h3"
          >
            Transport management system
          </Typography>
          <Typography component="p">
            Cloud-based SaaS TMS and visibility platform for 3PLs, Shippers,
            LSPs, Transporters, and Carriers, enabling end-to-end efficient
            transportation logistics operations and collaboration
          </Typography>
          <Button
            variant="contained"
            color="primary"
            endIcon={<ArrowRightAltIcon />}
            sx={{ px: 3, py: 1.5, borderRadius: 0 }}
          >
            Schedule a Demo
          </Button>
        </Box>
      </ContainerHolder>
    </Box>
  );
};

export default Banner;
