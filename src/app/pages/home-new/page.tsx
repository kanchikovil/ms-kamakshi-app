import * as React from 'react';
import { Box, Grid2, Typography } from '@mui/material';
import FullWidthMessage from '@/app/components/FullWidthMessage';
import RegistrationCard from '@/app/components/RegistrationCard';


import Banner from '@/app/components/Banner';
import RegistrationStatusCard from '@/app/components/RegistrationStatusCard';

export default function HomePage() {
  return (
    <Grid2 container spacing={0}>
      <Grid2 size={12}>
        <Banner />
      </Grid2>
      <Grid2 size={12}>
        <FullWidthMessage message="Navaratri Registration" />
      </Grid2>
      <Grid2 size={12} spacing={2} padding={'2em'} direction={'row'} display={'flex'}>
        <Grid2 size={4}>
          <RegistrationCard regType='kanya' />
        </Grid2>
        <Grid2 size={4}>
          <RegistrationCard regType='suvahini' />
        </Grid2>
        <Box sx={{
          position: 'absolute',
          right: '3%',
          top: '26%'
        }}>
          <RegistrationStatusCard />
        </Box>
      </Grid2>
      <Grid2 size={8} spacing={2} padding={'0 2em 3em 3em'} direction={'row'} display={'flex'}>
        <Typography fontSize={12}>Lorem ipsum dolor sit amet consectetur. Sed consectetur cursus nullam suspendisse volutpat lacinia odio.
          Dolor sapien consectetur et eget sagittis mauris pharetra pellentesque. Adipiscing orci dui pulvinar lectus adipiscing.
          Velit egestas amet suspendisse dolor vitae cursus. Lacus nunc adipiscing sit et ac ac. Mi volutpat in sed at egestas in.
          Consequat ac feugiat vitae semper sit adipiscing nec nisl quis. Platea interdum felis nunc porta amet cras morbi.
          Sollicitudin eget non proin fermentum et pretium.
        </Typography>
      </Grid2>
    </Grid2>
  );
}