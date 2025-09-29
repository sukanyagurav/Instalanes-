import React from 'react';
import ContainerHolder from './UI/Container';
import { Box, Card, CardContent, Typography } from '@mui/material';
import Image from 'next/image';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { PlatformData } from './constants/constant';
import { fontSize, margin_sm } from './styles';

const PlatformSolutions = () => {
  return (
    <section style={{ backgroundColor: '#F5F5F5' }} id="solutions">
      <ContainerHolder>
        <Typography
          variant="h5"
          color="primary"
          sx={margin_sm}
        >
          Digital TMS platform solutions
        </Typography>
        <Typography
          variant="h4"
          sx={{ ...margin_sm, ...fontSize }}
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
      </ContainerHolder>
    </section>
  );
};

export default PlatformSolutions;
