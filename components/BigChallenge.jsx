import React from 'react';
import { Container, Typography } from '@mui/material';
import Features from './Features';

const BigChallenge = () => {
  return (
    <Container  maxWidth="lg"
      sx={{
        p: 2,
        px: { xs: 2, sm: 3, md: 4 },
      }}>
      <Typography
        variant="h5"
        color="primary"
      >
        Solving the big challenge
      </Typography>
      <Typography
        variant="h4"
        sx={{  my:3, fontSize:'1.8em'}}
       
      >
        Simplifying the complex manual chaos, digitally
      </Typography>
      <Typography
        variant="h5"
         sx={{  my:3, fontSize:'1.8em'}}
      
        fontWeight={'bold'}
      >
        What Supply Chain leaders want .. ?
      </Typography>
      <Typography
        variant="body1"
        sx={{my:3}}
      >
        Efficient and visible supply chain management is the goal of every
        business leader. Having a clear understanding of the supply chain and
        being able to track it in real time is critical for running a successful
        operation and expanding the business.{' '}
      </Typography>
      <Features
        title="The Challenge"
        imgSrc="/feature1.png"
        paragraphs={[
          'However, managing the supply chain and maintaining visibility across all teams, systems, documents, and process handoffs is extremely complex. Organizations are still relying on emails and phone calls to manage and track.',
          'This leads to a complex way of working, additional logistics costs, poor experience, and low operational control.',
        ]}
        classes={{ flexDirection: { xs: 'column-reverse', md: 'row-reverse' } }}
      />
      <Features
        title="The Digital Solution"
        paragraphs={[
          'Currently, there is a need to have an impactful global platform that is easy, smart, and accessible by the masses that keeps everyone on the same page.',
          'Instalanes platform enhances the ability of supply chain leaders and their teams to make transportation logistics a competitive advantage. With the value proposition offered, your teams can deliver real impact on business outcomes',
        ]}
        imgSrc="/feature2.png"
        classes={{ flexDirection: { xs: 'column-reverse', md: 'row' } }}
      />
    </Container>
  );
};

export default BigChallenge;
