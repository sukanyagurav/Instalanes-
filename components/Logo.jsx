import { Link, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const Logo = () => {
  return (
    <Link
      href="/"
      aria-label="logo"
      sx={{ display: 'flex', alignItems: 'center', gap: 2, flexGrow: 1 }}
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
