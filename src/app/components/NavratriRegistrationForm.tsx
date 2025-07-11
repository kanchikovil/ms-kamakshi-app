import React, { useState, useEffect, useRef } from "react";
import { TextField, Button, Grid, MenuItem, Typography, ToggleButtonGroup, ToggleButton, useMediaQuery } from "@mui/material";
import ReCAPTCHA from "react-google-recaptcha";
import APP_CONFIG from "../utils/config";
import { useNotification } from "../context/NotificationContext";
import { useRouter, useSearchParams } from "next/navigation";
import axios_instance from "../utils/axiosInstance";
import EventDaySelector, { EventDay } from "./EventDaySelector";
import { Dayjs } from "dayjs";
import { Collapse, IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { Box, margin } from "@mui/system";
interface Event {
  eventId?: number;
  eventName: string;
  startDate: Dayjs | null;
  endDate: Dayjs | null;
  registrationStartDate: Dayjs | null;
  registrationEndDate: Dayjs | null;
  eventDays?: EventDay[];
}

interface EventsResponse {
  status: string;
  data: Event[];
}

interface EventDaysResponse {
  status: string;
  data: EventDay[];
}

interface FormDataType {
  attendeeName: string;
  eventId: number;
  dayId: number;
  regType: string;
  attendeeAadharNumber: number;
  attendeePhone: number;
  attendeeEmail: string;
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
  dressSize: number;
  legchainSize: number;
  bangleSize: number;
}

const NavratriRegistrationForm = () => {

  //  const router = useRouter();
  const searchParams = useSearchParams();

  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [openToggles, setOpenToggles] = React.useState<{ [key: string]: boolean }>({});


  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const registrationType = searchParams.get("registrationType") || "default";
  const isMobile = useMediaQuery('(max-width:640px)');

  const [errors, setErrors] = useState<{ attendeeAge?: string }>({});

  const [eventDays, setEventDays] = useState<EventDay[]>();
  const [eventDayError, setEventDayError] = useState(false);
  const [formData, setFormData] = useState<FormDataType>({
    attendeeName: "",
    eventId: 1,
    dayId: 1,
    attendeeAge: 0,
    regType: registrationType === "kanya" ? "kanya" : "suvasini",
    attendeeAadharNumber: 0,
    attendeePhone: 0,
    attendeeEmail: "",
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
    dressSize: 0,
    legchainSize: 0,
    bangleSize: 0,
  });
  const { showSuccess, showError } = useNotification();
  const schoolStandards = [
    '1st', '2nd', '3rd', '4th', '5th',
    '6th', '7th', '8th', '9th', '10th',
    '11th', '12th'
  ];
  const [gothrams, setGothrams] = useState<string[]>([]);
  const [vedams, setVedams] = useState<string[]>([]);

  const [selectedDayId, setSelectedDayId] = useState<number | null>(null);
  const [ageLimits, setAgeLimits] = useState({ min: 1, max: 100 });
  const fetchGothramsAndVedams = async () => {
    try {
      const gothramRes = await axios_instance.get(APP_CONFIG.apiBaseUrl + "/gothrams");
      const vedamRes = await axios_instance.get(APP_CONFIG.apiBaseUrl + "/vedams");

      setGothrams(gothramRes.data ?? []);  // Make sure API returns an array
      setVedams(vedamRes.data ?? []);
    } catch (error) {
      showError("Failed to fetch dropdown data: " + error);
    }
  };
  useEffect(() => {
    fetchGothramsAndVedams();
  }, []);

  const gothramFields = ['fathersGothram', 'mothersVedam','husbandsGothram'];
  const vedamFields = ['fathersVedam', 'mothersVedam'];
  const fieldOptions = {
    fathersGothram: gothrams,
    fathersVedam: vedams,
    mothersVedam: vedams,
    husbandsGothram: gothrams,
    husbandVedam: vedams,
    maternalGothram: gothrams

  };

  const handleFieldToggle = (fieldName: string) => {
    setOpenToggles((prev) => ({
      ...prev,
      [fieldName]: !prev[fieldName],
    }));
  };
  // Handle form changes
  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    const age = Number(formData.attendeeAge);
    if (
      formData.attendeeAge &&
      (age < ageLimits.min || age > ageLimits.max)
    ) {
      setErrors((prev) => ({
        ...prev,
        attendeeAge: `Age must be between ${ageLimits.min} and ${ageLimits.max}`,
      }));
    } else {
      setErrors((prev) => ({ ...prev, attendeeAge: '' }));
    }
  }, [formData.attendeeAge, ageLimits]);


  const fetchEventDays = async () => {
    try {
      const eventsListRes = await axios_instance.get<EventsResponse>(APP_CONFIG.apiBaseUrl + "/events");
      const eventsList = eventsListRes.data;
      if (eventsList && Array.isArray(eventsList) && eventsList.length > 0) {
        const eventId = eventsList[0].eventId
        setFormData({ ...formData, eventId });
        //        const response = await axios_instance.get<EventDaysResponse>(APP_CONFIG.apiBaseUrl + `/events/${eventId}/days/${registrationType}/${formData.attendeeAge}`);
        const response = await axios_instance.get<EventDaysResponse>(APP_CONFIG.apiBaseUrl + `/events/${eventId}/days/${registrationType}`);
        const eventDays: EventDay[] = response.data.data ?? [];
        setEventDays(eventDays);
      }
    } catch (error) {
      showError('Failed to get available slots: ' + error);
    }
  };


  //   setSelectedDayId(dayId);

  //   const selectedDay = eventDays.find((day) => day.dayId === dayId);
  //   if (selectedDay) {
  //     setAgeLimits({
  //       min: selectedDay.minAge,
  //       max: selectedDay.maxAge,
  //     });
  //   } else {
  //     // fallback if not found
  //     setAgeLimits({ min: 1, max: 100 });
  //   }
  // };

  useEffect(() => {
    fetchEventDays();
  }, []);

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

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
  };

  // Phone number validation
  const validatePhone = () => {
    const phone = formData.attendeePhone + '';
    return /^\d{10}$/.test(phone);
  };

  const validEventDay = () => {
    if (formData.dayId === null) {
      setEventDayError(true);
      return false;
    }
    return true;
  }

  const validEmail = (): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(formData.attendeeEmail);
  };

  // Submit form
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!validEventDay()) {
      showError("Please select atleast one Event Day.");
      return;
    }
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
        {/* <Grid item xs={12}>
          <TextField select name="regType" label="Registration Type" value={formData.regType} onChange={handleChange} fullWidth>
            <MenuItem value="" disabled>
              <em>Select Registration Type</em>
            </MenuItem>
            <MenuItem value="kanya">Kanya</MenuItem>
            <MenuItem value="suvasini">Suvasini</MenuItem>
          </TextField>
        </Grid> */}
        {/* <Grid item xs={12}>
          <EventDaySelector
            eventDays={eventDays ?? []}
            selectedDayId={formData.dayId}
            onChange={(id) => {
              handleChange({
                target: {
                  name: "dayId",
                  value: id
                }
              });
            }}
          />
        </Grid> */}
        <Grid item xs={12}>
          <EventDaySelector
            eventDays={eventDays ?? []}
            selectedDayId={formData.dayId}
            onChange={(id) => {
              // Update dayId in formData
              handleChange({
                target: {
                  name: "dayId",
                  value: id,
                },
              });

              // 👇 Find selected day using dayId and set age limits
              const selectedDay = (eventDays ?? []).find((day) => day.dayId === id);
              if (selectedDay) {
                setAgeLimits({
                  min: selectedDay.minAge,
                  max: selectedDay.maxAge,
                });
              } else {
                setAgeLimits({ min: 1, max: 100 }); // fallback
              }
            }}
          />
        </Grid>

        {formData.regType && (<>
          {/* Aadhaar Number */}
          <Grid item xs={4}>
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
          <Grid item xs={4}>
            <TextField required name="attendeePhone" label="Mobile Number" type="text" // Use "text" instead of "number" to control input manually
              inputProps={{ maxLength: 10, inputMode: "numeric", pattern: "[0-9]*" }} value={formData.attendeePhone} onChange={handleChange} fullWidth />
          </Grid>
          <Grid item xs={4}>
            <TextField required name="attendeeEmail" label="Email" type="text" // Use "text" instead of "number" to control input manually
              value={formData.attendeeEmail} onChange={handleChange} fullWidth />
          </Grid>

          {/* Parents Details */}
          {/* {(['attendeeName', 'attendeeAge', 'motherTongue', 'fathersName',
            'fathersGothram', 'fathersVedam', 'fathersProfession',
            'mothersName', 'mothersVedam', 'mothersProfession'] as Array<keyof FormDataType>).map((field, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <TextField label={field.replace(/([A-Z])/g, ' $1')} name={field} value={formData[field]} onChange={handleChange} fullWidth />
              </Grid>
            ))} */}
          {([
            'attendeeName', 'attendeeAge', 'motherTongue', 'fathersName',
            'fathersGothram', 'fathersVedam', 'fathersProfession',
            'mothersName', 'mothersVedam', 'mothersProfession'
          ] as Array<keyof FormDataType>).map((field, index) => (
            <Grid item xs={12} sm={4} key={index}>
              {field === 'attendeeAge' ? (
                // ✅ Custom handling for attendeeAge field
                <TextField
                  type="number"
                  label="Attendee Age"
                  name="attendeeAge"
                  value={formData.attendeeAge || ''}
                  onChange={handleChange}
                  inputProps={{ min: ageLimits.min, max: ageLimits.max }}
                  fullWidth
                  error={Boolean(errors.attendeeAge)}
                  helperText={errors.attendeeAge}
                />
              ) : fieldOptions[field as keyof typeof fieldOptions] ? (
                // Dropdown (select) input
                <TextField
                  select
                  label={field.replace(/([A-Z])/g, ' $1')}
                  name={field}
                  value={formData[field] || ''}
                  onChange={handleChange}
                  fullWidth
                >
                  {(fieldOptions[field as keyof typeof fieldOptions] as any[]).map((option) => {
                    const value = typeof option === 'string' ? option : option.name;
                    return (
                      <MenuItem key={value} value={value}>
                        {value}
                      </MenuItem>
                    );
                  })}
                </TextField>
              ) : (
                // Normal input for text fields
                <TextField
                  label={field.replace(/([A-Z])/g, ' $1')}
                  name={field}
                  value={formData[field] || ''}
                  onChange={handleChange}
                  fullWidth
                />
              )}
            </Grid>
          ))}

          {/* Horoscope, Slogam, Classical Music */}
          {(['horoscopeName', 'slogamKnown', 'classicalMusic'] as Array<keyof FormDataType>).map((field, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <TextField label={field.replace(/([A-Z])/g, ' $1')} name={field} value={formData[field]} onChange={handleChange} fullWidth />
            </Grid>
          ))}

          {/* kanya Details*/}
          {formData.regType === 'kanya' &&
            (['schoolStandard', 'schoolName'] as Array<keyof FormDataType>).map((field, index) => (
              <Grid item xs={12} sm={4} key={index}>
                {field === 'schoolStandard' ? (
                  <TextField
                    select
                    label="School Standard"
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    fullWidth
                    size="small"
                    variant="outlined"
                    SelectProps={{
                      MenuProps: {
                        PaperProps: {
                          style: {
                            maxHeight: 250,
                            width: 'auto',
                          },
                        },
                      },
                    }}
                  >
                    {schoolStandards.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                ) : (
                  <TextField
                    label="School Name"
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    fullWidth
                    size="small"
                    variant="outlined"
                  />
                )}
              </Grid>
            ))}


          {/* suvasini Details*/}
{formData.regType === 'suvasini' && (
  [
    'maternalGothram',
    'husbandsName',
    'husbandsGothram',
    'husbandsProfession',
    'husbandVedam'
  ] as Array<keyof FormDataType>
).map((field, index) => (
  <Grid item xs={12} sm={4} key={index}>
    {fieldOptions[field as keyof typeof fieldOptions] ? (
      <TextField
        select
        label={field.replace(/([A-Z])/g, ' $1').trim()}
        name={field}
        value={formData[field] || ''}
        onChange={handleChange}
        fullWidth
      >
        <MenuItem value="" disabled>
          {`Select ${field.replace(/([A-Z])/g, ' ').trim()}`}
        </MenuItem>
        {(fieldOptions[field as keyof typeof fieldOptions] as any[]).map((option) => {
          const value = typeof option === 'string' ? option : option.name;
          return (
            <MenuItem key={value} value={value}>
              {value}
            </MenuItem>
          );
        })}
      </TextField>
    ) : (
      <TextField
        label={field.replace(/([A-Z])/g, ' $1').trim()}
        name={field}
        value={formData[field] || ''}
        onChange={handleChange}
        fullWidth
      />
    )}
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
                <Typography fontSize={isMobile ? 13 : 14} fontWeight={600} mb={1} display="flex" alignItems="center">
                  {item.label}
                  {isMobile && (
                    <IconButton size="small" onClick={() => handleFieldToggle(item.name)}>

                    </IconButton>
                  )}
                </Typography>
                {isMobile ? (

                  <ToggleButtonGroup
                    value={formData[item.name]}
                    exclusive
                    onChange={handleToggleChange(item.name)}
                    sx={{ flexWrap: 'wrap' }}
                  >
                    {item.options.map((size) => (
                      <ToggleButton
                        key={size}
                        value={size}
                        sx={{
                          mr: 0.5,
                          mb: 0.5,
                          minWidth: 36,
                          padding: '4px 8px',
                          backgroundColor: '#fff',
                          '&.Mui-selected': {
                            backgroundColor: '#693108',
                            color: '#fff'
                          }
                        }}
                      >
                        <Typography variant="caption">{size}</Typography>
                      </ToggleButton>
                    ))}
                  </ToggleButtonGroup>

                ) : (
                  <ToggleButtonGroup
                    value={formData[item.name]}
                    exclusive
                    orientation="horizontal"
                    onChange={handleToggleChange(item.name)}
                  >
                    {item.options.map((size) => (
                      <ToggleButton
                        key={size}
                        value={size}
                        sx={{
                          mr: 0.5,
                          minWidth: 36,
                          padding: '4px 8px',
                          '&.Mui-selected': {
                            backgroundColor: '#693108',
                            color: '#fff'
                          }
                        }}
                      >
                        <Typography variant="caption">{size}</Typography>
                      </ToggleButton>
                    ))}
                  </ToggleButtonGroup>
                )}


              </Grid>
            ))}

          {/* CAPTCHA */}
          {/* <Grid item xs={12}>
            <ReCAPTCHA
              sitekey={APP_CONFIG.recaptchaSiteKey}
              onChange={handleCaptchaChange}
              ref={recaptchaRef}
            />
          </Grid> */}

          {/* Submit Button */}
          <Grid item xs={12} sx={{ margin: '2px' }}>
            <Button type="submit">Register</Button>
          </Grid>

        </>)
        }
      </Grid>
    </form>
  );
};

export default NavratriRegistrationForm;
