'use client'
// src/components/RegistrationForm.tsx
import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useNotification } from '@/app/context/NotificationContext';
import CheckStatusCard from '@/app/components/CheckStatusCard';
import NavratriRegistrationForm from '@/app/components/NavratriRegistrationForm';

interface RegistrationFormProps {
 // initialData?: { userName: string, userPhone: string, id?: number };
 // onSuccess: () => void;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ /*initialData , onSuccess*/ }) => {

  const { showSuccess, showError } = useNotification();

  return (
    <Grid container direction="row" spacing={1}>
    <Grid size={{ xs: 2 }}>
      <Box sx={{
        height: '100%', minHeight: 500, border: 0, fontSize: 20,
        borderRadius: 1, margin: 1, backgroundColor:'#FFFFFF'
      }}>
        <Typography>Instructions for Kanya Registration ...</Typography>
      </Box>
    </Grid>
    <Grid size={{ xs: 7 }}>
      <Box sx={{ height: '100%', fontSize: 30, borderRadius: 1, margin: 1, backgroundColor:'#FFFFFF' }}>
        <NavratriRegistrationForm />
      </Box>
    </Grid>
    <Grid size={{ xs: 3 }}>
      <Box sx={{ height: '100%', fontSize: 30, borderRadius: 1, margin: 1, backgroundColor:'#FFFFFF' }}>
        {/* <Typography>Check status here...</Typography> */}
        <CheckStatusCard />
      </Box>
    </Grid>
  </Grid>
  );
};

export default RegistrationForm;
