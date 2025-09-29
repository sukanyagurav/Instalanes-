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

        gap: 4,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 1,
      }}
    >
      <Box
        component="img"
        src={imgSrc}
        sx={{ width: { xs: '100%' }, maxWidth: 400 }}
      ></Box>

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
            sx={{ my: 3 }}
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
