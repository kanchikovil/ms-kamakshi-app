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
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function AadharValidityCard() {
  return (
    <Card sx={{ minWidth: 100, height: '12vh', display: 'flex', alignItems: 'center', backgroundColor: '#E7E2E2', borderRadius: 0, width: 150, }}>
      <Box sx={{ flex: 1 }}>
        <Stack direction="row" spacing={2}>
          <CheckCircleIcon sx={{ color: 'green' }} />
          <Stack direction="column" spacing={0.5}>
         <Typography variant="body2" component="div" sx={{ fontFamily: 'Arima Madurai', fontWeight: 'normal', color: '#4F4500' }}>
            Aadhar
          </Typography>
          <Typography variant="body2" component="div" sx={{ fontFamily: 'Arima Madurai', fontWeight: 'normal', color: '#4F4500' }}>
           Details
          </Typography>
          <Typography variant="h5" component="div" sx={{ fontFamily: 'Arima Madurai', fontWeight: 'bold', color: '#4F4500' }}>
            Valid
          </Typography>
          </Stack>
        </Stack>
      </Box>
    </Card>
  );




}