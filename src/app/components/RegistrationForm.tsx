'use client'
// src/components/RegistrationForm.tsx
import React, { useState, useEffect } from 'react';
import { createRegistration, editRegistration } from '../services/registrationService';
import { Box, TextField, Typography, Button } from '@mui/material';
import Grid from '@mui/material/Grid2';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import KanyaRegistrationForm from './KanyaRegistrationForm';
import SuvashiniRegistrationForm from './SuvashiniRegistrationForm';

interface RegistrationFormProps {
  initialData?: { user_name: string, user_phone: string, id?: number };
  onSuccess: () => void;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ initialData, onSuccess }) => {
  const [userName, setUserName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [userType, setUserType] = React.useState(true);
  //   kanya: true,
  //   suvashini: false
  // });

  useEffect(() => {
    if (initialData) {
      setUserName(initialData.user_name);
      setPhoneNumber(initialData.user_phone);
    }
  }, [initialData]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserType(event.target.checked);
    console.log(JSON.stringify(userType));
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
      component="section"
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
    >
      <div>
        <Typography variant="h2" component="h2">Registration Form</Typography>
        <FormGroup>
          <FormControlLabel control={<Switch checked={userType.kanya} onChange={handleChange} name="kanya" />} label="Kanya" />
        </FormGroup>
      </div>

      <Grid container spacing={2}>
        {
          userType && (
            <Grid size={12}>
              <KanyaRegistrationForm />
            </Grid>
          )
        }
        {
          !userType && (
            <Grid size={12}>
              <SuvashiniRegistrationForm />
            </Grid>
          )
        }
      </Grid>

      {/* <form onSubmit={handleSubmit}> */}

      {/* <Button variant="contained" type="submit">Register</Button> */}
      {/* <button type="submit">Submit</button> */}
      {/* </form> */}

    </Box>
  );
};

export default RegistrationForm;
