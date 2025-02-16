'use client'
// src/components/RegistrationForm.tsx
import React, { useState, useEffect } from 'react';
import { createRegistration, editRegistration } from '../services/registrationService';
import { getEventDates } from '../services/settingsService';
import { Box, TextField, Typography, Button, ToggleButton, ToggleButtonGroup } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Registration from '../types/Registration';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

interface KanyaRegistrationFormProps {
  initialData?: {
    userName: string, userPhone: string, id?: number, aadharNumber: string,
    horoscopeName: string, age: number, schoolName: string, standard: string, slogamKnown: string,
    classicalMusic: string, motherTongue: string, nativePlace: string, fathersName: string, fathersGothram: string,
    fathersVedam: string, fathersProfession: string, mothersName: string, maternalGothram: string, mothersVedam: string,
    mothersProfession: string, kulaDevatha: string, place: string, residentialAddress: string, dressSize: number,
    kolusuSize: number, bangleSize: number, referredBy: string, registeredDate: Dayjs, approvalStatus: string
  };
  onSuccess: () => void;
  onError: () => void;
}

const KanyaRegistrationForm1: React.FC<KanyaRegistrationFormProps> = ({ initialData, onSuccess }) => {
  const [userName, setUserName] = useState('sample name');
  const [userPhone, setuserPhone] = useState('000000');
  const [aadharNumber, setAadharNumber] = useState('1312323445345');
  const [age, setAge] = useState(10);
  const [horoscopeName, setHoroscopeName] = useState('Thanusu');
  const [schoolName, setSchoolName] = useState('BVMS');
  const [standard, setStandard] = useState('');
  const [slogamKnown, setslogamKnown] = useState('');
  const [classicalMusic, setclassicalMusic] = useState('');
  const [motherTongue, setMotherTongue] = useState('');
  const [nativePlace, setnativePlace] = useState('');
  const [fathersName, setFathersName] = useState('');
  const [fathersGothram, setFathersGothram] = useState('');
  const [fathersVedam, setFathersVedam] = useState('');
  const [fathersProfession, setFathersProfession] = useState('');
  const [mothersName, setMothersName] = useState('');
  const [maternalGothram, setmaternalGothram] = useState('');
  const [mothersVedam, setMothersVedam] = useState('');
  const [mothersProfession, setMothersProfession] = useState('');
  const [kulaDevatha, setKulaDevatha] = useState('');
  const [place, setPlace] = useState('');
  const [residentialAddress, setResidentialAddress] = useState('');
  const [kolusuSize, setKolusuSize] = useState(0);
  const [dressSize, setDressSize] = useState(0);
  const [bangleSize, setBangleSize] = useState(0);
  const [referredBy, setReferredBy] = useState('');
  const [registeredDate, setRegisteredDate] = useState(dayjs);
  const [approvalStatus, setApprovalStatus] = useState('Pending');
  const [eventStartDate, setEventStartDate] = useState(dayjs);
  const [eventEndDate, setEventEndDate] = useState(dayjs);

  //Error States
  const [aadharNumberError, setAadharNumberError] = useState("");

  useEffect(() => {
    if (initialData) {
      setUserName(initialData.userName);
      setuserPhone(initialData.userPhone);
      setAadharNumber(initialData.aadharNumber);
      setAge(initialData.age);
      setHoroscopeName(initialData.horoscopeName);
      setSchoolName(initialData.schoolName);
      setStandard(initialData.standard);
      setslogamKnown(initialData.slogamKnown);
      setclassicalMusic(initialData.classicalMusic);
      setMotherTongue(initialData.motherTongue);
      setnativePlace(initialData.nativePlace);
      setFathersName(initialData.fathersName);
      setFathersGothram(initialData.fathersGothram);
      setFathersVedam(initialData.fathersVedam);
      setFathersProfession(initialData.fathersProfession);
      setMothersName(initialData.mothersName);
      setmaternalGothram(initialData.maternalGothram);
      setMothersVedam(initialData.mothersVedam);
      setMothersProfession(initialData.mothersProfession);
      setKulaDevatha(initialData.kulaDevatha);
      setPlace(initialData.place);
      setResidentialAddress(initialData.residentialAddress);
      setKolusuSize(initialData.kolusuSize);
      setDressSize(initialData.dressSize);
      setBangleSize(initialData.bangleSize);
      setReferredBy(initialData.referredBy);
      setRegisteredDate(initialData.registeredDate);
      setApprovalStatus(initialData.approvalStatus)
    }
  }, [initialData]);

  useEffect(() => {
    async function fetchEventDates() {
      try {
        const res = await getEventDates();
        setEventStartDate(res.data[0].start_date);
        setEventEndDate(res.data[0].end_date);
      } catch (error) {
        console.error('Error fetching Event Dates:', error);
      } finally {
        // setLoading(false);
      }
    }
    fetchEventDates();
  }, []);

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
      await editRegistration(initialData.id, userName, userPhone);
    } else {
      // Create a new registration
      const registrationObj: Registration = {
        userName,
        userPhone,
        age,
        horoscopeName,
        aadharNumber,
        schoolName,
        standard,
        slogamKnown,
        classicalMusic,
        mothersName,
        maternalGothram,
        mothersVedam,
        dressSize,
        kolusuSize,
        bangleSize,
        motherTongue,
        nativePlace,
        fathersName,
        fathersGothram,
        fathersVedam,
        fathersProfession,
        referredBy,
        mothersProfession,
        kulaDevatha,
        place,
        residentialAddress,
        registeredDate,
        approvalStatus
      };
      await createRegistration(registrationObj);
      onSuccess();
    }
  };

  return (
    <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 0 } }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
      flexGrow={1}
    >
      <Typography>Please Fill this form for Registration</Typography>
      <Grid container spacing={2}>
        {/* Aadhar Details... */}
        <Grid size={12} direction="column" display={'flex'} spacing={2} marginTop={1}>
          <Grid size={4} padding={1}>
            <TextField
              id="outlined-disabled"
              variant='standard'
              label="Aadhar Number"
              value={aadharNumber}
              placeholder='Aadhar number here...'
              onChange={(e) => setAadharNumber(e.target.value)}
              helperText={aadharNumberError}
              error={!!aadharNumberError}
              required
              fullWidth
              slotProps={{
                htmlInput: { maxLength: 12 },
              }}
            />
          </Grid>
          <Grid size={4} padding={1}>
            <Button variant='contained'>Validate</Button>
          </Grid>
          <Grid size={4} padding={1}>
            <TextField
              id="outlined-disabled"
              label="Aadhar Status"
              variant='standard'
              value={'Status from API here...'}
              placeholder='Aadhar Status here...'
              onChange={(e) => setAadharNumber(e.target.value)}
              helperText={aadharNumberError}
              error={!!aadharNumberError}
              required
              disabled
              fullWidth
              slotProps={{
                htmlInput: { maxLength: 12 },
              }}
            />
          </Grid>
          <Grid size={4} padding={1}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker value={registeredDate} onChange={(newValue) => { setRegisteredDate(dayjs(newValue)) }}
                minDate={dayjs(eventStartDate)}
                maxDate={dayjs(eventEndDate)}
              />
            </LocalizationProvider>
          </Grid>
        </Grid>
        {/* Contact Details... */}
        <Grid size={12} direction="row" display={'flex'} spacing={2} marginTop={1}>
          <Grid size={4} padding={1}>
            <TextField
              id="outlined-disabled"
              label="Contact Number"
              variant='standard'
              value={userPhone}
              placeholder='Phone number here...'
              onChange={(e) => setuserPhone(e.target.value)}
              slotProps={{
                htmlInput: { maxLength: 10 },
              }}
              fullWidth
            />
          </Grid>
          <Grid size={4} padding={1}>
            <TextField
              required
              id="outlined-required"
              label="Name of the Girl"
              placeholder='Your Name here...'
              variant='standard'
              value={userName}
              fullWidth
              onChange={(e) => setUserName(e.target.value)}
            />
          </Grid>
          <Grid size={4} padding={1}>
            <TextField
              id="outlined-disabled"
              type='number'
              label="Age"
              value={age}
              variant='standard'
              placeholder='Your Age here...'
              onChange={(e) => setAge(parseInt(e.target.value))}
              fullWidth
            />
          </Grid>
        </Grid>
        {/* Age, School Details... */}
        <Grid size={12} direction="column" display={'flex'} spacing={2} marginTop={1}>
          <Grid size={4} padding={1}>
            <TextField
              id="outlined-disabled"
              label="Name of School"
              value={schoolName}
              variant='standard'
              placeholder='Your SChool here...'
              onChange={(e) => setSchoolName(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid size={4} padding={1}>
            <TextField
              id="outlined-disabled"
              label="Std Studying"
              value={standard}
              variant='standard'
              placeholder='Your Std...'
              onChange={(e) => setStandard(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid size={4} padding={1}>
            <TextField
              id="outlined-disabled"
              label="nativePlace"
              value={nativePlace}
              variant='standard'
              placeholder='nativePlace Of..'
              onChange={(e) => setnativePlace(e.target.value)}
              fullWidth
            />
          </Grid>
        </Grid>
        {/* Horoscope, Slogam,... */}
        <Grid size={12} direction="column" display={'flex'} spacing={2} marginTop={1}>
          <Grid size={4} padding={1}>
            <TextField
              required
              id="outlined-required"
              label="Horoscope Name"
              placeholder='Horoscope Name...'
              variant='standard'
              value={horoscopeName}
              onChange={(e) => setHoroscopeName(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid size={4} padding={1}>
            <TextField
              id="outlined-disabled"
              label="Stotram / Slogan"
              value={slogamKnown}
              variant='standard'
              placeholder='Stotram / Slogan known...'
              onChange={(e) => setslogamKnown(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid size={4} padding={1}>
            <TextField
              id="outlined-disabled"
              label="Classical Music Known"
              value={classicalMusic}
              variant='standard'
              placeholder='Vocal / Instruments...'
              onChange={(e) => setclassicalMusic(e.target.value)}
              fullWidth
            />
          </Grid>
        </Grid>
        {/* Mother Tongue, Father Detaisl..*/}
        <Grid size={12} direction="column" display={'flex'} spacing={2} marginTop={1}>
          <Grid size={4} padding={1}>
            <TextField
              id="outlined-disabled"
              label="Mother Toungue"
              value={motherTongue}
              variant='standard'
              placeholder='Mother Toungue..'
              onChange={(e) => setMotherTongue(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid size={4} padding={1}>
            <TextField
              id="outlined-disabled"
              label="Father's Name"
              value={fathersName}
              variant='standard'
              placeholder='Fathers Name..'
              onChange={(e) => setFathersName(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid size={4} padding={1}>
            <TextField
              id="outlined-disabled"
              label="Maternal Gothram"
              value={maternalGothram}
              variant='standard'
              placeholder='Grand Fathers Gothram..'
              onChange={(e) => setmaternalGothram(e.target.value)}
              fullWidth
            />
          </Grid>
        </Grid>
        {/* Mother Tongue, Father Detaisl..*/}
        <Grid size={12} direction="column" display={'flex'} spacing={2} marginTop={1}>
          <Grid size={4} padding={1}>
            <TextField
              id="outlined-disabled"
              label="Father's Gothram"
              value={fathersGothram}
              variant='standard'
              placeholder='Fathers Gothram..'
              onChange={(e) => setFathersGothram(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid size={4} padding={1}>
            <TextField
              id="outlined-disabled"
              label="Father's Vedam"
              value={fathersVedam}
              variant='standard'
              placeholder='Fathers Vedam..'
              onChange={(e) => setFathersVedam(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid size={4} padding={1}>
            <TextField
              id="outlined-disabled"
              label="Father's Profession"
              value={fathersProfession}
              variant='standard'
              placeholder='Fathers Profession..'
              onChange={(e) => setFathersProfession(e.target.value)}
              fullWidth
            />
          </Grid>
        </Grid>
        {/* Mother DEtails, Gothram..*/}
        <Grid size={12} direction="column" display={'flex'} spacing={2} marginTop={1}>
          <Grid size={4} padding={1}>
            <TextField
              id="outlined-disabled"
              label="Mother's Name"
              value={mothersName}
              variant='standard'
              placeholder='Mothers Name..'
              onChange={(e) => setMothersName(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid size={4} padding={1}>
            <TextField
              id="outlined-disabled"
              label="Mother's Vedam"
              value={mothersVedam}
              variant='standard'
              placeholder='Mothers Vedam..'
              onChange={(e) => setMothersVedam(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid size={4} padding={1}>
            <TextField
              id="outlined-disabled"
              label="Mother's Profession"
              value={mothersProfession}
              variant='standard'
              placeholder='Mothers Profession..'
              onChange={(e) => setMothersProfession(e.target.value)}
              fullWidth
            />
          </Grid>
        </Grid>
        {/* Others..*/}
        <Grid size={12} direction="column" display={'flex'} spacing={2} marginTop={1}>
          <Grid size={4} padding={1}>
            <TextField
              id="outlined-disabled"
              label="Kula Devatha"
              value={kulaDevatha}
              variant='standard'
              placeholder='Kula Devatha..'
              onChange={(e) => setKulaDevatha(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid size={4} padding={1}>
            <TextField
              id="outlined-disabled"
              label="Place"
              value={place}
              variant='standard'
              placeholder='Place..'
              onChange={(e) => setPlace(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid size={4} padding={1}>
            <TextField
              id="outlined-disabled"
              label="Residential Address"
              value={residentialAddress}
              variant='standard'
              placeholder='Address..'
              onChange={(e) => setResidentialAddress(e.target.value)}
              fullWidth
            />
          </Grid>
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

export default KanyaRegistrationForm1;
