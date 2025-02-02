'use client'
// src/components/RegistrationForm.tsx
import React, { useState, useEffect } from 'react';
import { createRegistration, editRegistration } from '../services/registrationService';
import { Box, TextField, Typography, Button } from '@mui/material';

interface RegistrationFormProps {
  initialData?: { user_name: string, user_phone: string, id?: number };
  onSuccess: () => void;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ initialData, onSuccess }) => {
  const [userName, setUserName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    if (initialData) {
      setUserName(initialData.user_name);
      setPhoneNumber(initialData.user_phone);
    }
  }, [initialData]);

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
      <div>
        <Typography variant="h2" component="h2">Registration Form</Typography>
      </div>

      {/* <form onSubmit={handleSubmit}> */}
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
          label="Maternal GRandfathers Gothram"
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
        <TextField
          id="outlined-disabled"
          label="Husband's Name"
          value={phoneNumber}
          placeholder='Husbands name...'
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <TextField
          id="outlined-disabled"
          label="Husband's Gothram"
          value={phoneNumber}
          placeholder='Husbands Gothram...'
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <TextField
          id="outlined-disabled"
          label="Husband''s Profession"
          value={phoneNumber}
          placeholder='Husbands profession...'
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <TextField
          id="outlined-disabled"
          label="Husband's vedam"
          value={phoneNumber}
          placeholder='Husbands vedam...'
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>

      <Button variant="contained" type="submit">Register</Button>
      {/* <button type="submit">Submit</button> */}
      {/* </form> */}

    </Box>
  );
};

export default RegistrationForm;
