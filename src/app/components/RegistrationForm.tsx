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
 // initialData?: { user_name: string, user_phone: string, id?: number };
 // onSuccess: () => void;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ /*initialData , onSuccess*/ }) => {
  const [userType, setUserType] = useState(true);
  const [typeLabel, setTypeLabel] = useState('Kanya')

  const handleTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserType(event.target.checked);
    if(userType){setTypeLabel('Suvashini');} else {setTypeLabel('Kanya');}
    console.log(JSON.stringify(typeLabel));
  };

  return (
    <Box
      component="section"
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
    >
      <div>
        <Typography variant="h2" component="h2">Registration Form</Typography>
        <FormGroup>
          <FormControlLabel control={<Switch checked={userType} onChange={handleTypeChange} name="kanya" />} label={typeLabel} />
        </FormGroup>
      </div>

      <Grid container spacing={2}>
        {
          userType && (
            <Grid size={12}>
              <KanyaRegistrationForm onSuccess={function (): void {
                console.log('Function not implemented.');
              } } />
            </Grid>
          )
        }
        {
          !userType && (
            <Grid size={12}>
              <SuvashiniRegistrationForm onSuccess={function (): void {
                throw new Error('Function not implemented.');
              } } />
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
