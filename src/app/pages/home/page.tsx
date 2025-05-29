import * as React from 'react';
import Box from '@mui/material/Box';
import Grid2 from '@mui/material/Unstable_Grid2';
import HomePageKanya from '@/app/components/HomePageKanyaCard';
import HomePageSuvashiniCard from '@/app/components/HomePageSuvashiniCard';
import ImageCarousel from '@/app/components/ImageCarousel';
import EventsCard from '@/app/components/EventsCard';
import EventsListHeader from '@/app/components/EventsListHeader';

export default function HomePage() {
  return (
    <Grid container direction="row" spacing={1}>
      <Grid size={{ xs: 2 }}>
        <Box sx={{
          height: '100%', maxHeight: 700, border: 0, fontSize: 20,
          borderRadius: 1, margin: 1,
          overflow:'hidden', overflowY: "auto", display:'flex', flexDirection:'column'
        }}>
          {/* <Box sx={{width:'100%', backgroundColor:'white'}}>
          <Typography>Upcoming Temple Events List here...</Typography>
          </Box> */}
          <Stack spacing={2}>
            <EventsListHeader />
            <EventsCard title="Navarathri" date="Day 1"/>
            <EventsCard title="Navarathri" date="Day 2"/>
            <EventsCard title="Navarathri" date="Day 3"/>
            <EventsCard title="Navarathri" date="Day 4"/>
            <EventsCard title="Navarathri" date="Day 5"/>
            <EventsCard title="Navarathri" date="Day 6"/>
            <EventsCard title="Navarathri" date="Day 7"/>
          </Stack>
        </Box>
      </Grid>
      <Grid container direction="column" spacing={2} size={{ xs: 7 }}>
        <Grid>
          <Box sx={{
            height: '100%', display: 'flex', width:'100%', minWidth:250, minHeight: 250, 
            border: 0, fontSize: 30, borderRadius: 1, marginTop: 1
          }}>
            {/* <Typography>Hero Card to Highlist Contents here...</Typography> */}
            <ImageCarousel />
          </Box>
        </Grid>
        {/* <Grid>
          <Box sx={{ height: '100%', minHeight: 450, border: '1px solid black', fontSize: 30, borderRadius: 1 }}>
            <Typography>Hero Card to Highlist Contents here...</Typography>
          </Box>
        </Grid> */}
      </Grid>
      <Grid size={{ xs: 3 }}>
        <Box sx={{ height: '100%', fontSize: 30, borderRadius: 1, margin: 1 }}>
          {/* <Typography>Section for Registration and Status Checks</Typography> */}
          <div>
            <HomePageKanya />
          </div>
          <div style={{ marginTop: 10 }}>
            <HomePageSuvashiniCard />
          </div>

        </Box>
      </Grid>
    </Grid>
  );
}