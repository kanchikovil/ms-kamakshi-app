import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

export default function RegistrationStatusCard() {
  return (
    <Card sx={{ maxWidth: 400, p: 2, backgroundColor: 'white', borderRadius: 0, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h6" component="div" sx={{ fontFamily: 'Arima Madurai', fontWeight: 'bold', color: '#4F4500' }}>
          Check your registration status
        </Typography>
        <TextField
          fullWidth
          placeholder="Enter Aadhar / Mobile number"
          variant="outlined"
          sx={{ mt: 2, mb: 2 }}
        />
        <Button variant="contained" sx={{ backgroundColor: '#642210', color: 'white', width: '100%' }}>
          CHECK STATUS
        </Button>
        <Divider sx={{ my: 2 }} />
        <Stack direction="row" spacing={2} alignItems="center">
          <CalendarTodayIcon sx={{ color: '#4F4500' }} />
          <Box>
            <Typography variant="body2" sx={{ color: '#4F4500' }}>
              Scheduled
            </Typography>
            <Typography variant="body2" sx={{ color: '#4F4500' }}>
              25/03/2025
            </Typography>
            <Typography variant="body2" sx={{ color: '#4F4500' }}>
              07:30 PM
            </Typography>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}