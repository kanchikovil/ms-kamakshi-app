import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import { Divider } from '@mui/material';
import Avatar from '@mui/material/Avatar';

export default function KanyaInstructionsCard() {
  return (
    <Box sx={{ height: '100vh', width: '90%', backgroundColor: 'white', marginLeft: 5, marginTop: -2,
      padding:2
     }}>
      <Grid container spacing={2}>
        <Grid size={12}>
          <Typography sx={{ fontFamily: 'Arima Madurai', color: '#75762A', fontWeight:900,fontSize:26,
            lineHeight: '100%', letterSpacing: '0%'
          }}>
            Kroothi Nama Samvatsara Sharadha Navaratri Mahotsavam 2025
          </Typography>
        </Grid>
        <Grid size={12}>
          <Divider />
        </Grid>
        <Grid size={12}>
          <Typography sx={{ fontFamily: 'Arima Madurai', color: '#616060', fontWeight:900,fontSize:20,
            lineHeight: '100%', letterSpacing: '0%'
          }}>
            Kanya who hasn’t started her menstrual cycle should enroll and adhere to the following guidelines
          </Typography>
        </Grid>
        <Grid size={12}>
          <Divider><Avatar sx={{ bgcolor: '#808141', width: 30, height: 30 }} >01</Avatar></Divider>
        </Grid>
        <Grid size={12}>
          <Typography sx={{ fontFamily: 'Arima Madurai', color: '#616060', fontWeight:400,fontSize:16,
            lineHeight: '100%', letterSpacing: '0%'
          }}>
            Only one parent or guardian is permitted to accompany Kanya to the designated location (Sri Kamakshi Kalyana Mandapam, North Mada Street, Big Kanchipuram Tamil Nadu 631 502) by 7.00 am
          </Typography>
        </Grid>
        <Grid size={12}>
          <Divider><Avatar sx={{ bgcolor: '#808141', width: 30, height: 30 }} >02</Avatar></Divider>
        </Grid>
        <Grid size={12}>
          <Typography sx={{ fontFamily: 'Arima Madurai', color: '#616060', fontWeight:400,fontSize:16,
            lineHeight: '100%', letterSpacing: '0%'
          }}>
            Following breakfast, the participant should proceed with the rituals of Vastra Dharanam and Sowmangalya Bhushanams. By 09.30am, a procession will commence towards Ambal Devasthanam (Vasantha Mandapam) The pooja will then take place, lasting for a duration of 90 minutes. After the pooja lunch will be served at the Kalyana Mandapam
          </Typography>
        </Grid>
        <Grid size={12}>
          <Divider />
        </Grid>
        <Grid size={12}>
          <Typography sx={{ fontFamily: 'Arima Madurai', color: '#616060', fontWeight:400,fontSize:16,
            lineHeight: '100%', letterSpacing: '0%'
          }}>
            For further details Contact
          </Typography>
          <Typography sx={{ fontFamily: 'Arima Madurai', color: '#616060', fontWeight:900,fontSize:24,
            lineHeight: '100%', letterSpacing: '0%'
          }}>
            9087127224 9944350007
          </Typography>
        </Grid>
        <Grid size={12}>
          <Divider />
        </Grid>
        <Grid size={12}>
        <Typography variant="body1">
           QR Code Goes here...
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );




}