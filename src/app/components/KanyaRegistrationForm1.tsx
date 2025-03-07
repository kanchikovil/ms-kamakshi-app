import React, { useState, useEffect } from "react";
import { TextField, Button, Grid, MenuItem, Typography, ToggleButtonGroup, ToggleButton } from "@mui/material";
import ReCAPTCHA from "react-google-recaptcha";

interface FormDataType {
  registrationType: string;
  aadhaar1: string;
  aadhaar2: string;
  aadhaar3: string;
  phone: string;
  countryCode: string;
  horoscopeName: string;
  slogamKnown: string;
  classicalMusic: string;
  motherTongue: string;
  fathersName: string;
  maternalGothram: string;
  fathersGothram: string;
  fathersVedam: string;
  fathersProfession: string;
  mothersName: string;
  mothersVedam: string;
  mothersProfession: string;
  kulaDevatha: string;
  place: string;
  residentialAddress: string;
  dressSize: string;
  kolusuSize: string;
  bangleSize: string;
}


const KanyaRegistrationForm1 = () => {

  const [formData, setFormData] = useState<FormDataType>({
    registrationType: "Kanya",
    aadhaar1: "",
    aadhaar2: "",
    aadhaar3: "",
    phone: "",
    countryCode: "+91",
    horoscopeName: "",
    slogamKnown: "",
    classicalMusic: "",
    motherTongue: "",
    fathersName: "",
    maternalGothram: "",
    fathersGothram: "",
    fathersVedam: "",
    fathersProfession: "",
    mothersName: "",
    mothersVedam: "",
    mothersProfession: "",
    kulaDevatha: "",
    place: "",
    residentialAddress: "",
    dressSize: "",
    kolusuSize: "",
    bangleSize: "",
  });

  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  // Handle form changes
  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleToggleChange = (name: any) => (event: any, value: any) => {
    if (value !== null) {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Aadhaar validation
  const validateAadhaar = () => {
    const { aadhaar1, aadhaar2, aadhaar3 } = formData;
    const aadhaar = aadhaar1 + aadhaar2 + aadhaar3;
    return /^\d{12}$/.test(aadhaar);
  };

  // Phone number validation
  const validatePhone = () => {
    return /^\d{10}$/.test(formData.phone);
  };

  // Submit form
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!validateAadhaar()) {
      alert("Invalid Aadhaar number. Please enter a valid 12-digit Aadhaar.");
      return;
    }
    if (!validatePhone()) {
      alert("Invalid phone number. Please enter a 10-digit mobile number.");
      return;
    }
    if (!captchaToken) {
      alert("Please complete the captcha verification.");
      return;
    }

    const response = await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...formData, aadhaar: formData.aadhaar1 + formData.aadhaar2 + formData.aadhaar3, captchaToken }),
    });

    const data = await response.json();
    if (data.success) {
      alert("Registration successful!");
    } else {
      alert("Registration failed: " + data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        {/* Registration Type */}
        <Grid item xs={12}>
          <TextField select name="registrationType" label="Registration Type" value={formData.registrationType} onChange={handleChange} fullWidth>
            <MenuItem value="Kanya">Kanya</MenuItem>
            <MenuItem value="Suvikshini">Suvikshini</MenuItem>
          </TextField>
        </Grid>

        {/* Aadhaar Number */}
        <Grid item xs={4}>
          <TextField required name="aadhaar1" label="Aadhaar (First 4)" inputProps={{ maxLength: 4 }} value={formData.aadhaar1} onChange={handleChange} fullWidth />
        </Grid>
        <Grid item xs={4}>
          <TextField required name="aadhaar2" label="Aadhaar (Middle 4)" inputProps={{ maxLength: 4 }} value={formData.aadhaar2} onChange={handleChange} fullWidth />
        </Grid>
        <Grid item xs={4}>
          <TextField required name="aadhaar3" label="Aadhaar (Last 4)" inputProps={{ maxLength: 4 }} value={formData.aadhaar3} onChange={handleChange} fullWidth />
        </Grid>

        {/* Phone Number */}
        <Grid item xs={3}>
          <TextField select name="countryCode" label="Country Code" value={formData.countryCode} onChange={handleChange} fullWidth>
            <MenuItem value="+91">+91 (India)</MenuItem>
            <MenuItem value="+1">+1 (USA)</MenuItem>
            <MenuItem value="+44">+44 (UK)</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={9}>
          <TextField required name="phone" label="Mobile Number" inputProps={{ maxLength: 10 }} value={formData.phone} onChange={handleChange} fullWidth />
        </Grid>

        {/* Horoscope, Slogam, Classical Music */}
        {(['horoscopeName', 'slogamKnown', 'classicalMusic'] as Array<keyof FormDataType>).map((field, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <TextField label={field.replace(/([A-Z])/g, ' $1')} name={field} value={formData[field]} onChange={handleChange} fullWidth />
          </Grid>
        ))}

        {/* Parents Details */}
        {(['motherTongue', 'fathersName', 'maternalGothram',
          'fathersGothram', 'fathersVedam', 'fathersProfession',
          'mothersName', 'mothersVedam', 'mothersProfession'] as Array<keyof FormDataType>).map((field, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <TextField label={field.replace(/([A-Z])/g, ' $1')} name={field} value={formData[field]} onChange={handleChange} fullWidth />
            </Grid>
          ))}

        {/* Address & Devatha */}
        {(['kulaDevatha', 'place', 'residentialAddress'] as Array<keyof FormDataType>).map((field, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <TextField label={field.replace(/([A-Z])/g, ' $1')} name={field} value={formData[field]} onChange={handleChange} fullWidth />
          </Grid>
        ))}

        {/* Dress, Kolusu, Bangle Sizes */}
        {([
          { name: 'dressSize', label: 'Girls Dress Size', options: [16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38] },
          { name: 'kolusuSize', label: 'Leg Chain (Kolusu) Size', options: [5.0, 5.5, 6.0, 6.5, 7.0, 7.5, 8.0, 8.5, 9.0, 9.5, 10.0, 10.5] },
          { name: 'bangleSize', label: 'Bangle Size', options: [1.8, 1.10, 1.12, 2.0, 2.2, 2.4, 2.6, 2.8] }
        ] as { name: keyof FormDataType; label: string; options: number[] }[]).map((item, index) => (
          <Grid item xs={12} sm={12} key={index}>
            <Typography>{item.label}</Typography>
            <ToggleButtonGroup value={formData[item.name]} exclusive onChange={handleToggleChange(item.name)}>
              {item.options.map((size) => (
                <ToggleButton key={size} value={size}>
                  <Typography variant='caption'>{size}</Typography>
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </Grid>
        ))}
        {/* CAPTCHA */}
        <Grid item xs={12}>
          <ReCAPTCHA
            sitekey="6LfVmewqAAAAAIPZGb3ASDDjjrG-meg07kZn5HwF"
            onChange={(token) => setCaptchaToken(token)}
          />
        </Grid>

        {/* Submit Button */}
        <Grid item xs={12}>
          <Button variant="contained" type="submit">Register</Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default KanyaRegistrationForm1;
