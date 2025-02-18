'use client'
// src/components/RegistrationForm.tsx
import React, { useState, useEffect } from 'react';
import { createRegistration, editRegistration } from '@/app/services/registrationService';
import { Box, TextField, Typography, Button } from '@mui/material';
import Grid from '@mui/material/Grid2';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import KanyaRegistrationForm1 from '@/app/components/KanyaRegistrationForm1';
import SuvashiniRegistrationForm from '../suvashini-registration/page';
import { useNotification } from '@/app/context/NotificationContext';
import CheckStatusCard from '@/app/components/CheckStatusCard';

interface RegistrationFormProps {
 // initialData?: { userName: string, userPhone: string, id?: number };
 // onSuccess: () => void;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ /*initialData , onSuccess*/ }) => {
  const [userType, setUserType] = useState(true);
  const [typeLabel, setTypeLabel] = useState('Kanya');

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
        <KanyaRegistrationForm1 
              onSuccess={function (): void {
                showSuccess('Registration Created Successfully')
              } } 
              onError={ function (): void {
                showError('Registration Failed')
              }  } />
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
