import { Box, Card, Container, Typography } from '@mui/material';
import React from 'react';
import { whys } from './constants/constant';

const WhyInstalanes = () => {
  return (
    <section style={{ background: '#f5f5f5' }}>
      <Container
        maxWidth="lg"
        sx={{
          p: 2,
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Typography
          variant="h5"
          color="primary"
        >
          Why Instalanes platform
        </Typography>
        <Typography
          variant="h4"
          sx={{ my: 3, fontSize: '1.8em' }}
        >
          Instalanes is a Collaborative TMS platform that helps Business leaders
          generate real business outcomes, they care for!
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gap: 3,
            my: 6,
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
                sx={{ my: 3 }}
              >
                {why.title}
              </Typography>
              <Typography variant="body1">{why.desc}</Typography>
            </Card>
          ))}
        </Box>
      </Container>
    </section>
  );
};

export default WhyInstalanes;
