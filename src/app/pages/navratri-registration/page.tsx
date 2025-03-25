'use client'
// src/components/RegistrationForm.tsx
import React from 'react';
import { Box, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useNotification } from '@/app/context/NotificationContext';
import NavratriRegistrationForm from '@/app/components/NavratriRegistrationForm';
import { RegCardHeader } from '@/app/components/RegistrationCard';

interface RegistrationFormProps {
  // initialData?: { userName: string, userPhone: string, id?: number };
  // onSuccess: () => void;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ /*initialData , onSuccess*/ }) => {

  return (
    <>
      <Grid container direction="row" spacing={1} sx={{
        backgroundColor: '#CFC4C4'
      }}>
        <Grid size={{ xs: 4 }}>
          <Grid container direction="row" spacing={1} sx={{
            backgroundColor: '#F5F3F3',
            marginLeft: "10%"
          }}>
            <Grid size={{ xs: 2 }}>
              <Box display={'flex'} sx={{
                height: '70px',
                width: '70px',
                borderRadius: '100%',
                backgroundImage: "url('../images/kanya-card-home.png')",
                backgroundSize: 'cover'
              }}></Box>
            </Grid>
            <Grid size={{ xs: 6 }}>
              <Grid container direction="column" spacing={1}>
                <Typography fontSize={'16px'} color={'#4F4500'} fontWeight={700} >Navarathri Registration</Typography>
                <RegCardHeader regType='KANYA' />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 8 }}>
          <Grid container direction="row" spacing={1} alignItems="left" justifyContent="left" alignContent="center">
            <Grid size={{ xs: 4 }} sx={{
              paddingTop: "2%",
              marginLeft: "2%"
            }}>
              <Grid container direction="row" spacing={1} justifyContent="center">
                <Grid size={{ xs: 5 }}>
                  <Typography fontSize={'16px'} color={'#3C3C3E'} fontWeight={900} >Validate Aadhar</Typography>
                </Grid>
                <Grid size={{ xs: 5 }}>
                  <TextField
                    type="number"
                    placeholder="Aadhar number"
                    style={{
                      flexGrow: 1,
                      fontWeight: 900,
                      backgroundColor: "#fff",
                      borderRadius: 0,
                      fontSize: '10px',
                      fontFamily: 'Arima Madurai, -apple-system, Helvetica, sans-serif'
                    }}
                    sx={{
                      "& fieldset": { border: 'none' },
                      borderRadius: 0,
                      "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
                        display: "none",
                      },
                      "& input[type=number]": {
                        MozAppearance: "textfield",
                        padding: '8px'
                      },
                    }}
                  />
                </Grid>
                <Grid size={{ xs: 2 }}>
                  <button style={{
                    background: '#693108',
                    color: '#fff',
                    padding: '8px 12px',
                    border: 'none',
                    borderRadius: 0,
                    cursor: "pointer",
                    fontWeight: "bold",
                    fontFamily: 'Arima Madurai, -apple-system, Helvetica, sans-serif'
                  }}>VALIDATE</button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

        </Grid>
      </Grid>
      {/* <Grid container direction="row" spacing={1}>
        <Grid size={{ xs: 2 }}>
          <Box sx={{
            height: '100%', minHeight: 500
          }}>
            <Typography>Instructions for Kanya Registration ...</Typography>
          </Box>
        </Grid>
        <Grid size={{ xs: 7 }}>
          <Box sx={{ height: '100%', fontSize: 30, borderRadius: 1, margin: 1, backgroundColor: '#FFFFFF' }}>
            <NavratriRegistrationForm />
          </Box>
        </Grid>
      </Grid > */}
    </>
  );
};

export default RegistrationForm;
