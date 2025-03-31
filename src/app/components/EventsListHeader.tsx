import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function EventsListHeader() {
  return (
    <Card variant="outlined" sx={{ maxWidth: 360 }}>
      <Box sx={{ p: 1 }}>
        <Stack
          direction="row"
          sx={{ justifyContent: 'space-between', alignItems: 'center' }}
        >
          <Typography gutterBottom variant="h5" component="div">
            Up Coming Events...
          </Typography>
        </Stack>
        {/* <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          List of up coming events below...
        </Typography> */}
      </Box>
      {/* <Divider />
      <Box sx={{ p: 2 }}>
        <Typography gutterBottom variant="body2">
          Select type
        </Typography>
        <Stack direction="row" spacing={1}>
          <Chip color="primary" label="Soft" size="small" />
          <Chip label="Medium" size="small" />
          <Chip label="Hard" size="small" />
        </Stack>
      </Box> */}
    </Card>
  );
}