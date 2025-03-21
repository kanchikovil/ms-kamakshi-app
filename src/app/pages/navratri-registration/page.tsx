'use client'
// src/components/RegistrationForm.tsx
import React, { useState, useEffect } from 'react';
import { Box, Grid2, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useNotification } from '@/app/context/NotificationContext';
import NavratriRegistrationForm from '@/app/components/NavratriRegistrationForm';
import NavaratriRegistrationHeader from '@/app/components/NavaratriRegistrationHeader';
import KanyaInstructionsCard from '@/app/components/KanyaInstructionsCard';

interface RegistrationFormProps {
  // initialData?: { userName: string, userPhone: string, id?: number };
  // onSuccess: () => void;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ /*initialData , onSuccess*/ }) => {

  const { showSuccess, showError } = useNotification();

  return (
    <Box sx={{ marginTop: 1 }}>
      <Grid container spacing={2}>
          <Grid size={12}>
            <NavaratriRegistrationHeader />
          </Grid>
          <Grid size={4}>
<KanyaInstructionsCard />
          </Grid>
          <Grid size={8}>
            <NavratriRegistrationForm />
          </Grid>
      </Grid>
    </Box>

  );
};

export default RegistrationForm;
