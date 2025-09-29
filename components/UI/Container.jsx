import { Container } from '@mui/material';
import React from 'react';
import { containerStyle } from '../styles';

const ContainerHolder = ({children}) => {
  return (
    <Container
      maxWidth="lg"
      sx={containerStyle}
    >
        {children}
    </Container>
  );
};

export default ContainerHolder;
