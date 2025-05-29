'use client';
// src/components/RegistrationForm.tsx
import React, { Suspense } from 'react';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import NavratriRegistrationForm from '@/app/components/NavratriRegistrationForm';
import { NavratriRegistraionHeader } from '@/app/components/NavratriRegistraionHeader';
import { NavratriInstructions } from '@/app/components/NavratriInstructions';

interface RegistrationFormProps {
  // initialData?: { userName: string; userPhone: string; id?: number };
  // onSuccess?: () => void;
}

const RegistrationForm: React.FC<RegistrationFormProps> = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavratriRegistraionHeader regType="kanya" />
      <Grid container spacing={1} sx={{ backgroundColor: '#E8DFDFFF' }}>
        <Grid item xs={4}>
          <NavratriInstructions regType="kanya" />
        </Grid>
        <Grid item xs={8}>
          <Box
            sx={{
              height: '100%',
              fontSize: 30,
              borderRadius: 1,
              margin: 1,
              padding: '2%',
            }}
          >
            <NavratriRegistrationForm />
          </Box>
        </Grid>
      </Grid>
    </Suspense>
  );
};

export default RegistrationForm;
