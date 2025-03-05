import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';

export default function EventsCard2(props: any) {

  return (
    <Card variant="outlined" sx={{ maxWidth: 250, minWidth: 225, minHeight: 100, backgroundImage: '/images/ambal-card-image.PNG' }}>
      <Box sx={{ paddingLeft: 2, paddingTop: 2, paddingBottom: 2 }} >
        <Stack
          direction="row"
          sx={{ justifyContent: 'space-between', alignItems: 'center', paddingRight: 2 }}
        >
          <Typography gutterBottom variant="body1" component="div">
            {props.title}
          </Typography>&nbsp;&nbsp;
          <Typography gutterBottom variant="subtitle2" fontWeight={'bold'} component="div">
            {props.date}
          </Typography>
        </Stack>
        {/* <Divider sx={{borderBlockWidth:0.5, borderColor:'#0F0359'}} variant="middle"/> */}
        <Typography gutterBottom variant="h6" sx={{ color: 'text.secondary' }}>
          {props.eventName}
        </Typography>
        <Typography gutterBottom variant="subtitle2" component="div">
          {props.slotAvailText}
        </Typography>
        <Stack direction="row" spacing={2} paddingBottom={2}>
          <Chip color="info" label={props.kanyaSlot} size="small" />
          <Chip color="info" label={props.suvashiniSlot} size="small" />
        </Stack>
      </Box>
    </Card>
  );
}