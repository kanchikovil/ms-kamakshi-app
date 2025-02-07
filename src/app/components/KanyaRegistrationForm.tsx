'use client'
// src/components/RegistrationForm.tsx
import React, { useState, useEffect } from 'react';
import { createRegistration, editRegistration } from '../services/registrationService';
import { Box, TextField, Typography, Button, ToggleButton, ToggleButtonGroup } from '@mui/material';
import Grid from '@mui/material/Grid2';

interface KanyaRegistrationFormProps {
  initialData?: {
    user_name: string, user_phone: string, id?: number, aadharNumber: string,
    horoscope_name: string, age: string, school_name: string, standard: string, slogan_known: string,
    music_known: string, mother_tongue: string, native: string, fathers_name: string, fathers_gothram: string,
    fathers_vedam: string, fathers_profession: string, mothers_name: string, grand_father: string, mothers_vedam: string,
    mothers_profession: string, kula_devatha: string, place: string, residential_address: string, dressSize: number,
    kolusuSize: number, bangleSize: number
  };
  onSuccess: () => void;
}

const KanyaRegistrationForm: React.FC<KanyaRegistrationFormProps> = ({ initialData, onSuccess }) => {
  const [userName, setUserName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [aadharNumber, setAadharNumber] = useState('');
  const [age, setAge] = useState('');
  const [horoscope_name, setHoroscopeName] = useState('');
  const [school_name, setSchoolName] = useState('');
  const [standard, setStandard] = useState('');
  const [slogan_known, setSloganKnown] = useState('');
  const [music_known, setMusicKnown] = useState('');
  const [mother_tongue, setMotherTongue] = useState('');
  const [native, setNative] = useState('');
  const [fathers_name, setFathersName] = useState('');
  const [fathers_gothram, setFathersGothram] = useState('');
  const [fathers_vedam, setFathersVedam] = useState('');
  const [fathers_profession, setFathersProfession] = useState('');
  const [mothers_name, setMothersName] = useState('');
  const [grand_father, setGrandFather] = useState('');
  const [mothers_vedam, setMothersVedam] = useState('');
  const [mothers_profession, setMothersProfession] = useState('');
  const [kula_devatha, setKulaDevatha] = useState('');
  const [place, setPlace] = useState('');
  const [residential_address, setResidentialAddress] = useState('');
  const [kolusuSize, setKolusuSize] = useState(0);
  const [dressSize, setDressSize] = useState(0);
  const [bangleSize, setBangleSize] = useState(0);

  useEffect(() => {
    if (initialData) {
      setUserName(initialData.user_name);
      setPhoneNumber(initialData.user_phone);
      setAadharNumber(initialData.aadharNumber);
      setAge(initialData.age);
      setHoroscopeName(initialData.horoscope_name);
      setSchoolName(initialData.school_name);
      setStandard(initialData.standard);
      setSloganKnown(initialData.slogan_known);
      setMusicKnown(initialData.music_known);
      setMotherTongue(initialData.mother_tongue);
      setNative(initialData.native);
      setFathersName(initialData.fathers_name);
      setFathersGothram(initialData.fathers_gothram);
      setFathersVedam(initialData.fathers_vedam);
      setFathersProfession(initialData.fathers_profession);
      setMothersName(initialData.mothers_name);
      setGrandFather(initialData.grand_father);
      setMothersVedam(initialData.mothers_vedam);
      setMothersProfession(initialData.mothers_profession);
      setKulaDevatha(initialData.kula_devatha);
      setPlace(initialData.place);
      setResidentialAddress(initialData.residential_address);
      setKolusuSize(initialData.kolusuSize);
      setDressSize(initialData.dressSize);
      setBangleSize(initialData.bangleSize);
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
      await createRegistration(userName, phoneNumber, aadharNumber, age, horoscope_name, school_name, standard, slogan_known, music_known,
        mother_tongue, native, fathers_name, fathers_gothram, fathers_vedam, fathers_profession, mothers_name,
        grand_father, mothers_vedam, mothers_profession, kula_devatha, place, residential_address, dressSize, kolusuSize, bangleSize);
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

      <Grid container spacing={2}>
        <Grid size={12}>
          <div>
            <TextField
              id="outlined-disabled"
              label="Aadhar Number"
              value={aadharNumber}
              placeholder='Aadhar number here...'
              onChange={(e) => setAadharNumber(e.target.value)}
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
              value={horoscope_name}
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
              label="Name of School"
              value={school_name}
              placeholder='Your SChool here...'
              onChange={(e) => setSchoolName(e.target.value)}
            />
            <TextField
              id="outlined-disabled"
              label="Std Studying"
              value={standard}
              placeholder='Your Std...'
              onChange={(e) => setStandard(e.target.value)}
            />
            <TextField
              id="outlined-disabled"
              label="Stotram / Slogan"
              value={slogan_known}
              placeholder='Stotram / Slogan known...'
              onChange={(e) => setSloganKnown(e.target.value)}
            />
            <TextField
              id="outlined-disabled"
              label="Classical Music Known"
              value={music_known}
              placeholder='Vocal / Instruments...'
              onChange={(e) => setMusicKnown(e.target.value)}
            />
            <TextField
              id="outlined-disabled"
              label="Mother Toungue"
              value={mother_tongue}
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
              label="Mother's Name"
              value={mothers_name}
              placeholder='Mothers Name..'
              onChange={(e) => setMothersName(e.target.value)}
            />
            <TextField
              id="outlined-disabled"
              label="Maternal Grandfathers Gothram"
              value={grand_father}
              placeholder='Grand Fathers Gothram..'
              onChange={(e) => setGrandFather(e.target.value)}
            />
            <TextField
              id="outlined-disabled"
              label="Mother's Vedam"
              value={mothers_vedam}
              placeholder='Mothers Vedam..'
              onChange={(e) => setMothersVedam(e.target.value)}
            />
            <TextField
              id="outlined-disabled"
              label="Mother's Profession"
              value={mothers_profession}
              placeholder='Mothers Profession..'
              onChange={(e) => setMothersProfession(e.target.value)}
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

      <Button variant="contained" type="submit">Register</Button>

    </Box>
  );
};

export default KanyaRegistrationForm;
