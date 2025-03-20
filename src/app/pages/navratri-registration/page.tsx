'use client'
// src/components/RegistrationForm.tsx
import React, { useState, useEffect } from 'react';
import { Box, Grid2, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useNotification } from '@/app/context/NotificationContext';
import CheckStatusCard from '@/app/components/CheckStatusCard';
import NavratriRegistrationForm from '@/app/components/NavratriRegistrationForm';
import NavaratriRegistrationHeader from '@/app/components/NavaratriRegistrationHeader';

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
            <Box sx={{ height: '100vh', width: '100%', backgroundColor: 'white' }}>
              <Box sx={{ padding: 2 }}>
                <Typography variant="h5" gutterBottom>
                  Kroothi Nama Samvatsara Sharadha Navaratri Mahotsavam 2025
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  Kanya who hasn’t started her menstrual cycle should enroll and adhere to the following guidelines
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 2 }}>
                  <Box sx={{ width: 30, height: 30, backgroundColor: 'olive', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginRight: 1 }}>
                    01
                  </Box>
                  <Typography variant="body1">
                    Only one parent or guardian is permitted to accompany Kanya to the designated location (Sri Kamakshi Kalyana Mandapam, North Mada Street, Big Kanchipuram Tamil Nadu 631 502) by 7.00 am
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 2 }}>
                  <Box sx={{ width: 30, height: 30, backgroundColor: 'olive', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginRight: 1 }}>
                    02
                  </Box>
                  <Typography variant="body1">
                    Following breakfast, the participant should proceed with the rituals of Vastra Dharanam and Sowmangalya Bhushanams. By 09.30am, a procession will commence towards Ambal Devasthanam (Vasantha Mandapam) The pooja will then take place, lasting for a duration of 90 minutes. After the pooja lunch will be served at the Kalyana Mandapam
                  </Typography>
                </Box>
                <Typography variant="body1" sx={{ marginTop: 2 }}>
                  For further details Contact
                </Typography>
                <Typography variant="body1">
                  9087127224 9944350007
                </Typography>
                <Box sx={{ marginTop: 2 }}>
                  <img src="/path/to/qr-code.png" alt="Scan to locate the Mandapam" style={{ width: 100, height: 100 }} />
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid size={8}>
            <NavratriRegistrationForm />
          </Grid>
      </Grid>



    </Box>

  );
};

export default RegistrationForm;
