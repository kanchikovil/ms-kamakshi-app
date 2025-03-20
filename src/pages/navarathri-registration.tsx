'use client'
import { Box, Button, Container, Grid, TextField, Typography, Paper } from '@mui/material';
import { useState } from 'react';
import Image from 'next/image';

const NavarathriRegistration = () => {
  const [mobileNumber, setMobileNumber] = useState('');

  const handleCheckStatus = () => {
    // TODO: Implement status check logic
    console.log('Checking status for:', mobileNumber);
  };

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#f5f5f5', py: 4 }}>
      <Container maxWidth="lg">
        <Typography 
          variant="h3" 
          component="h1" 
          align="center" 
          sx={{ 
            mb: 4, 
            color: '#8B4513',
            fontFamily: 'Arima Madurai',
            fontWeight: 'bold' 
          }}
        >
          Navarathri Registration
        </Typography>

        <Grid container spacing={4}>
          {/* Registration Cards */}
          <Grid item xs={12} md={6}>
            <Paper 
              elevation={3} 
              sx={{ 
                p: 3, 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center',
                backgroundColor: '#FFF8E7',
                borderRadius: 2
              }}
            >
              <Box sx={{ position: 'relative', width: '200px', height: '200px', mb: 2 }}>
                <Image
                  src="/kanya-icon.png"
                  alt="Kanya"
                  layout="fill"
                  objectFit="contain"
                />
              </Box>
              <Typography variant="h5" sx={{ mb: 2, color: '#8B4513' }}>Kanya</Typography>
              <Typography variant="subtitle1" sx={{ mb: 2, color: '#666' }}>
                Child under age 10
              </Typography>
              <Button 
                variant="contained" 
                sx={{ 
                  backgroundColor: '#8B4513',
                  '&:hover': {
                    backgroundColor: '#654321'
                  }
                }}
              >
                REGISTER
              </Button>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper 
              elevation={3} 
              sx={{ 
                p: 3, 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center',
                backgroundColor: '#FFF8E7',
                borderRadius: 2
              }}
            >
              <Box sx={{ position: 'relative', width: '200px', height: '200px', mb: 2 }}>
                <Image
                  src="/suvahini-icon.png"
                  alt="Suvahini"
                  layout="fill"
                  objectFit="contain"
                />
              </Box>
              <Typography variant="h5" sx={{ mb: 2, color: '#8B4513' }}>Suvahini</Typography>
              <Typography variant="subtitle1" sx={{ mb: 2, color: '#666' }}>
                Elderly over 40 Years
              </Typography>
              <Button 
                variant="contained" 
                sx={{ 
                  backgroundColor: '#8B4513',
                  '&:hover': {
                    backgroundColor: '#654321'
                  }
                }}
              >
                REGISTER
              </Button>
            </Paper>
          </Grid>

          {/* Status Check Section */}
          <Grid item xs={12}>
            <Paper 
              elevation={3} 
              sx={{ 
                p: 3, 
                mt: 4, 
                backgroundColor: '#FFF8E7',
                borderRadius: 2
              }}
            >
              <Typography variant="h5" sx={{ mb: 3, color: '#8B4513', textAlign: 'center' }}>
                Check your registration status
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
                <TextField
                  label="Enter Aadhar / Mobile number"
                  variant="outlined"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  sx={{ 
                    backgroundColor: '#fff',
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: '#8B4513',
                      },
                      '&:hover fieldset': {
                        borderColor: '#654321',
                      },
                    },
                  }}
                />
                <Button 
                  variant="contained"
                  onClick={handleCheckStatus}
                  sx={{ 
                    backgroundColor: '#8B4513',
                    '&:hover': {
                      backgroundColor: '#654321'
                    }
                  }}
                >
                  CHECK STATUS
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default NavarathriRegistration;
