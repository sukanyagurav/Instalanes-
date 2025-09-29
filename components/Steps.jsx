import { Box, Container, Grid, Typography } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import React from 'react';

import { stepper } from './constants/constant';

const Steps = () => {
  return (
    <Box sx={{ backgroundColor: '#dcdcdc', minHeight: '300px', py: 8 }}>
      <Container>
        <Typography
          variant="h5"
          color="primary"
        >
          Instalanes TMS - the all-in-one unified platform for transportation
          logistics
        </Typography>
        <Typography
          variant="h4"
           sx={{ my:3,fontSize:'1.8em'}}
        >
          Simplify and digitize FCL, FTL, PTL, ODC, and warehouse shipments with
          a unified TMS for Shippers, Carriers, 3PLs, and LSPs
        </Typography>
        <Grid
          container
          spacing={{ xs:6, md: 5 }}
          sx={{ my: 4, height: '100%' }}
          xs={6}
          sm={4}
          md={2}
        >
          {stepper.map((step, index) => {
            return (
              <Grid
                item
                key={index}
                size={{ xs: 6, sm: 4, md: 2 }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent:'center',
                    p: 2,
                    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
                    backgroundColor: 'black',
                    borderRadius: 2,
                    color: 'white',
                    textAlign: 'center',
                    position: 'relative',
                    height: '100%',
    
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ color: 'white', my: 1 }}
                    fontWeight={'bold'}
                  >
                    {index + 1}
                  </Typography>
                  <Typography
                    color="white"
                    component="h6"
                    variant="h6"
                  >
                    {step}
                  </Typography>
                  {index !== stepper.length - 1 && (
                    <ArrowRightAltIcon
                      sx={{
                        position: 'absolute',
                        right: '-40px',
                        color: 'black',
                        top: '30%',
                        fontSize: 48,
                        display: { xs: 'none', md: 'block' },
                      }}
                    />
                  )}
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default Steps;
