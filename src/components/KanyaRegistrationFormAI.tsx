import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Grid,
  Paper,
  ToggleButton,
  ToggleButtonGroup,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

interface KanyaRegistrationFormAIProps {
  onSubmit: (formData: any) => void;
}

const KanyaRegistrationFormAI: React.FC<KanyaRegistrationFormAIProps> = ({ onSubmit }) => {
  const [aadharNumber, setAadharNumber] = useState('');
  const [isAadharValid, setIsAadharValid] = useState(false);
  const [formData, setFormData] = useState({
    date: null,
    contactNumber: '',
    nameOfGirl: '',
    age: '',
    stdStudying: '',
    nativePlace: '',
    horoscopeName: '',
    stotramSlogan: '',
    classicalMusicKnown: '',
    motherTongue: '',
    fathersName: '',
    maternalGothram: '',
    fathersGothram: '',
    fathersVedam: '',
    fathersProfession: '',
    mothersGothram: '',
    mothersVedam: '',
    mothersProfession: '',
    kulaDevatha: '',
    place: '',
    residentialAddress: '',
  });

  const [dressSize, setDressSize] = useState('');
  const [legChainSize, setLegChainSize] = useState('');
  const [bangleSize, setBangleSize] = useState('');

  const dressSizes = ['16', '18', '20', '22', '24', '26', '28', '30', '32', '34', '36', '38'];
  const legChainSizes = ['5.0', '6.0', '7.0', '8.0', '9.0', '10.0', '5.5', '6.5', '7.5', '8.5', '9.5', '10.5'];
  const bangleSizes = ['1.8', '1.10', '1.12', '2.0', '2.2', '2.4', '2.6', '2.8'];

  const handleAadharValidation = () => {
    // Add proper Aadhar validation logic here
    setIsAadharValid(aadharNumber.length === 12);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit({
      ...formData,
      dressSize,
      legChainSize,
      bangleSize,
      aadharNumber,
    });
  };

  const handleInputChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [field]: event.target.value,
    });
  };

  return (
    <Container maxWidth="lg">
      <Paper elevation={3} sx={{ p: 4, mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom color="primary">
          Navarathri Registration - Kanya
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Kroothi Nama Samvatsara Sharadha Navaratri Mahotsavam 2025
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
          {/* Aadhar Validation Section */}
          <Box sx={{ mb: 4, display: 'flex', alignItems: 'center', gap: 2 }}>
            <TextField
              label="Validate Aadhar"
              value={aadharNumber}
              onChange={(e) => setAadharNumber(e.target.value)}
              fullWidth
            />
            <Button variant="contained" onClick={handleAadharValidation}>
              VALIDATE
            </Button>
            {isAadharValid && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <CheckCircleIcon color="success" />
                <Typography color="success.main">Valid</Typography>
              </Box>
            )}
          </Box>

          <Grid container spacing={3}>
            {/* Basic Information */}
            <Grid item xs={12} md={4}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Date"
                  onChange={(newValue) => setFormData({ ...formData, date: newValue })}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                label="Contact Number"
                value={formData.contactNumber}
                onChange={handleInputChange('contactNumber')}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                label="Name of the Girl"
                required
                value={formData.nameOfGirl}
                onChange={handleInputChange('nameOfGirl')}
              />
            </Grid>

            {/* Personal Details */}
            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                label="Age"
                value={formData.age}
                onChange={handleInputChange('age')}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                label="Std Studying"
                value={formData.stdStudying}
                onChange={handleInputChange('stdStudying')}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                label="Native Place"
                value={formData.nativePlace}
                onChange={handleInputChange('nativePlace')}
              />
            </Grid>

            {/* Size Selection Section */}
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Measurements
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <FormControl fullWidth>
                <InputLabel>Girl Dress Size (inches)</InputLabel>
                <Select
                  value={dressSize}
                  onChange={(e) => setDressSize(e.target.value)}
                  label="Girl Dress Size (inches)"
                >
                  {dressSizes.map((size) => (
                    <MenuItem key={size} value={size}>{size}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={4}>
              <FormControl fullWidth>
                <InputLabel>Leg Chain (Kolusu) Size (inches)</InputLabel>
                <Select
                  value={legChainSize}
                  onChange={(e) => setLegChainSize(e.target.value)}
                  label="Leg Chain (Kolusu) Size (inches)"
                >
                  {legChainSizes.map((size) => (
                    <MenuItem key={size} value={size}>{size}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={4}>
              <FormControl fullWidth>
                <InputLabel>Bangle Size (inches)</InputLabel>
                <Select
                  value={bangleSize}
                  onChange={(e) => setBangleSize(e.target.value)}
                  label="Bangle Size (inches)"
                >
                  {bangleSizes.map((size) => (
                    <MenuItem key={size} value={size}>{size}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            {/* Additional Fields */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={4}
                label="Residential Address"
                value={formData.residentialAddress}
                onChange={handleInputChange('residentialAddress')}
              />
            </Grid>
          </Grid>

          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{ minWidth: 200 }}
            >
              REGISTER
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default KanyaRegistrationFormAI; 