import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Box from '@mui/material/Box';

const RegistrationStatusCardNew: React.FC = () => {
  return (
    <Card sx={{ maxWidth: 400, mx: 'auto', mt: 0, borderRadius: 0, minWidth: 350, marginTop:-10 }}>
      <CardContent>
      <Typography variant="h5" component="div" gutterBottom fontFamily='Arima Madurai' fontWeight='bold' color='#4F4500'>
          Check your registration status
        </Typography>
        <Stack direction="row" spacing={1} alignItems="left">
        <Box>

        <TextField
          label="Enter Aadhar / Mobile number"
          variant="outlined"
          fullWidth
          sx={{ my: 1 }}
        />
          <Button variant="contained" fullWidth sx={{ backgroundColor: '#642210', color: 'white' }}>
            CHECK STATUS
          </Button>
          </Box>
          <Box>
        <Stack direction="column" alignItems="left" spacing={1} sx={{ mt: 2 }}>
          <CalendarTodayIcon />
          <Typography variant="body2" color="text.secondary">
            Scheduled
          </Typography>
          <Typography variant="body2" color="text.secondary">
            25/03/2025 07.30 PM
          </Typography>
        </Stack>
        </Box>  
        </Stack>
      </CardContent>
      <Divider />
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          Upcoming Events
        </Typography>
        <Box>
          <Typography variant="body2" color="text.secondary">
            10/03/2025 06.30 am <span style={{ color: 'green' }}>Golder Deer Vahanam</span>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            10/03/2025 07.30 pm <span style={{ color: 'green' }}>Silver Vrushabha Vahanam</span>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            10/03/2025 06.30 pm <span style={{ color: 'green' }}>Silver Deer Vahanam</span>
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default RegistrationStatusCardNew;