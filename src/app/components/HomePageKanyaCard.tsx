import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function HomePageKanyaCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
          Navarathri Registration
        </Typography>
        <Typography variant="h5" component="div">
          Kanya
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>Child under Age 10</Typography>
        <Typography variant="body2">

          <br />
          {'"A Devine Experience"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={'/pages/kanya-registration'}>
          <Button size="small">Click Here to Register</Button>
        </Link>
        <Link href={'/pages/kanya-registration'}>
          <Button size="small">Check Status</Button>
        </Link>
      </CardActions>
    </Card>
  );
}