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
import Link from 'next/link';
import Avatar from '@mui/material/Avatar';

export default function KanyaCardWORegister() {
  return (
    <Card sx={{ minWidth: 450, height: '12vh', display: 'flex', alignItems: 'center', backgroundColor: '#F5F3F3',
     borderRadius: 0, width: 400, }}>
      <Box sx={{ flex: 1 }}>
      <Typography variant="h5" component="div" sx={{ fontFamily: 'Arima Madurai', fontWeight: 'bold', color: '#4F4500' }}>
            Navaratri Registration
          </Typography>
        <Stack direction="row" spacing={2}>
        <Avatar alt="Remy Sharp" src="/images/kanya-homescreen.png" />
          <Typography variant="h5" component="div" sx={{ fontFamily: 'Arima Madurai', fontWeight: 'bold', color: '#4F4500' }}>
            Kanya
          </Typography>
          <Divider orientation="vertical" flexItem sx={{ height: 25, alignSelf: 'center', borderRightWidth: 3, borderColor: '#4F4500' }} />
          <Stack direction="column" spacing={0.5}>
          <Typography variant="body2" sx={{ color: '#4F4500' }}>
            Child under
          </Typography>
          <Typography variant="body2" sx={{ color: '#4F4500' }}>
            age 10
          </Typography>
          </Stack>
        </Stack>
      </Box>
    </Card>
  );




}