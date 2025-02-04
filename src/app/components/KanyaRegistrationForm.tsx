'use client'
// src/components/RegistrationForm.tsx
import React, { useState, useEffect } from 'react';
import { createRegistration, editRegistration } from '../services/registrationService';
import { Box, TextField, Typography, Button } from '@mui/material';
import Grid from '@mui/material/Grid2';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

interface KanyaRegistrationFormProps {
  initialData?: { user_name: string, user_phone: string, id?: number };
  onSuccess: () => void;
}

const KanyaRegistrationForm: React.FC<KanyaRegistrationFormProps> = ({ initialData, onSuccess }) => {
  const [userName, setUserName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [userType, setUserType] = React.useState({
    kanya: true,
    suvashini: false
  });

  useEffect(() => {
    if (initialData) {
      setUserName(initialData.user_name);
      setPhoneNumber(initialData.user_phone);
    }
  }, [initialData]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserType({
      kanya:  event.target.checked,
      suvashini: event.target.checked
    });
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
            {
              userType.kanya && (
                <TextField
                  id="outlined-disabled"
                  label="Name of School"
                  value={phoneNumber}
                  placeholder='Your SChool here...'
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              )
            }

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
        {
          userType.kanya && (
            <div>
              <Grid size={4}>
                <div>
                  Dress Size
                  <table>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Grid>
              <Grid size={4}>
                <div>
                  Kolusu Size
                  <table>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Grid>
              <Grid size={4}>
                <div>
                  Bangle Size
                  <table>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Grid>
            </div>
          )
        }
      </Grid>

      {/* <form onSubmit={handleSubmit}> */}



      <Button variant="contained" type="submit">Register</Button>
      {/* <button type="submit">Submit</button> */}
      {/* </form> */}

    </Box>
  );
};

export default KanyaRegistrationForm;
