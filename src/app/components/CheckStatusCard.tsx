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
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [registrationDetails, setRegistrationDetails] = React.useState({
    user_name: '',
    approval_status: ''
  });

  const { Canvas } = useQRCode()

  const handleExpandClick = async () => {
    const temp = await getStatusByAadhar(aadharNumber);
    setRegistrationDetails(temp.data[0]);
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
          slotProps={{
            htmlInput: { maxLength: 12 },
          }}
        />
        <Typography sx={{ color: 'text.secondary', margin: 1 }}>Or</Typography>
        <TextField
          id="outlined-disabled"
          variant='standard'
          label="Phone Number"
          placeholder='Phone Number here...'
          onChange={(e) => setPhoneNumber(e.target.value)}
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
          <Typography sx={{ marginBottom: 2, fontSize: 15 }}>Hello <b>{registrationDetails.user_name}</b>...!!!</Typography>
          <Typography sx={{ marginBottom: 2, fontSize: 15 }}>Your registration has been &nbsp;
            {
              registrationDetails.approval_status == 'APPROVED' && <Chip label={registrationDetails.approval_status} color='success' size='small' />
            }
            {
              registrationDetails.approval_status == 'REJECTED' && <Chip label={registrationDetails.approval_status} color='error' size='small' />
            }
            {
              registrationDetails.approval_status == 'Pending' && <Chip label={registrationDetails.approval_status} color='info' size='small' />
            }
          </Typography>
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
          <Canvas
            text={registrationDetails.approval_status + registrationDetails.user_name}
            options={{
              type: 'image/jpeg',
              quality: 0.3,
              errorCorrectionLevel: 'M',
              margin: 3,
              scale: 4,
              width: 200,
              color: {
                dark: '#FF0000',
                light: '#FFF5F5',
              },
            }}
          />
        </CardContent>
      </Collapse>
    </Card>
  );
}