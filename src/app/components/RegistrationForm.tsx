'use client'
// src/components/RegistrationForm.tsx
import React, { useState, useEffect } from 'react';
import { createRegistration, editRegistration } from '../services/registrationService';
import { Box, TextField, Typography,Button } from '@mui/material';

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
          required
          id="outlined-required"
          label="Registration Name"
          placeholder='Your Name here...'
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <TextField
          
          id="outlined-disabled"
          label="Phone Number"
          value={phoneNumber}
          placeholder='phoneNumber here...'
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      {/* <h1>Registration Form</h1>
      <div>
        <label>Registration Name</label>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Phone Number</label>
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
      </div> */}
      <Button variant="contained" type="submit">Register</Button>
      {/* <button type="submit">Submit</button> */}
      {/* </form> */}

    </Box>
  );
};

export default RegistrationForm;
