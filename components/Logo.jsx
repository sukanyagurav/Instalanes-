import { Link, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { flexAlignCenter } from './styles';

const Logo = () => {
  return (
    <Link
      href="/"
      aria-label="logo"
      sx={flexAlignCenter}
      underline="none"
    >
      <Image
        src="/logo.jpeg"
        alt="Logo"
        width={30}
        height={30}
      />
      <Typography
        variant="h5"
        color="white"
      >
        Instalanes
      </Typography>
    </Link>
  );
};

export default Logo;
