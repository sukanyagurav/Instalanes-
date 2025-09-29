import React from 'react';
import { Box, Card, CardContent, Container, Typography } from '@mui/material';
import Image from 'next/image';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { PlatformData } from './constants/constant';

const PlatformSolutions = () => {
  return (
    <section
      style={{ backgroundColor: '#F5F5F5' }}
      id="solutions"
    >
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
          sx={{ my: 3 }}
        >
          Digital TMS platform solutions
        </Typography>
        <Typography
          variant="h4"
          sx={{ my: 3, fontSize: '1.8em' }}
        >
          Instalanes digitizes your entire transportation process, solving real
          industry challenges
        </Typography>
        <Image
          src="/Instalanes-TMS-Process.svg"
          alt="Platform Solutions"
          width={500}
          height={500}
          style={{ objectFit: 'contain', width: '100%' }}
        />
        <Box
          sx={{
            display: 'grid',
            gap: 3,
            mt: 6,
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },
            pb: 6,
          }}
        >
          {PlatformData.map((platform, index) => (
            <Card
              sx={{ borderRadius: 3 }}
              key={index}
            >
              <Image
                src={platform.imgSrc}
                alt="Platform Solutions"
                width={500}
                height={220}
              />

              <CardContent sx={{ p: 3 }}>
                <Box
                  sx={{
                    display: 'flex',
                    gap: 1,
                    justifyContent: 'space-between',
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ mb: 1 }}
                  >
                    {platform.title}
                  </Typography>
                  <ArrowRightAltIcon />
                </Box>
                <Typography variant="body2">{platform.desc}</Typography>
                <ul>
                  {platform.features?.map((feature, index) => (
                    <li key={index}>
                      <Typography
                        variant="body2"
                        sx={{ fontSize: '12px' }}
                      >
                        {feature}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </section>
  );
};

export default PlatformSolutions;
