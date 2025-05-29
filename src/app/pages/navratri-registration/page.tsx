'use client'
// src/components/RegistrationForm.tsx
import React from 'react';
import { Box, TextField, Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import NavratriRegistrationForm from '@/app/components/NavratriRegistrationForm';
import { NavratriRegistraionHeader } from '@/app/components/NavratriRegistraionHeader';
import { NavratriInstructions } from '@/app/components/NavratriInstructions';
import { Suspense } from 'react';

interface RegistrationFormProps {
  // initialData?: { userName: string, userPhone: string, id?: number };
  // onSuccess: () => void;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ /*initialData , onSuccess*/ }) => {
  return (
    <Suspense>
      <NavratriRegistraionHeader regType='kanya' />
      <Grid container direction="row" spacing={1} sx={{
        backgroundColor: '#E8DFDFFF'
      }}>
        <Grid size={{ xs: 4 }}>
          <NavratriInstructions regType='kanya' />
        </Grid>
        <Grid size={{ xs: 8 }}>
          <Box sx={{ height: '100%', fontSize: 30, borderRadius: 1, margin: 1, padding: '2%' }}>
            <NavratriRegistrationForm />
          </Box>
        </Grid>
      </Grid >
    </Suspense>
  );
};

export default RegistrationForm;
