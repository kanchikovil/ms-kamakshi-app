'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import { Container, Stack, Typography } from '@mui/material';
import EventsCard2 from '@/app/components/EventsCard2';
import HeroCardOverlay from '@/app/components/HeroCardOverlay';
import Carousel from 'react-material-ui-carousel';
import NewsAndUpdateTabs from '@/app/components/NewsAndUpdateTabs';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const cardDetils = [
  {
    image: "/images/Image1.jpg",
    year: 2024
  },
  {
    image: "/images/Image3.jpg",
    year: 2025
  },
  {
    image: "/images/Image5.jpg",
    year: 2026
  }
];

const eventDetails = [
  {
    title: "Starts On",
    date: "April 10th",
    eventName: "Navarathri - Day 1",
    slotAvailText: "Pooja Slots Available",
    kanyaSlot: "Kanya : 75",
    suvashiniSlot: "Suvashini : 25"
  },
  {
    title: "Starts On",
    date: "April 11th",
    eventName: "Navarathri - Day 2",
    slotAvailText: "Slots NOT Available",
    kanyaSlot: "Kanya : 0",
    suvashiniSlot: "Suvashini : 0"
  },
  {
    title: "Starts On",
    date: "April 12th",
    eventName: "Navarathri - Day 3",
    slotAvailText: "Pooja Slots Available",
    kanyaSlot: "Kanya : 15",
    suvashiniSlot: "Suvashini : 35"
  },
  {
    title: "Starts On",
    date: "April 13th",
    eventName: "Navarathri - Day 4",
    slotAvailText: "Pooja Slots Available",
    kanyaSlot: "Kanya : 75",
    suvashiniSlot: "Suvashini : 25"
  },
  {
    title: "Starts On",
    date: "April 14th",
    eventName: "Navarathri - Day 5",
    slotAvailText: "Pooja Slots Available",
    kanyaSlot: "Kanya : 75",
    suvashiniSlot: "Suvashini : 25"
  }
];

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function HomePage() {

  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (

    <Box sx={{ height: '100vh', width: '100vw', paddingTop: 2, justifyContent: 'center', display: 'flex' }}>
      <Stack>
        <Box sx={{ height: '70vh', width: '100vw', paddingTop: 0, display: 'flex', justifyContent: 'center', }}>
          <Box sx={{ bgcolor: '#EEEEFF', height: '65vh', width: '75%', paddingTop: 0, justifyContent: 'center', }} >
            <Box sx={{
              height: '100%', maxHeight: '70%', border: 1, fontSize: 20,
              borderRadius: 5, borderColor: '#E0FED8', justifyContent: 'center',
              // backgroundColor: '#0F0359',
              display: 'flex'
            }}
            >
              <Carousel autoPlay sx={{ height: "350px", width: '80vw' }} animation='fade' duration={900}>
                {
                  cardDetils.map((item, i) => <HeroCardOverlay key={i} image={item.image} year={item.year} />)
                }
              </Carousel>

              {/* <HeroCardOverlay /> */}
            </Box>
            <Box sx={{
              height: '100%', maxHeight: '30%', border: 0, paddingTop: 2,
              display: 'flex',
            }}
            >
              <Stack direction={'row'} spacing={2}>
                {
                  eventDetails.map((event, i) => <EventsCard2 key={i} title={event.title} date={event.date}
                    eventName={event.eventName}
                    slotAvailText={event.slotAvailText}
                    kanyaSlot={event.kanyaSlot}
                    suvashiniSlot={event.suvashiniSlot}
                  />)
                }
              </Stack>
            </Box>
          </Box>
        </Box>
        <Box sx={{ height: '70vh', width: '100vw', paddingTop: 1 }} >
          <NewsAndUpdateTabs />
        </Box>
      </Stack>
    </Box>
  );
}