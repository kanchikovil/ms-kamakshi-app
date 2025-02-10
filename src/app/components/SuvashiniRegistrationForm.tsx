'use client'
// src/components/RegistrationForm.tsx
import React, { useState, useEffect } from 'react';
import { createRegistration, editRegistration } from '../services/registrationService';
import { Box, TextField, Typography, Button } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { School } from '@mui/icons-material';

interface SuvashiniRegistrationFormProps {
  initialData?: {
    userName: string, userPhone: string, id?: number, contactnumber: string, aadharNumber: string,
    horoscopeName: string, age: string, motherTongue: string, native: string, fathers_name: string, fathers_gothram: string,
    fathers_vedam: string, fathers_profession: string, husbands_name: string, husbands_gothram: string, husbnds_profession: string,
    husbands_vedam: string, kula_devatha: string, place: string, residential_address: string
  };
  onSuccess: () => void;
  onError: () => void;
}

const SuvashiniRegistrationForm: React.FC<SuvashiniRegistrationFormProps> = ({ initialData, onSuccess }) => {
  const [userName, setUserName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [aadharNumber, setAadharNumber] = useState('');
  const [contactnumber, setcontactnumber] = useState('');
  const [age, setAge] = useState('');
  const [horoscopeName, setHoroscopeName] = useState('');
  const [motherTongue, setMotherTongue] = useState('');
  const [native, setNative] = useState('');
  const [fathers_name, setFathersName] = useState('');
  const [fathers_gothram, setFathersGothram] = useState('');
  const [fathers_vedam, setFathersVedam] = useState('');
  const [fathers_profession, setFathersProfession] = useState('');
  const [kula_devatha, setKulaDevatha] = useState('');
  const [place, setPlace] = useState('');
  const [residential_address, setResidentialAddress] = useState('');
  const [husbands_name, setHusbandsName] = useState('');
  const [husbands_gothram, setHusbandsGothram] = useState('');
  const [husbands_profession, setHusbandsProfession] = useState('');
  const [husbands_vedam, setHusbandsVedam] = useState('');

  useEffect(() => {
    if (initialData) {
      setUserName(initialData.userName);
      setPhoneNumber(initialData.userPhone);
      setAadharNumber(initialData.aadharNumber);
      setcontactnumber(initialData.contactnumber);
      setAge(initialData.age);
      setHoroscopeName(initialData.horoscopeName);
      setMotherTongue(initialData.motherTongue);
      setNative(initialData.native);
      setFathersName(initialData.fathers_name);
      setFathersGothram(initialData.fathers_gothram);
      setFathersVedam(initialData.fathers_vedam);
      setFathersProfession(initialData.fathers_profession);
      setHusbandsName(initialData.husbands_name);
      setHusbandsVedam(initialData.husbands_vedam);
      setHusbandsGothram(initialData.husbands_gothram);
      setHusbandsProfession(initialData.husbnds_profession);
      setKulaDevatha(initialData.kula_devatha);
      setPlace(initialData.place);
      setResidentialAddress(initialData.residential_address);
    }
  }, [initialData]);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (initialData?.id) {
      // Edit an existing registration
      await editRegistration(initialData.id, userName, phoneNumber);
    } else {
      // Create a new registration
      // await createRegistration(userName, phoneNumber, horoscopeName, age, aadharNumber, "", "", "",
      //   "", "", "", "", 0, 0, 0, motherTongue,
      //   native, fathers_name, fathers_gothram, fathers_vedam, fathers_profession, "", "",
      //   kula_devatha, place, "");
      // onSuccess();
    }
  };

  return (
    <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >

      <Grid container spacing={2}>
        <Grid size={12}>
          <div>
            <TextField
              id="outlined-disabled"
              label="Aadhar Number"
              value={aadharNumber}
              placeholder='Aadhar number here...'
              onChange={(e) => setAadharNumber(e.target.value)}
            />
            <TextField
              id="outlined-disabled"
              label="Contact Number"
              value={contactnumber}
              placeholder='Phone number here...'
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <TextField
              required
              id="outlined-required"
              label="Name"
              placeholder='Your Name here...'
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <TextField
              required
              id="outlined-required"
              label="Horoscope Name"
              placeholder='Horoscope Name...'
              value={horoscopeName}
              onChange={(e) => setHoroscopeName(e.target.value)}
            />
            <TextField
              id="outlined-disabled"
              label="Age"
              value={age}
              placeholder='Your Age here...'
              onChange={(e) => setAge(e.target.value)}
            />
            <TextField
              id="outlined-disabled"
              label="Mother Toungue"
              value={motherTongue}
              placeholder='Mother Toungue..'
              onChange={(e) => setMotherTongue(e.target.value)}
            />
            <TextField
              id="outlined-disabled"
              label="Native"
              value={native}
              placeholder='Native Of..'
              onChange={(e) => setNative(e.target.value)}
            />
            <TextField
              id="outlined-disabled"
              label="Father's Name"
              value={fathers_name}
              placeholder='Fathers Name..'
              onChange={(e) => setFathersName(e.target.value)}
            />
            <TextField
              id="outlined-disabled"
              label="Father's Gothram"
              value={fathers_gothram}
              placeholder='Fathers Gothram..'
              onChange={(e) => setFathersGothram(e.target.value)}
            />
            <TextField
              id="outlined-disabled"
              label="Father's Vedam"
              value={fathers_vedam}
              placeholder='Fathers Vedam..'
              onChange={(e) => setFathersVedam(e.target.value)}
            />
            <TextField
              id="outlined-disabled"
              label="Father's Profession"
              value={fathers_profession}
              placeholder='Fathers Profession..'
              onChange={(e) => setFathersProfession(e.target.value)}
            />
            <TextField
              id="outlined-disabled"
              label="Husband's Name"
              value={husbands_name}
              placeholder='Husbands name...'
              onChange={(e) => setHusbandsName(e.target.value)}
            />
            <TextField
              id="outlined-disabled"
              label="Husband's Gothram"
              value={husbands_gothram}
              placeholder='Husbands Gothram...'
              onChange={(e) => setHusbandsGothram(e.target.value)}
            />
            <TextField
              id="outlined-disabled"
              label="Husband''s Profession"
              value={husbands_profession}
              placeholder='Husbands profession...'
              onChange={(e) => setHusbandsProfession(e.target.value)}
            />
            <TextField
              id="outlined-disabled"
              label="Husband's vedam"
              value={husbands_vedam}
              placeholder='Husbands vedam...'
              onChange={(e) => setHusbandsVedam(e.target.value)}
            />
            <TextField
              id="outlined-disabled"
              label="Kula Devatha"
              value={kula_devatha}
              placeholder='Kula Devatha..'
              onChange={(e) => setKulaDevatha(e.target.value)}
            />
            <TextField
              id="outlined-disabled"
              label="Place"
              value={place}
              placeholder='Place..'
              onChange={(e) => setPlace(e.target.value)}
            />
            <TextField
              id="outlined-disabled"
              label="Residential Address"
              value={residential_address}
              placeholder='Address..'
              onChange={(e) => setResidentialAddress(e.target.value)}
            />
          </div>
        </Grid>
      </Grid>

      <Button variant="contained" type="submit">Register</Button>

    </Box>
  );
};

export default SuvashiniRegistrationForm
