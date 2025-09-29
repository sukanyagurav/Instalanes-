import { Box, Card, Typography } from '@mui/material';
import React from 'react';
import { fontSize, margin_sm } from './styles';
import ContainerHolder from './UI/Container';
import { whys } from './constants/constant';


const WhyInstalanes = () => {
  return (
    <section style={{ background: '#f5f5f5' }}>
      <ContainerHolder>
        <Typography
          variant="h5"
          color="primary"
        >
          Why Instalanes platform
        </Typography>
        <Typography
          variant="h4"
         sx={{...margin_sm,...fontSize}}
        >
          Instalanes is a Collaborative TMS platform that helps Business leaders
          generate real business outcomes, they care for!
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
          {whys.map((why, index) => (
            <Card
              sx={{ p: 4, flex: 1, textAlign: 'center', borderRadius: 3 }}
              key={index}
            >
              <Typography variant="h3">{why.quantity}</Typography>
              <Typography
                variant="h6"
                sx={margin_sm}
              >
                {why.title}
              </Typography>
              <Typography variant="body1">{why.desc}</Typography>
            </Card>
          ))}
        </Box>
      </ContainerHolder>
    </section>
  );
};

export default WhyInstalanes;
