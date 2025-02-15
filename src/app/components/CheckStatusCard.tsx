import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { TextField } from '@mui/material';
import Collapse from '@mui/material/Collapse';


export default function CheckStatusCard() {

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Registered Already ?
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>Check your Status here...</Typography>
        <TextField
          id="outlined-disabled"
          variant='standard'
          label="Aadhar Number"
          placeholder='Aadhar number here...'
          // onChange={(e) => setAadharNumber(e.target.value)}
          required
          fullWidth
          slotProps={{
            htmlInput: { maxLength: 12 },
          }}
        />
        <Typography sx={{ color: 'text.secondary', margin:1}}>Or</Typography>
        <TextField
          id="outlined-disabled"
          variant='standard'
          label="Phone Number"
          placeholder='Phone Number here...'
          // onChange={(e) => setAadharNumber(e.target.value)}
          required
          fullWidth
          slotProps={{
            htmlInput: { maxLength: 12 },
          }}
        />
      </CardContent>
      <CardActions>
          <Button size="small" onClick={handleExpandClick}>Check Status</Button>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography sx={{ marginBottom: 2, fontSize: 25 }}>Registration: Successfull</Typography>
          <Typography sx={{ marginBottom: 2 }}>
           As Email has been sent with the details 
          </Typography>
          <Typography sx={{ marginBottom: 2 }}>
           Please take a Print Out
          </Typography>
          <Typography sx={{ marginBottom: 2 }}>
           Add Proceed as per the Instructions.
          </Typography>
          <Typography>
           Details will be Scanned at the Venue...
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}