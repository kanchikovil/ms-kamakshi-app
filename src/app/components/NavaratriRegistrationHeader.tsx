import React from 'react';
import { Box, Button, TextField, Typography, Paper } from '@mui/material';
import KanyaCardWORegister from './KanyaCardWORegister';
import AadharValidityCard from './AadharValidityCard';
import Grid from '@mui/material/Grid2';

const NavaratriRegistrationHeader: React.FC = () => {
  return (
    <Box sx={{backgroundColor: '#CFC4C4', paddingTop: 4, width: '100vw', paddingLeft: -4, paddingRight: 5, marginLeft: -5, display: 'flex',
      alignItems: 'center', justifyContent: 'space-evenly', alignContent: 'center'
     }}>
      <Grid container spacing={4}>
        <Grid size={3}>
          <KanyaCardWORegister />
        </Grid>
        <Grid size={6}>
        <Box sx={{
        display: 'flex', minWidth:'60px', height: '12vh', backgroundColor: '#CFC4C4',
        marginBottom: 0, marginLeft: 0, alignItems: 'center', justifyContent: 'space-evenly', alignContent: 'center'
      }}>
        <Typography variant="h5" component="div" sx={{ fontFamily: 'Arima Madurai', fontWeight: 'bold', color: '#4F4500' }}>
          Validate Aadhar
        </Typography>
        <Typography variant="h5" component="div" sx={{ fontFamily: 'Arima Madurai', fontWeight: 'bold', color: '#4F4500' }}>
          <TextField fullWidth sx={{ backgroundColor: 'white' }} />
        </Typography>
        <Button variant="contained" type="submit" sx={{ backgroundColor: '#642210', color: 'white', borderRadius: 0 }}>Register</Button>
      </Box>
        </Grid>
        <Grid size={3}>
          <AadharValidityCard />
        </Grid>
      </Grid>
    </Box>
  );
};

export default NavaratriRegistrationHeader;
