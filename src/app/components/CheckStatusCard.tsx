import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import { getStatusByAadhar } from '../services/registrationService';
import Chip from '@mui/material/Chip';
import { useQRCode } from 'next-qrcode'


export default function CheckStatusCard() {

  const [expanded, setExpanded] = React.useState(false);
  const [aadharNumber, setAadharNumber] = React.useState('');
  // const [phoneNumber, setPhoneNumber] = React.useState('');
  const [registrationDetails, setRegistrationDetails] = React.useState({
    attendeeName: '',
    approvalStatus: ''
  });

  const { Canvas } = useQRCode()

  const handleExpandClick = async () => {
    const res = await getStatusByAadhar(aadharNumber);
    setRegistrationDetails(res.data);
    if (!expanded) {
      setExpanded(!expanded);
    }
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
  onChange={(e) => setAadharNumber(e.target.value)}
  required
  fullWidth
  inputProps={{ maxLength: 12 }}
/>

        <Typography sx={{ color: 'text.secondary', margin: 1 }}>Or</Typography>
        <TextField
  id="outlined-disabled"
  variant='standard'
  label="Aadhar Number"
  placeholder='Aadhar number here...'
  onChange={(e) => setAadharNumber(e.target.value)}
  required
  fullWidth
  inputProps={{ maxLength: 12 }}
/>

      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleExpandClick}>Check Status</Button>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography sx={{ marginBottom: 2, fontSize: 15 }}>Hello <b>{registrationDetails.attendeeName}</b>...!!!</Typography>
          <Typography sx={{ marginBottom: 2, fontSize: 15 }}>Your registration has been &nbsp;</Typography>
          {
            registrationDetails.approvalStatus == 'APPROVED' && <Chip label={registrationDetails.approvalStatus} color='success' size='small' />
          }
          {
            registrationDetails.approvalStatus == 'REJECTED' && <Chip label={registrationDetails.approvalStatus} color='error' size='small' />
          }
          {
            registrationDetails.approvalStatus == 'AWAITING' && <Chip label={registrationDetails.approvalStatus} color='info' size='small' />
          }
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
          {
            registrationDetails.approvalStatus == 'APPROVED' &&
            <Canvas
              text={registrationDetails.approvalStatus + registrationDetails.attendeeName}
              options={{
                type: 'image/jpeg',
                quality: 0.3,
                errorCorrectionLevel: 'M',
                margin: 3,
                scale: 4,
                width: 200,
                color: {
                  dark: '#0F0359',
                  light: '#EEEEFF',
                },
              }}
            />
          }
        </CardContent>
      </Collapse>
    </Card>
  );
}