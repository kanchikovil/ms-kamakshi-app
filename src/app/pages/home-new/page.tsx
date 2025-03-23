import * as React from 'react';
import { Grid2 } from '@mui/material';
import FullWidthMessage from '@/app/components/FullWidthMessage';
import RegistrationCard from '@/app/components/RegistrationCard';
import SuvahiniRegistrationCard from '@/app/components/SuvahiniRegistrationCard';


import Banner from '@/app/components/Banner';

export default function HomePage() {
  return (
    <Grid2 container spacing={0}>
      <Grid2 size={12}>
        <Banner />
      </Grid2>
      <Grid2 size={12}>
        <FullWidthMessage message="Navaratri Registration" />
      </Grid2>
      <Grid2 size={12} spacing={2} padding={2} direction={'row'} display={'flex'}>
        <Grid2 size={4}>
          <RegistrationCard />
        </Grid2>
        <Grid2 size={4}>
          <SuvahiniRegistrationCard />
        </Grid2>
      </Grid2>
    </Grid2>
  );
}