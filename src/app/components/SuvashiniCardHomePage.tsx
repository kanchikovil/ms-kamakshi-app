import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Image from 'next/image';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';

export default function KanyaCardHomePage() {
  return (
    <Card sx={{ display: 'flex', alignItems: 'center', p: 2, backgroundColor: '#CFC4C4', borderRadius: 0, width: 350, height: 150 }}>
      <Box sx={{ flex: 1 }}>
        <Stack direction="row" spacing={1}>
          <Typography variant="h5" component="div" sx={{ fontFamily: 'Arima Madurai', fontWeight: 'bold', color: '#4F4500' }}>
            Suvashini
          </Typography>
          <Divider orientation="vertical" flexItem sx={{ height: 25, alignSelf: 'center', borderRightWidth: 3, borderColor: '#4F4500' }} />
          <Typography variant="body2" sx={{ color: '#4F4500' }}>
            Elderly over 40 Years
          </Typography>
        </Stack>
        <CardActions>
          <Button variant="contained" sx={{ backgroundColor: '#642210', color: 'white', mt: 2 }}>
            REGISTER
          </Button>
        </CardActions>
      </Box>
      <Box sx={{ flex: 1, position: 'relative', height: 150 }}>
        <Image src="/images/suvashini-homescreen.png" alt="Kanya Image" layout="fill" objectFit="cover" objectPosition="center 10%" />
      </Box>
    </Card>
  );
}