import React, { useState, useEffect } from "react";
import { TextField, Button, Grid, MenuItem, Typography, ToggleButtonGroup, ToggleButton } from "@mui/material";
import ReCAPTCHA from "react-google-recaptcha";
import APP_CONFIG from "../utils/config";
import { useNotification } from "../context/NotificationContext";
import { useRouter, useSearchParams } from "next/navigation";

interface FormDataType {
  attendeeName: string;
  eventId: number;
  dayId: number;
  regType: string;
  attendeeAadharNumber: number;
  attendeePhone: number;
  attendeeAge: number;
  countryCode: string;
  horoscopeName: string;
  slogamKnown: string;
  classicalMusic: string;
  motherTongue: string;
  fathersName: string;
  fathersGothram: string;
  fathersVedam: string;
  fathersProfession: string;
  schoolName: string;
  schoolStandard: string;
  maternalGothram: string;
  husbandsName: string;
  husbandsGothram: string;
  husbandsProfession: string;
  husbandVedam: string;
  mothersName: string;
  mothersVedam: string;
  mothersProfession: string;
  kulaDevatha: string;
  place: string;
  address: string;
  dressSize: string;
  legchainSize: string;
  bangleSize: string;
}

const NavratriRegistrationForm = () => {

//  const router = useRouter();
  const searchParams = useSearchParams();

  const registrationType = searchParams.get("registrationType") || "default";

  const [formData, setFormData] = useState<FormDataType>({
    attendeeName: "",
    eventId: 1,
    dayId: 1,
    attendeeAge: 0,
    regType: registrationType === "kanya" ? "kanya" : "suvahini",
    attendeeAadharNumber: 0,
    attendeePhone: 0,
    countryCode: "+91",
    horoscopeName: "",
    slogamKnown: "",
    classicalMusic: "",
    motherTongue: "",
    fathersName: "",
    fathersGothram: "",
    fathersVedam: "",
    fathersProfession: "",
    schoolName: "",
    schoolStandard: "",
    maternalGothram: "",
    husbandsName: "",
    husbandsGothram: "",
    husbandsProfession: "",
    husbandVedam: "",
    mothersName: "",
    mothersVedam: "",
    mothersProfession: "",
    kulaDevatha: "",
    place: "",
    address: "",
    dressSize: "",
    legchainSize: "",
    bangleSize: "",
  });
  const { showSuccess, showError } = useNotification();

  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  // Handle form changes
  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    handleChange({
      target: {
        name: "regType",
        value: registrationType
      }
    });
  }, [registrationType]);

  const handleToggleChange = (name: any) => (event: any, value: any) => {
    if (value !== null) {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Aadhaar validation
  const validateAadhaar = () => {
    const { attendeeAadharNumber } = formData;
    const aadhar = attendeeAadharNumber + '';
    return /^\d{12}$/.test(aadhar);
  };

  // Phone number validation
  const validatePhone = () => {
    const phone = formData.attendeePhone + '';
    return /^\d{10}$/.test(phone);
  };

  // Submit form
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!validateAadhaar()) {
      showError("Invalid Aadhaar number. Please enter a valid 12-digit Aadhaar.");
      return;
    }
    if (!validatePhone()) {
      showError("Invalid phone number. Please enter a 10-digit mobile number.");
      return;
    }
    // if (!captchaToken) {
    //   showError("Please complete the captcha verification.");
    //   return;
    // }

    const response = await fetch(APP_CONFIG.apiBaseUrl + "/registrations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...formData, captchaToken }),
    });

    const data = await response.json();
    if (data.status === "success") {
      showSuccess("Registration successful!");
    } else {
      showError("Registration failed: " + data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        {/* Registration Type */}
        <Grid item xs={12}>
          <TextField select name="regType" label="Registration Type" value={formData.regType} onChange={handleChange} fullWidth>
            <MenuItem value="" disabled>
              <em>Select Registration Type</em>
            </MenuItem>
            <MenuItem value="kanya">Kanya</MenuItem>
            <MenuItem value="suvahini">Suvahini</MenuItem>
          </TextField>
        </Grid>

        {formData.regType && (<>
          {/* Aadhaar Number */}
          <Grid item xs={6}>
            <TextField required name="attendeeAadharNumber" label="Aadhaar Number" type="text" // Use "text" instead of "number" to control input manually
              inputProps={{ maxLength: 12, inputMode: "numeric", pattern: "[0-9]*" }} value={formData.attendeeAadharNumber} onChange={handleChange} fullWidth />
          </Grid>
          {/* Phone Number */}
          {/* <Grid item xs={3}>
          <TextField select name="countryCode" label="Country Code" value={formData.countryCode} onChange={handleChange} fullWidth>
            <MenuItem value="+91">+91 (India)</MenuItem>
            <MenuItem value="+1">+1 (USA)</MenuItem>
            <MenuItem value="+44">+44 (UK)</MenuItem>
          </TextField>
        </Grid> */}
          <Grid item xs={6}>
            <TextField required name="attendeePhone" label="Mobile Number" type="text" // Use "text" instead of "number" to control input manually
              inputProps={{ maxLength: 10, inputMode: "numeric", pattern: "[0-9]*" }} value={formData.attendeePhone} onChange={handleChange} fullWidth />
          </Grid>

          {/* Horoscope, Slogam, Classical Music */}
          {(['horoscopeName', 'slogamKnown', 'classicalMusic'] as Array<keyof FormDataType>).map((field, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <TextField label={field.replace(/([A-Z])/g, ' $1')} name={field} value={formData[field]} onChange={handleChange} fullWidth />
            </Grid>
          ))}

          {/* Parents Details */}
          {(['attendeeName', 'attendeeAge', 'motherTongue', 'fathersName',
            'fathersGothram', 'fathersVedam', 'fathersProfession',
            'mothersName', 'mothersVedam', 'mothersProfession'] as Array<keyof FormDataType>).map((field, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <TextField label={field.replace(/([A-Z])/g, ' $1')} name={field} value={formData[field]} onChange={handleChange} fullWidth />
              </Grid>
            ))}

          {/* kanya Details*/}
          {formData.regType === 'kanya' && (['schoolStandard', 'schoolName'] as Array<keyof FormDataType>).map((field, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <TextField label={field.replace(/([A-Z])/g, ' $1')} name={field} value={formData[field]} onChange={handleChange} fullWidth />
            </Grid>
          ))}

          {/* suvahini Details*/}
          {formData.regType === 'suvahini' && (['maternalGothram', 'husbandsName', 'husbandsGothram',
            'husbandsProfession', 'husbandVedam'] as Array<keyof FormDataType>).map((field, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <TextField label={field.replace(/([A-Z])/g, ' $1')} name={field} value={formData[field]} onChange={handleChange} fullWidth />
              </Grid>
            ))}

          {/* Address & Devatha */}
          {(['kulaDevatha', 'place', 'address'] as Array<keyof FormDataType>).map((field, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <TextField label={field.replace(/([A-Z])/g, ' $1')} name={field} value={formData[field]} onChange={handleChange} fullWidth />
            </Grid>
          ))}

          {/* Dress, Kolusu, Bangle Sizes */}
          {formData.regType === 'kanya' &&
            ([
              { name: 'dressSize', label: 'Girls Dress Size', options: [16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38] },
              { name: 'legchainSize', label: 'Leg Chain (Kolusu) Size', options: [5.0, 5.5, 6.0, 6.5, 7.0, 7.5, 8.0, 8.5, 9.0, 9.5, 10.0, 10.5] },
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
            <Button type="submit">Register</Button>
          </Grid>
          
        </>)
        }
      </Grid>
    </form>
  );
};

export default NavratriRegistrationForm;
