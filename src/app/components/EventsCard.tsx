import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

export default function EventsCard(props: any) {
  return (
    <Card variant="outlined" sx={{ maxWidth: 360, backgroundImage:'/images/ambal-card-image.PNG' }}>
      <Box sx={{ p: 2 }}>
        <Stack
          direction="row"
          sx={{ justifyContent: 'space-between', alignItems: 'center' }}
        >
          <Typography gutterBottom variant="h5" component="div">
          {props.title}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
          {props.date}
          </Typography>
        </Stack>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        Festival that celebrates the goddess Durga for nine days
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <Typography gutterBottom variant="subtitle2" component="div">
          Pooja Slots Available
        </Typography>
        <Stack direction="row" spacing={1}>
          <Chip color="info" label="Kanya : 50" size="small" />
          <Chip label="Suvashini : 45" size="small" />
          {/* <Chip label="Hard" size="small" /> */}
        </Stack>
      </Box>
    </Card>
  );
}