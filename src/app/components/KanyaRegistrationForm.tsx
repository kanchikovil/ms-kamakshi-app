'use client'
// src/components/RegistrationForm.tsx
import React, { useState, useEffect } from 'react';
import { createRegistration, editRegistration } from '../services/registrationService';
import { Box, TextField, Typography, Button, ToggleButton, ToggleButtonGroup } from '@mui/material';
import Grid from '@mui/material/Grid2';

interface KanyaRegistrationFormProps {
  initialData?: { user_name: string, user_phone: string, id?: number };
  onSuccess: () => void;
}

const KanyaRegistrationForm: React.FC<KanyaRegistrationFormProps> = ({ initialData, onSuccess }) => {
  const [userName, setUserName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [kolusuSize, setKolusuSize] = useState(0);
  const [dressSize, setDressSize] = useState(0);
  const [bangleSize, setBangleSize] = useState(0);

  useEffect(() => {
    if (initialData) {
      setUserName(initialData.user_name);
      setPhoneNumber(initialData.user_phone);
    }
  }, [initialData]);

  const handleKolusuSize = (
    event: React.MouseEvent<HTMLElement>,
    newkolusuSize: number | 0,
  ) => {
    if (newkolusuSize !== 0) {
      setKolusuSize(newkolusuSize);
    }
  };

  const handleDressSize = (
    event: React.MouseEvent<HTMLElement>,
    newDressSize: number | 0,
  ) => {
    if (newDressSize !== 0) {
      setDressSize(newDressSize);
    }
  };

  const handleBangleSize = (
    event: React.MouseEvent<HTMLElement>,
    newBangleSize: number | 0,
  ) => {
    if (newBangleSize !== 0) {
      setBangleSize(newBangleSize);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (initialData?.id) {
      // Edit an existing registration
      await editRegistration(initialData.id, userName, phoneNumber);
    } else {
      // Create a new registration
      await createRegistration(userName, phoneNumber);
    }
    onSuccess();
  };

  onSuccess();

  return (
    <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      {/* <div>
        <Typography variant="h2" component="h2">Registration Form</Typography>
        <FormGroup>
          <FormControlLabel control={<Switch checked={userType.kanya} onChange={handleChange} name="kanya" />} label="Kanya" />
        </FormGroup>
      </div> */}

      <Grid container spacing={2}>
        <Grid size={12}>
          <div>
            <TextField
              id="outlined-disabled"
              label="Aadhar Number"
              value={phoneNumber}
              placeholder='Aadhar number here...'
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
            <TextField
              id="outlined-disabled"
              label="Contact Number"
              value={phoneNumber}
              placeholder='Phone number here...'
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <TextField
              required
              id="outlined-required"
              label="Name of the Girl"
              placeholder='Your Name here...'
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <TextField
              required
              id="outlined-required"
              label="Horoscope Name"
              placeholder='Horoscope Name...'
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <TextField
              id="outlined-disabled"
              label="Age"
              value={phoneNumber}
              placeholder='Your Age here...'
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <TextField
              id="outlined-disabled"
              label="Name of School"
              value={phoneNumber}
              placeholder='Your SChool here...'
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <TextField
              id="outlined-disabled"
              label="Std Studying"
              value={phoneNumber}
              placeholder='Your Std...'
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <TextField
              id="outlined-disabled"
              label="Stotram / Slogan"
              value={phoneNumber}
              placeholder='Stotram / Slogan known...'
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <TextField
              id="outlined-disabled"
              label="Classical Music Known"
              value={phoneNumber}
              placeholder='Vocal / Instruments...'
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <TextField
              id="outlined-disabled"
              label="Mother Toungue"
              value={phoneNumber}
              placeholder='Mother Toungue..'
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <TextField
              id="outlined-disabled"
              label="Native"
              value={phoneNumber}
              placeholder='Native Of..'
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <TextField
              id="outlined-disabled"
              label="Father's Name"
              value={phoneNumber}
              placeholder='Fathers Name..'
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <TextField
              id="outlined-disabled"
              label="Father's Gothram"
              value={phoneNumber}
              placeholder='Fathers Gothram..'
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <TextField
              id="outlined-disabled"
              label="Father's Vedam"
              value={phoneNumber}
              placeholder='Fathers Vedam..'
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <TextField
              id="outlined-disabled"
              label="Father's Profession"
              value={phoneNumber}
              placeholder='Fathers Profession..'
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <TextField
              id="outlined-disabled"
              label="Mother's Name"
              value={phoneNumber}
              placeholder='Mothers Name..'
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <TextField
              id="outlined-disabled"
              label="Maternal Grandfathers Gothram"
              value={phoneNumber}
              placeholder='Grand Fathers Gothram..'
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <TextField
              id="outlined-disabled"
              label="Mother's Vedam"
              value={phoneNumber}
              placeholder='Mothers Vedam..'
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <TextField
              id="outlined-disabled"
              label="Mother's Profession"
              value={phoneNumber}
              placeholder='Mothers Profession..'
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <TextField
              id="outlined-disabled"
              label="Kula Devatha"
              value={phoneNumber}
              placeholder='Kula Devatha..'
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <TextField
              id="outlined-disabled"
              label="Place"
              value={phoneNumber}
              placeholder='Place..'
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <TextField
              id="outlined-disabled"
              label="Residential Address"
              value={phoneNumber}
              placeholder='Address..'
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
        </Grid>
        <Grid size={4}>
          <Typography variant='h6'>Girls Dress Size in inches</Typography>

          <ToggleButtonGroup
            value={dressSize}
            color="primary"
            exclusive
            onChange={handleDressSize}
            aria-label="text alignment"
          >
            <table>
              <tbody>
                <tr>
                  <td>
                    <ToggleButton value={16} aria-label="left aligned">
                      <Typography variant='caption'>16</Typography>
                    </ToggleButton>
                  </td>
                  <td>
                    <ToggleButton value={18} aria-label="left aligned">
                      <Typography variant='caption'>18</Typography>
                    </ToggleButton>
                  </td>
                  <td>
                    <ToggleButton value={20} aria-label="left aligned">
                      <Typography variant='caption'>20</Typography>
                    </ToggleButton>
                  </td>
                  <td>
                    <ToggleButton value={22} aria-label="left aligned">
                      <Typography variant='caption'>22</Typography>
                    </ToggleButton>
                  </td>
                  <td>
                    <ToggleButton value={24} aria-label="left aligned">
                      <Typography variant='caption'>24</Typography>
                    </ToggleButton>
                  </td>
                  <td>
                    <ToggleButton value={26} aria-label="left aligned">
                      <Typography variant='caption'>26</Typography>
                    </ToggleButton>
                  </td>
                </tr>
                <tr>
                  <td>
                    <ToggleButton value={28} aria-label="left aligned">
                      <Typography variant='caption'>28</Typography>
                    </ToggleButton>
                  </td>
                  <td>
                    <ToggleButton value={30} aria-label="left aligned">
                      <Typography variant='caption'>30</Typography>
                    </ToggleButton>
                  </td>
                  <td>
                    <ToggleButton value={32} aria-label="left aligned">
                      <Typography variant='caption'>32</Typography>
                    </ToggleButton>
                  </td>
                  <td>
                    <ToggleButton value={34} aria-label="left aligned">
                      <Typography variant='caption'>34</Typography>
                    </ToggleButton>
                  </td>
                  <td>
                    <ToggleButton value={36} aria-label="left aligned">
                      <Typography variant='caption'>36</Typography>
                    </ToggleButton>
                  </td>
                  <td>
                    <ToggleButton value={38} aria-label="left aligned">
                      <Typography variant='caption'>38</Typography>
                    </ToggleButton>
                  </td>
                </tr>
              </tbody>
            </table>
          </ToggleButtonGroup>

        </Grid>
        <Grid size={4}>
          <Typography variant='h6'>Leg Chain (Kolusu) Size in inches</Typography>

          <ToggleButtonGroup
            value={kolusuSize}
            color="primary"
            exclusive
            onChange={handleKolusuSize}
            aria-label="text alignment"
          >
            <table>
              <tbody>
                <tr>
                  <td>
                    <ToggleButton value={5.0} aria-label="left aligned">
                      <Typography variant='caption'>5.0</Typography>
                    </ToggleButton>
                  </td>
                  <td>
                    <ToggleButton value={6.0} aria-label="left aligned">
                      <Typography variant='caption'>6.0</Typography>
                    </ToggleButton>
                  </td>
                  <td>
                    <ToggleButton value={7.0} aria-label="left aligned">
                      <Typography variant='caption'>7.0</Typography>
                    </ToggleButton>
                  </td>
                  <td>
                    <ToggleButton value={8.0} aria-label="left aligned">
                      <Typography variant='caption'>8.0</Typography>
                    </ToggleButton>
                  </td>
                  <td>
                    <ToggleButton value={9.0} aria-label="left aligned">
                      <Typography variant='caption'>9.0</Typography>
                    </ToggleButton>
                  </td>
                  <td>
                    <ToggleButton value={10.0} aria-label="left aligned">
                      <Typography variant='caption'>10.0</Typography>
                    </ToggleButton>
                  </td>
                </tr>
                <tr>
                  <td>
                    <ToggleButton value={5.5} aria-label="left aligned">
                      <Typography variant='caption'>5.5</Typography>
                    </ToggleButton>
                  </td>
                  <td>
                    <ToggleButton value={6.5} aria-label="left aligned">
                      <Typography variant='caption'>6.5</Typography>
                    </ToggleButton>
                  </td>
                  <td>
                    <ToggleButton value={7.5} aria-label="left aligned">
                      <Typography variant='caption'>7.5</Typography>
                    </ToggleButton>
                  </td>
                  <td>
                    <ToggleButton value={8.5} aria-label="left aligned">
                      <Typography variant='caption'>8.5</Typography>
                    </ToggleButton>
                  </td>
                  <td>
                    <ToggleButton value={9.5} aria-label="left aligned">
                      <Typography variant='caption'>9.5</Typography>
                    </ToggleButton>
                  </td>
                  <td>
                    <ToggleButton value={10.5} aria-label="left aligned">
                      <Typography variant='caption'>10.5</Typography>
                    </ToggleButton>
                  </td>
                </tr>
              </tbody>
            </table>
          </ToggleButtonGroup>

        </Grid>
        <Grid size={4}>
          <Typography variant='h6'>Bangle Size in inches</Typography>

          <ToggleButtonGroup
            value={bangleSize}
            color="primary"
            exclusive
            onChange={handleBangleSize}
            aria-label="text alignment"
          >
            <table>
              <tbody>
                <tr>
                  <td>
                    <ToggleButton value={1.8} aria-label="left aligned">
                      <Typography variant='caption'>1.8</Typography>
                    </ToggleButton>
                  </td>
                  <td>
                    <ToggleButton value={1.10} aria-label="left aligned">
                      <Typography variant='caption'>1.10</Typography>
                    </ToggleButton>
                  </td>
                  <td>
                    <ToggleButton value={1.12} aria-label="left aligned">
                      <Typography variant='caption'>1.12</Typography>
                    </ToggleButton>
                  </td>
                  <td>
                    <ToggleButton value={2.0} aria-label="left aligned">
                      <Typography variant='caption'>2.0</Typography>
                    </ToggleButton>
                  </td>
                </tr>
                <tr>
                  <td>
                    <ToggleButton value={2.2} aria-label="left aligned">
                      <Typography variant='caption'>2.2</Typography>
                    </ToggleButton>
                  </td>
                  <td>
                    <ToggleButton value={2.4} aria-label="left aligned">
                      <Typography variant='caption'>2.4</Typography>
                    </ToggleButton>
                  </td>
                  <td>
                    <ToggleButton value={2.6} aria-label="left aligned">
                      <Typography variant='caption'>2.6</Typography>
                    </ToggleButton>
                  </td>
                  <td>
                    <ToggleButton value={2.8} aria-label="left aligned">
                      <Typography variant='caption'>2.8</Typography>
                    </ToggleButton>
                  </td>
                </tr>
              </tbody>
            </table>
          </ToggleButtonGroup>

        </Grid>
      </Grid>

      {/* <form onSubmit={handleSubmit}> */}
      <Button variant="contained" type="submit">Register</Button>
      {/* <button type="submit">Submit</button> */}
      {/* </form> */}

    </Box>
  );
};

export default KanyaRegistrationForm;
