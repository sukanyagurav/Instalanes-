'use client';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const Features = ({ title, imgSrc, paragraphs, classes }) => {
  return (
    <Box
      sx={{
        my: 4,
        ...classes,
       
        gap: 4, display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: 1,
      }}
    >
      <Box sx={{ width: { xs: '100%', md: '100%' } }}>
        <Image
          src={imgSrc}
          alt={title}
          width={400}
          height={400}
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </Box>

      <Box>
        <Typography
          variant="h4"
          fontWeight="bold"
        >
          {title}
        </Typography>
        {paragraphs.map((para, index) => (
          <Typography
            variant="body1"
            sx={{my:3}}
            key={`feature + ${index}`}
          >
            {para}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default Features;
