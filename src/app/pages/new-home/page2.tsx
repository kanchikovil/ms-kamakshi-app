import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import Link from 'next/link';
import Divider from '@mui/material/Divider';
import { Stack } from '@mui/material';
import Image from 'next/image';
import KanyaCardHomePage from '../../components/KanyaCardHomePage';
import SuvashiniCardHomePage from '../../components/SuvashiniCardHomePage';
import RegistrationStatusCard from '../../components/RegistrationStatusCard';
import RegistrationStatusCardNew from '../../components/RegistrationStatusCardNew';

const Header = () => (
  <AppBar position="fixed" sx={{ width: '100vw', backgroundColor: '#642210', height: '7vh' }}>
    <Toolbar sx={{ pb: 2 }}>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontSize: 24, fontWeight: '900', fontFamily: 'Arima Madurai' }}>
        ManasasmaramiKamakshi
      </Typography>
      <Button color="inherit">Books</Button>
      <Button color="inherit">Articles</Button>
      <Divider orientation="vertical" flexItem sx={{ height: 10, alignSelf: 'center' }} />
      <Link href={'/admin'}>
        <Button color="inherit">Login</Button>
      </Link>
    </Toolbar>
  </AppBar>
);

const Banner = () => (
  <Box sx={{ width: '100%', height: '250px', position: 'relative', mt: 5 }}>
    <Image src="/images/bannerimage.png" alt="Banner Image" layout="fill" objectFit="cover" />
    {/* <Box sx={{ position: 'absolute', top: '120%', left: '85%', transform: 'translate(-50%, -50%)' }}>
      <RegistrationStatusCardNew />
      <Stack direction="row" spacing={1} alignItems="left">
        <Typography variant="body2" color="text.secondary">
          a devine experience
        </Typography>
        <Box sx={{ flex: 1, position: 'relative', height: 75, width: 75 }}>
          <Image src="/images/Bell.png" alt="Kanya Image" layout="fill" objectFit="cover" objectPosition="center" />
        </Box>
      </Stack>
    </Box> */}
  </Box>
);

const Section = () => (
  <Box sx={{ width: '100%', height: '54px', backgroundColor: '#CFC4C4', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', pl: 2, mt: -5 }}>
    <Typography sx={{ fontSize: 24, fontWeight: '900', fontFamily: 'Arima Madurai', color: '#4F4500' }}>
      Navarathri Registration
    </Typography>
  </Box>
);

const Body = () => (
  <Container disableGutters sx={{ my: 1, mx: 1, backgroundColor: '#F6F1F1', pb: 8 }}>
    <Grid container spacing={6} mt={2} ml={4}>
      <Grid  size={4}>
        <KanyaCardHomePage />
      </Grid>
      <Grid  size={4}>
        <SuvashiniCardHomePage />
      </Grid>
      <Grid  size={4}>
        <RegistrationStatusCardNew />
      </Grid>
      <Grid  size={8}>
        <Typography fontFamily={'Arima Madurai'} fontWeight={300} fontSize={17} lineHeight={'20px'} 
        letterSpacing={0} color='#5F5E5E'>
          Lorem ipsum dolor sit amet consectetur. Sed consectetur cursus nullam suspendisse volutpat lacinia odio. Dolor sapien consectetur et eget sagittis mauris pharetra pellentesque. Adipiscing orci dui pulvinar lectus adipiscing. Velit egestas amet suspendisse dolor vitae cursus. Lacus nunc adipiscing sit et ac ac. Mi volutpat in sed at egestas in. Consequat ac feugiat vitae semper sit adipiscing nec nisl quis. Platea interdum felis nunc porta amet cras morbi. Sollicitudin eget non proin fermentum et pretium.
        </Typography>
      </Grid>
      <Grid size={2}>
      <Typography fontFamily={'Arima Madurai'} fontWeight={300} fontSize={'60px'} 
      lineHeight={'60px'} color="#4F4500" letterSpacing={'0%'}>
          a devine experience
        </Typography>
      </Grid>
      <Grid  size={2}>
      <Box sx={{ flex: 1, position: 'relative', height: 75, width: 75 }}>
          <Image src="/images/Bell.png" alt="Kanya Image" layout="fill" objectFit="cover" objectPosition="center" />
        </Box>
      </Grid>
    </Grid>
  </Container>
);

const Footer = () => (
  <Box sx={{ bgcolor: '#CFC4C4', color: 'white', p: 2, ml: -5, position: 'fixed', bottom: 0, width: '100%', height: '5vh' }}>
    <Container maxWidth={true} disableGutters>
      <Typography variant="body1">
        &copy; {new Date().getFullYear()} My Landing Page. All rights reserved.
      </Typography>
    </Container>
  </Box>
);

export default function LandingPage() {
  return (
    <Box sx={{ backgroundColor: '#F6F1F1', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* <Header /> */}
      <Banner />
      <Section />
      <Body />
      {/* <Footer /> */}
    </Box>
  );
}